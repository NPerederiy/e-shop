using System.Collections.Generic;
using Catalog.Core.Domain.Common;

namespace Catalog.Core.Domain.Entities
{
    public class Brand : EntityBase
    {
        public string Name { get; set; }

        public IEnumerable<CatalogItem> CatalogItems { get; set; }
    }
}
