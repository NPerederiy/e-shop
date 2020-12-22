using System;

namespace Web.Shopping.HttpAggregator.Models
{
    public class ProductData
    {
        public Guid Id { get; set; }
        public string ProductName { get; set; }
        public string BrandName { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUri { get; set; }
    }
}
