using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Ordering.Core.Application.Interfaces;
using Ordering.Core.Domain.Entities;

namespace Ordering.Core.Application.Features.OrderFeatures.Queries
{
    public class GetAllOrdersQuery : IRequest<IEnumerable<Order>>
    {
        public class GelAllOrdersQueryHandler : IRequestHandler<GetAllOrdersQuery, IEnumerable<Order>>
        {
            private readonly IApplicationDbContext _context;

            public GelAllOrdersQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<Order>> Handle(GetAllOrdersQuery query, CancellationToken cancellationToken)
            {
                var entityList = await _context.Orders.ToListAsync(cancellationToken);

                return entityList?.AsReadOnly();
            }
        }
    }
}
