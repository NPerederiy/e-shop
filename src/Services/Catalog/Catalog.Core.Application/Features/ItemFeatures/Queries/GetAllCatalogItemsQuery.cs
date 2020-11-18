using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using Catalog.Core.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.ItemFeatures.Queries
{
    public class GetAllCatalogItemsQuery : IRequest<IEnumerable<CatalogItem>>
    {
        public class GetAllCatalogItemsQueryHandler : IRequestHandler<GetAllCatalogItemsQuery, IEnumerable<CatalogItem>>
        {
            private readonly IApplicationDbContext _context;

            public GetAllCatalogItemsQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<CatalogItem>> Handle(GetAllCatalogItemsQuery query, CancellationToken cancellationToken)
            {
                var entityList = await _context.CatalogItems.ToListAsync(cancellationToken);

                return entityList?.AsReadOnly();
            }
        }
    }
}
