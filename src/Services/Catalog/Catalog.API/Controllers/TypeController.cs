using System;
using System.Threading.Tasks;
using Catalog.Core.Application.Features.TypeFeatures.Commands;
using Catalog.Core.Application.Features.TypeFeatures.Queries;
using Microsoft.AspNetCore.Mvc;

namespace Catalog.API.Controllers
{
    [ApiController]
    public class TypeController : ApiControllerBase
    {
        /// <summary>
        /// Gets all catalog types.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllCatalogTypesQuery()));
        }

        /// <summary>
        /// Gets catalog type by id.
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            return Ok(await Mediator.Send(new GetCatalogTypeByIdQuery { Id = id }));
        }

        /// <summary>
        /// Creates a new catalog type.
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create(CreateCatalogTypeCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        /// <summary>
        /// Updates catalog type based on id.
        /// </summary>
        [HttpPut("[action]")]
        public async Task<IActionResult> Update(Guid id, UpdateCatalogTypeCommand command)
        {
            if (id != command.Id) return BadRequest();

            return Ok(await Mediator.Send(command));
        }

        /// <summary>
        /// Deletes catalog type based on id.
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return Ok(await Mediator.Send(new DeleteCatalogTypeCommand { Id = id }));
        }
    }
}
