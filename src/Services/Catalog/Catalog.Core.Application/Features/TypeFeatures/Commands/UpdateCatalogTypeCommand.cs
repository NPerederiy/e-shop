using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using MediatR;

namespace Catalog.Core.Application.Features.TypeFeatures.Commands
{
    public class UpdateCatalogTypeCommand : IRequest<Guid>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public class UpdateCatalogTypeCommandHandler : IRequestHandler<UpdateCatalogTypeCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public UpdateCatalogTypeCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(UpdateCatalogTypeCommand command, CancellationToken cancellationToken)
            {
                var entity = await _context.CatalogTypes.FindAsync(command.Id, cancellationToken);
                if (entity == null) return default;

                entity.Name = command.Name;

                _context.CatalogTypes.Update(entity);
                await _context.SaveChangesAsync();

                return entity.Id;
            }
        }
    }
}
