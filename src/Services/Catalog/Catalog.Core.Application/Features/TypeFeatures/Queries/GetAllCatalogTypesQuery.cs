using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using Catalog.Core.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.TypeFeatures.Queries
{
    public class GetAllCatalogTypesQuery : IRequest<IEnumerable<CatalogType>>
    {
        public class GetAllCatalogTypesQueryHandler : IRequestHandler<GetAllCatalogTypesQuery, IEnumerable<CatalogType>>
        {
            private readonly IApplicationDbContext _context;

            public GetAllCatalogTypesQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<CatalogType>> Handle(GetAllCatalogTypesQuery query, CancellationToken cancellationToken)
            {
                var entityList = await _context.CatalogTypes.ToListAsync(cancellationToken);

                return entityList?.AsReadOnly();
            }
        }
    }
}
