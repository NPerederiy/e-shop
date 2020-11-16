using System;
using System.Threading.Tasks;
using Catalog.Core.Application.Features.ItemFeatures.Commands;
using Catalog.Core.Application.Features.ItemFeatures.Queries;
using Microsoft.AspNetCore.Mvc;

namespace Catalog.API.Controllers
{
    [ApiController]
    public class ItemController : ApiControllerBase
    {
        /// <summary>
        /// Gets all catalog items.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllCatalogItemsQuery()));
        }

        /// <summary>
        /// Gets catalog item by id.
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            return Ok(await Mediator.Send(new GetCatalogItemByIdQuery { Id = id }));
        }

        /// <summary>
        /// Creates a new catalog item.
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create(CreateCatalogItemCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        /// <summary>
        /// Updates catalog item based on id.
        /// </summary>
        [HttpPut("[action]")]
        public async Task<IActionResult> Update(Guid id, UpdateCatalogItemCommand command)
        {
            if (id != command.Id) return BadRequest();

            return Ok(await Mediator.Send(command));
        }

        /// <summary>
        /// Deletes catalog item based on id.
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return Ok(await Mediator.Send(new DeleteCatalogItemCommand { Id = id }));
        }
    }
}
