using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using MediatR;

namespace Catalog.Core.Application.Features.ItemFeatures.Commands
{
    public class DeleteCatalogItemCommand : IRequest<Guid>
    {
        public Guid Id { get; set; }

        public class DeleteCatalogItemCommandHandler : IRequestHandler<DeleteCatalogItemCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public DeleteCatalogItemCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(DeleteCatalogItemCommand command, CancellationToken cancellationToken)
            {
                var entity = await _context.CatalogItems.FindAsync(command.Id, cancellationToken);
                if (entity == null) return default;

                _context.CatalogItems.Remove(entity);
                await _context.SaveChangesAsync();

                return entity.Id;
            }
        }
    }
}
