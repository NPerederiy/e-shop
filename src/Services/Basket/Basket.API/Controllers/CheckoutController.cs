using System;
using System.Threading.Tasks;
using Basket.Domain.Entities;
using Basket.Persistence.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Basket.API.Controllers
{
    public class CheckoutController : ApiControllerBase
    {
        private readonly IApplicationDbContext _context;

        public CheckoutController(IApplicationDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets basket checkout by buyer id.
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            try
            {
                var payload = await _context.BasketCheckouts
                    .FirstOrDefaultAsync(x => x.BuyerId == id);

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
        /// Creates a basket checkout.
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create(BasketCheckout checkout)
        {
            try
            {
                await _context.BasketCheckouts.AddAsync(checkout);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(checkout.BuyerId);
        }

        /// <summary>
        /// Updates basket checkout based on the buyer id.
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, BasketCheckout checkout)
        {
            if (id != checkout.BuyerId) return BadRequest();

            try
            {
                var payload = await _context.BasketCheckouts
                    .FirstOrDefaultAsync(x => x.BuyerId == id);

                if (payload == null)
                {
                    return NotFound("Item not found.");
                }

                _context.BasketCheckouts.Update(checkout);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
            return NoContent();
        }

        /// <summary>
        /// Deletes basket checkout based on the buyer id.
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            try
            {
                var payload = await _context.BasketCheckouts
                    .FirstOrDefaultAsync(x => x.BuyerId == id);

                if (payload == null)
                {
                    return NotFound("Item not found.");
                }

                _context.BasketCheckouts.Remove(payload);
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
