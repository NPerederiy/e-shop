using System;
using System.Linq;
using System.Threading.Tasks;
using Basket.Domain.Entities;
using Basket.Persistence.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Basket.API.Controllers
{
    public class ItemController : ApiControllerBase
    {
        private readonly IApplicationDbContext _context;

        public ItemController(IApplicationDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets all basket items by buyer's id.
        /// </summary>
        [HttpGet]
        public IActionResult GetAll(Guid buyerId)
        {
            try
            {
                var payload = _context.BasketItems
                    .Where(x => x.BuyerId == buyerId);

                return Ok(payload);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Gets basket item by id.
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            try
            {
                var payload = await _context.BasketItems
                    .FirstOrDefaultAsync(x => x.Id == id);

                if (payload == null)
                {
                    return NotFound("Item not found.");
                }

                return Ok(payload);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Creates a new basket item.
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create(BasketItem item)
        {
            try
            {
                await _context.BasketItems.AddAsync(item);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(item.Id);
        }

        /// <summary>
        /// Updates basket item based on id.
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, BasketItem item)
        {
            if (id != item.Id) return BadRequest("Missing the basket item id.");

            try
            {
                var payload = await _context.BasketItems
                    .FirstOrDefaultAsync(x => x.Id == id);

                if (payload == null)
                {
                    return NotFound("Item not found.");
                }

                _context.BasketItems.Update(item);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                BadRequest(ex.Message);
            }

            return NoContent();
        }

        /// <summary>
        /// Deletes basket item based on id.
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            try
            {
                var payload = await _context.BasketItems
                    .FirstOrDefaultAsync(x => x.Id == id);

                if (payload == null)
                {
                    return NotFound("Item not found.");
                }

                _context.BasketItems.Remove(payload);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return NoContent();
        }
    }
}
