using System;
using Ordering.Core.Domain.Common;

namespace Ordering.Core.Domain.Entities
{
    public class OrderedItem : EntityBase
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public Guid ProductId { get; set; }
        public virtual Guid OrderId { get; set; }
        public virtual Order Order { get; set; }
    }
}
