using System;
using Basket.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Basket.API.Controllers
{
    public class BasketController : ApiControllerBase
    {
        /// <summary>
        /// Gets all basket lists.
        /// </summary>
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok("get all");
        }

        /// <summary>
        /// Gets basket list by buyer id.
        /// </summary>
        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            return Ok("get basket " + id);
        }

        /// <summary>
        /// Creates a new basket list.
        /// </summary>
        [HttpPost]
        public IActionResult Create(CustomerBasket basket)
        {
            return Ok("create basket ");
        }

        /// <summary>
        /// Updates basket list based on the buyer id.
        /// </summary>
        [HttpPut("{id}")]
        public IActionResult Update(Guid id, CustomerBasket basket)
        {
            if (id != basket.BuyerId) return BadRequest();

            return Ok("update basket " + id);
        }

        /// <summary>
        /// Deletes basket list based on the buyer id.
        /// </summary>
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            return Ok("delete basket " + id);
        }
    }
}
