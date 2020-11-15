using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.ItemFeatures.Commands
{
    public class UpdateCatalogItemCommand : IRequest<Guid>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureFileName { get; set; }
        public string PictureUri { get; set; }
        public Guid CatalogTypeId { get; set; }
        public Guid CatalogBrandId { get; set; }


        public class UpdateCatalogItemCommandHandler : IRequestHandler<UpdateCatalogItemCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public UpdateCatalogItemCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(UpdateCatalogItemCommand command, CancellationToken cancellationToken)
            {
                var entity = await _context.CatalogItems.FindAsync(command.Id, cancellationToken);
                if (entity == null ||
                    !await _context.Brands.AnyAsync(x => x.Id == command.CatalogBrandId, cancellationToken) ||
                    !await _context.CatalogTypes.AnyAsync(x => x.Id == command.CatalogTypeId, cancellationToken))
                    return default;

                entity.Name = command.Name;
                entity.Description = command.Description;
                entity.Price = command.Price;
                entity.PictureFileName = command.PictureFileName;
                entity.PictureUri = command.PictureUri;
                entity.CatalogTypeId = command.CatalogTypeId;
                entity.CatalogBrandId = command.CatalogBrandId;

                _context.CatalogItems.Update(entity);
                await _context.SaveChangesAsync();

                return entity.Id;
            }
        }
    }
}
