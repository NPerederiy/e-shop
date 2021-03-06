﻿using System;

namespace Basket.Domain.Entities
{
    public class BasketItem
    {
        public Guid Id { get; set; }
        public Guid BuyerId { get; set; }
        public Guid ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal OldUnitPrice { get; set; }
        public int Quantity { get; set; }
        public string PictureUrl { get; set; }
    }
}
