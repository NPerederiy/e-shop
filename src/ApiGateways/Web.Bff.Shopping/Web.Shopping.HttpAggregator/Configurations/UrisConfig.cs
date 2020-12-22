using System;

namespace Web.Shopping.HttpAggregator.Configurations
{
    public static class UrisConfig
    {
        // APIs. 
        public static readonly string CatalogApi = "https://localhost:5021/api/v1";
        public static readonly string BasketApi = "https://localhost:5051/api/v1";
        public static readonly string IdentityApi = "https://localhost:5041/api/v1";
        public static readonly string OrderingApi = "https://localhost:5031/api/v1";

        // Identity operations.
        // TODO: Paste identity related urls here.

        // Catalog operations.
        public static string GetCategories() => $"{CatalogApi}/type";
        public static string GetBrands() => $"{CatalogApi}/brand";
        public static string GetProducts() => $"{CatalogApi}/item";
        public static string CreateCategory() => $"{CatalogApi}/type";
        public static string CreateBrand() => $"{CatalogApi}/brand";
        public static string CreateProduct() => $"{CatalogApi}/item";
        public static string GetCategoryById(Guid id) => $"{CatalogApi}/type/{id}";
        public static string GetBrandById(Guid id) => $"{CatalogApi}/brand/{id}";
        public static string GetProductById(Guid id) => $"{CatalogApi}/item/{id}";
        public static string UpdateProductById(Guid id) => $"{CatalogApi}/item/{id}";
        public static string RemoveProductById(Guid id) => $"{CatalogApi}/item/{id}";

        // Ordering operations.
        // TODO: Paste ordering related urls here.
    }
}
