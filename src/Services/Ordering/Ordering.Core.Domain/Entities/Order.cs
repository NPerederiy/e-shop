using System;
using System.Collections.Generic;
using Ordering.Core.Domain.Common;

namespace Ordering.Core.Domain.Entities
{
    public class Order : EntityBase
    {
        public long OrderNumber { get; set; }
        public Guid BuyerId { get; set; }
        public string Buyer { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public decimal TotalPrice { get; set; }
        public string Status { get; set; }
        public string PaymentToken { get; set; }

        public IEnumerable<OrderedItem> OrderedItems { get; set; }
    }
}
