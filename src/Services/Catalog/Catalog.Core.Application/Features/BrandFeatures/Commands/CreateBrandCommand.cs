using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using Catalog.Core.Domain.Entities;
using MediatR;

namespace Catalog.Core.Application.Features.BrandFeatures.Commands
{
    public class CreateBrandCommand : IRequest<Guid>
    {
        public string Name { get; set; }

        public class CreateBrandCommandHandler : IRequestHandler<CreateBrandCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public CreateBrandCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(CreateBrandCommand command, CancellationToken cancellationToken)
            {
                var entity = new Brand
                {
                    Name = command.Name
                };

                await _context.Brands.AddAsync(entity, cancellationToken);
                await _context.SaveChangesAsync();
                return entity.Id;
            }
        }
    }
}
