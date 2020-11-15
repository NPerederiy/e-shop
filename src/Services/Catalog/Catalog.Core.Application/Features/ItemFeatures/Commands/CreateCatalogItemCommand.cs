using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using Catalog.Core.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.ItemFeatures.Commands
{
    public class CreateCatalogItemCommand : IRequest<Guid>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureFileName { get; set; }
        public string PictureUri { get; set; }
        public Guid CatalogTypeId { get; set; }
        public Guid CatalogBrandId { get; set; }

        public class CreateCatalogItemCommandHandler : IRequestHandler<CreateCatalogItemCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public CreateCatalogItemCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(CreateCatalogItemCommand command, CancellationToken cancellationToken)
            {
                if (!await _context.Brands.AnyAsync(x => x.Id == command.CatalogBrandId, cancellationToken) ||
                    !await _context.CatalogTypes.AnyAsync(x => x.Id == command.CatalogTypeId, cancellationToken))
                    return default;

                var entity = new CatalogItem
                {
                    Name = command.Name,
                    Description = command.Description,
                    Price = command.Price,
                    PictureFileName = command.PictureFileName,
                    PictureUri = command.PictureUri,
                    CatalogTypeId = command.CatalogTypeId,
                    CatalogBrandId = command.CatalogBrandId
                };

                await _context.CatalogItems.AddAsync(entity, cancellationToken);
                await _context.SaveChangesAsync();
                return entity.Id;
            }
        }
    }
}
