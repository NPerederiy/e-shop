using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Shopping.HttpAggregator.Models;

namespace Web.Shopping.HttpAggregator.Abstractions
{
    public interface ICatalogService
    {
        Task<IEnumerable<CategoryData>> GetCategoriesAsync();
        Task<IEnumerable<BrandData>> GetBrandsAsync();
        Task<IEnumerable<ProductData>> GetProductsAsync();
        Task<ProductData> GetProductAsync(Guid id);
        Task<Guid> CreateProduct(ProductData product);
        Task UpdateProduct(ProductData product);
        Task DeleteProduct(Guid id);
    }
}
