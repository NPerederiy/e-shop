using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Web.Shopping.HttpAggregator.Abstractions;
using Web.Shopping.HttpAggregator.Models;

namespace Web.Shopping.HttpAggregator.Controllers
{
    /// <summary>
    /// Catalog aggregator.
    /// </summary>
    public class CatalogController : ApiControllerBase
    {
        private readonly ICatalogService _service;

        public CatalogController(ICatalogService service)
        {
            _service = service;
        }

        /// <summary>
        /// Gets all catalog items.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            return Ok(await _service.GetProductsAsync());
        }

        /// <summary>
        /// Gets catalog item by id.
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            return Ok(await _service.GetProductAsync(id));
        }

        /// <summary>
        /// Creates a new catalog item.
        /// </summary>
        [HttpPost]
        //[Authorize(Roles = "admin")]
        public async Task<IActionResult> Create(ProductData product)
        {
            return Ok(await _service.CreateProduct(product));
        }

        /// <summary>
        /// Updates catalog item based on id.
        /// </summary>
        [HttpPut("{id}")]
        //[Authorize(Roles = "admin")]
        public async Task<IActionResult> Update(Guid id, ProductData product)
        {
            if (id != product.Id || product.Id == Guid.Empty) return BadRequest();

            await _service.UpdateProduct(product);
            return Ok();
        }

        /// <summary>
        /// Deletes catalog item based on id.
        /// </summary>
        [HttpDelete("{id}")]
        //[Authorize(Roles = "admin")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if (id == Guid.Empty) return BadRequest();

            await _service.DeleteProduct(id);
            return Ok();
        }
    }
}
