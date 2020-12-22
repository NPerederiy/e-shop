using System;
using Ordering.Core.Domain.Common;

namespace Ordering.Core.Domain.Entities
{
    public class OrderedItem : EntityBase
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }

        public Guid OrderId { get; set; }
        public Order Order { get; set; }
    }
}
