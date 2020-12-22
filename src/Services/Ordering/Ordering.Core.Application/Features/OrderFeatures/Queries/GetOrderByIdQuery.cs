using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Ordering.Core.Application.Interfaces;
using Ordering.Core.Domain.Entities;

namespace Ordering.Core.Application.Features.OrderFeatures.Queries
{
    public class GetOrderByIdQuery : IRequest<Order>
    {
        public Guid Id { get; set; }

        public class GetOrderByIdQueryHandler : IRequestHandler<GetOrderByIdQuery, Order>
        {
            private readonly IApplicationDbContext _context;

            public GetOrderByIdQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Order> Handle(GetOrderByIdQuery query, CancellationToken cancellationToken)
            {
                return await _context.Orders.FirstOrDefaultAsync(x => x.Id == query.Id, cancellationToken);
            }
        }
    }
}
