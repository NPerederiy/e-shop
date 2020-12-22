using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Ordering.Core.Application.Features.OrderFeatures.Commands;
using Ordering.Core.Application.Features.OrderFeatures.Queries;

namespace Ordering.API.Controllers
{
    [ApiVersion("1.0")]
    public class OrderController : ApiControllerBase
    {
        /// <summary>
        /// Gets all orders.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllOrdersQuery()));
        }

        /// <summary>
        /// Gets order by id.
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            return Ok(await Mediator.Send(new GetOrderByIdQuery { Id = id }));
        }

        /// <summary>
        /// Creates a new order.
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create(MakeOrderCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        /// <summary>
        /// Updates an order based on id.
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, UpdateOrderCommand command)
        {
            if (id != command.Id) return BadRequest();

            return Ok(await Mediator.Send(command));
        }

        /// <summary>
        /// Deletes an order based on id.
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return Ok(await Mediator.Send(new RemoveOrderCommand { Id = id }));
        }
    }
}
