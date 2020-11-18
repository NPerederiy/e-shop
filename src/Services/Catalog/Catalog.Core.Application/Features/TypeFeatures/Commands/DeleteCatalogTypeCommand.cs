using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.TypeFeatures.Commands
{
    public class DeleteCatalogTypeCommand : IRequest<Guid>
    {
        public Guid Id { get; set; }

        public class DeleteCatalogTypeCommandHandler : IRequestHandler<DeleteCatalogTypeCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public DeleteCatalogTypeCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(DeleteCatalogTypeCommand command, CancellationToken cancellationToken)
            {
                var entity = await _context.CatalogTypes.FirstOrDefaultAsync(x => x.Id == command.Id, cancellationToken);
                if (entity == null) return default;

                _context.CatalogTypes.Remove(entity);
                await _context.SaveChangesAsync();

                return entity.Id;
            }
        }
    }
}
