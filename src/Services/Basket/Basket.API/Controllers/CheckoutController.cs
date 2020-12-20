using System;
using Basket.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Basket.API.Controllers
{
    public class CheckoutController : ApiControllerBase
    {
        /// <summary>
        /// Gets basket checkout by buyer id.
        /// </summary>
        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            return Ok("get checkout " + id);
        }

        /// <summary>
        /// Creates a basket checkout.
        /// </summary>
        [HttpPost]
        public IActionResult Create(BasketCheckout checkout)
        {
            return Ok("create checkout ");
        }

        /// <summary>
        /// Updates basket checkout based on the buyer id.
        /// </summary>
        [HttpPut("{id}")]
        public IActionResult Update(Guid id, BasketCheckout checkout)
        {
            if (id != checkout.BuyerId) return BadRequest();

            return Ok("update checkout " + id);
        }

        /// <summary>
        /// Deletes basket checkout based on the buyer id.
        /// </summary>
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            return Ok("delete checkout " + id);
        }
    }
}
