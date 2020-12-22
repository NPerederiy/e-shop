using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Ordering.Core.Application.Interfaces;

namespace Ordering.Core.Application.Features.OrderFeatures.Commands
{
    public class RemoveOrderCommand : IRequest<Guid>
    {
        public Guid Id { get; set; }

        public class RemoveOrderCommandHandler : IRequestHandler<RemoveOrderCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public RemoveOrderCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(RemoveOrderCommand command, CancellationToken cancellationToken)
            {
                var entity = await _context.Orders.FirstOrDefaultAsync(x => x.Id == command.Id, cancellationToken);
                if (entity == null) return default;

                _context.Orders.Remove(entity);
                await _context.SaveChangesAsync();

                return entity.Id;
            }
        }
    }
}
