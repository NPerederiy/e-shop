using System;
using Basket.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Basket.API.Controllers
{
    public class ItemController : ApiControllerBase
    {
        /// <summary>
        /// Gets all basket items.
        /// </summary>
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok("get all");
        }

        /// <summary>
        /// Gets basket item by id.
        /// </summary>
        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            return Ok("get item " + id);
        }

        /// <summary>
        /// Creates a new basket item.
        /// </summary>
        [HttpPost]
        public IActionResult Create(BasketItem item)
        {
            return Ok("create item ");
        }

        /// <summary>
        /// Updates basket item based on id.
        /// </summary>
        [HttpPut("{id}")]
        public IActionResult Update(Guid id, BasketItem item)
        {
            if (id != item.Id) return BadRequest();

            return Ok("update item " + id);
        }

        /// <summary>
        /// Deletes basket item based on id.
        /// </summary>
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            return Ok("delete item " + id);
        }
    }
}
