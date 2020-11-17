using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.BrandFeatures.Commands
{
    public class UpdateBrandCommand : IRequest<Guid>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public class UpdateBrandCommandHandler : IRequestHandler<UpdateBrandCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public UpdateBrandCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(UpdateBrandCommand command, CancellationToken cancellationToken)
            {
                var entity = await _context.Brands.FirstOrDefaultAsync(x => x.Id == command.Id, cancellationToken);
                if (entity == null) return default;

                entity.Name = command.Name;

                _context.Brands.Update(entity);
                await _context.SaveChangesAsync();

                return entity.Id;
            }
        }
    }
}
