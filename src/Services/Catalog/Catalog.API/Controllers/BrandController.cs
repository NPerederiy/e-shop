using System;
using System.Threading.Tasks;
using Catalog.Core.Application.Features.BrandFeatures.Commands;
using Catalog.Core.Application.Features.BrandFeatures.Queries;
using Microsoft.AspNetCore.Mvc;

namespace Catalog.API.Controllers
{
    [ApiVersion("1.0")]
    public class BrandController : ApiControllerBase
    {
        /// <summary>
        /// Gets all brands.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllBrandsQuery()));
        }

        /// <summary>
        /// Gets brand by id.
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            return Ok(await Mediator.Send(new GetBrandByIdQuery { Id = id }));
        }

        /// <summary>
        /// Creates a new brand.
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create(CreateBrandCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        /// <summary>
        /// Updates brand based on id.
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, UpdateBrandCommand command)
        {
            if (id != command.Id) return BadRequest();

            return Ok(await Mediator.Send(command));
        }

        /// <summary>
        /// Deletes brand based on id.
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return Ok(await Mediator.Send(new DeleteBrandCommand { Id = id }));
        }
    }
}
