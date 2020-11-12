using System;
using System.Collections.Generic;

namespace Basket.Domain.Entities
{
    public class CustomerBasket
    {
        public Guid BuyerId { get; set; }
        public IEnumerable<BasketItem> Items { get; set; }
    }
}
