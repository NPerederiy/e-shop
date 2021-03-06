﻿using System;
using Catalog.Core.Domain.Common;

namespace Catalog.Core.Domain.Entities
{
    public class CatalogItem : EntityBase
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureFileName { get; set; }
        public string PictureUri { get; set; }

        public Guid CatalogTypeId { get; set; }
        public virtual CatalogType CatalogType { get; set; }

        public Guid CatalogBrandId { get; set; }
        public virtual Brand CatalogBrand { get; set; }
    }
}
