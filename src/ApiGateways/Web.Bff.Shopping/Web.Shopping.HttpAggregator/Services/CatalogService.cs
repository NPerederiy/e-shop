using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Web.Shopping.HttpAggregator.Abstractions;
using Web.Shopping.HttpAggregator.Configurations;
using Web.Shopping.HttpAggregator.Models;

namespace Web.Shopping.HttpAggregator.Services
{
    public class CatalogService : ICatalogService
    {
        private readonly HttpClient _httpClient;

        public CatalogService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<IEnumerable<CategoryData>> GetCategoriesAsync()
        {
            var response = await _httpClient.GetAsync(UrisConfig.GetCategories());

            if (response.IsSuccessStatusCode)
                return await response.Content.ReadFromJsonAsync<IEnumerable<CategoryData>>();

            return Array.Empty<CategoryData>();
        }

        public async Task<IEnumerable<BrandData>> GetBrandsAsync()
        {
            var response = await _httpClient.GetAsync(UrisConfig.GetBrands());

            if (response.IsSuccessStatusCode)
                return await response.Content.ReadFromJsonAsync<IEnumerable<BrandData>>();

            return Array.Empty<BrandData>();
        }

        public async Task<IEnumerable<ProductData>> GetProductsAsync()
        {
            var response = await _httpClient.GetAsync(UrisConfig.GetProducts());

            if (response.IsSuccessStatusCode)
                return await response.Content.ReadFromJsonAsync<IEnumerable<ProductData>>();

            return Array.Empty<ProductData>();
        }

        public async Task<ProductData> GetProductAsync(Guid id)
        {
            var response = await _httpClient.GetAsync(UrisConfig.GetProductById(id));

            if (response.IsSuccessStatusCode)
                return await response.Content.ReadFromJsonAsync<ProductData>();

            return null;
        }

        public async Task<Guid> CreateProduct(ProductData product)
        {
            // Preparing the data.
            var rawData = new InternalProductData
            {
                Name = product.ProductName,
                Description = product.Description,
                Price = product.Price,
                PictureUri = product.PictureUri
            };

            var categories = await GetCategoriesAsync();
            var brands = await GetBrandsAsync();

            // Getting category info.
            var category = categories.FirstOrDefault(x =>
                string.Equals(x.Name, product.CategoryName, StringComparison.CurrentCultureIgnoreCase));

            if (category == null)
            {
                var payload = new CategoryData { Name = product.CategoryName };
                var json = JsonConvert.SerializeObject(payload);
                var resp = await _httpClient.PostAsync(UrisConfig.CreateCategory(), new StringContent(json));
                if (resp.IsSuccessStatusCode)
                    rawData.CatalogTypeId = await resp.Content.ReadFromJsonAsync<Guid>();
                else
                    throw new Exception("Can't create a product category.");
            }
            else
            {
                rawData.CatalogTypeId = category.Id;
            }

            // Getting brand info.
            var brand = brands.FirstOrDefault(x =>
                string.Equals(x.Name, product.BrandName, StringComparison.CurrentCultureIgnoreCase));

            if (brand == null)
            {
                var payload = new CategoryData { Name = product.BrandName };
                var json = JsonConvert.SerializeObject(payload);
                var resp = await _httpClient.PostAsync(UrisConfig.CreateBrand(), new StringContent(json));
                if (resp.IsSuccessStatusCode)
                    rawData.CatalogBrandId = await resp.Content.ReadFromJsonAsync<Guid>();
                else
                    throw new Exception("Can't create a product brand.");
            }
            else
            {
                rawData.CatalogBrandId = brand.Id;
            }

            // Creating a product.
            var productJson = JsonConvert.SerializeObject(rawData);
            var response = await _httpClient.PostAsync(UrisConfig.CreateProduct(), new StringContent(productJson));

            if (!response.IsSuccessStatusCode)
                throw new Exception("Can't create a product brand.");
            
            return await response.Content.ReadFromJsonAsync<Guid>();
        }

        public async Task UpdateProduct(ProductData product)
        {
            var resp1 = await _httpClient.GetAsync(UrisConfig.GetProductById(product.Id));
            if (!resp1.IsSuccessStatusCode)
                throw new Exception("Can't get the product.");

            var internalProduct = await resp1.Content.ReadFromJsonAsync<InternalProductData>();
            if (internalProduct == null)
                throw new Exception("Can't get the product.");

            internalProduct.Name = product.ProductName;
            internalProduct.Description = product.Description;
            internalProduct.Price = product.Price;
            internalProduct.PictureUri = product.PictureUri;

            // Checking the product category.
            var resp2 = await _httpClient.GetAsync(UrisConfig.GetCategoryById(internalProduct.CatalogTypeId));
            if (!resp2.IsSuccessStatusCode)
                throw new Exception("Can't get the product category.");
            var category = await resp2.Content.ReadFromJsonAsync<CategoryData>();
            if (category == null)
                throw new Exception("Can't get the product category.");

            if (product.CategoryName != category.Name)
            {
                // TODO: Create category and update the internal product.
            }

            // Checking the product brand.
            var resp3 = await _httpClient.GetAsync(UrisConfig.GetBrandById(internalProduct.CatalogBrandId));
            if (!resp3.IsSuccessStatusCode)
                throw new Exception("Can't get the product brand.");
            var brand = await resp3.Content.ReadFromJsonAsync<BrandData>();
            if (brand == null)
                throw new Exception("Can't get the product brand.");

            if (product.BrandName != brand.Name)
            {
                // TODO: Create brand and update the internal product.
            }

            // Saving the changes.
            var productJson = JsonConvert.SerializeObject(internalProduct);
            var response = await _httpClient.PostAsync(UrisConfig.UpdateProductById(internalProduct.Id), new StringContent(productJson));

            if (!response.IsSuccessStatusCode)
                throw new Exception("Can't create a product.");
        }

        public Task DeleteProduct(Guid id)
        {
            // TODO: Remove catalog type (optional)
            // TODO: Remove brand (optional)

            return _httpClient.DeleteAsync(UrisConfig.RemoveProductById(id));
        }
    }
}
