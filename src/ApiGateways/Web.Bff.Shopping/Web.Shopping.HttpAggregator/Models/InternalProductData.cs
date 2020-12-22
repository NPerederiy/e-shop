using System;

namespace Web.Shopping.HttpAggregator.Models
{
    public class InternalProductData
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureFileName { get; set; }
        public string PictureUri { get; set; }
        public Guid CatalogTypeId { get; set; }
        public Guid CatalogBrandId { get; set; }
    }
}
