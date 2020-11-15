using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using Catalog.Core.Domain.Entities;
using MediatR;

namespace Catalog.Core.Application.Features.TypeFeatures.Commands
{
    public class CreateCatalogTypeCommand : IRequest<Guid>
    {
        public string Name { get; set; }

        public class CreateCatalogTypeCommandHandler : IRequestHandler<CreateCatalogTypeCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public CreateCatalogTypeCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(CreateCatalogTypeCommand command, CancellationToken cancellationToken)
            {
                var entity = new CatalogType
                {
                    Name = command.Name
                };

                await _context.CatalogTypes.AddAsync(entity, cancellationToken);
                await _context.SaveChangesAsync();
                return entity.Id;
            }
        }
    }
}
