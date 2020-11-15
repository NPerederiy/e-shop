using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using Catalog.Core.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.TypeFeatures.Queries
{
    public class GetCatalogTypeByIdQuery : IRequest<CatalogType>
    {
        public Guid Id { get; set; }

        public class GetCatalogTypeByIdQueryHandler : IRequestHandler<GetCatalogTypeByIdQuery, CatalogType>
        {
            private readonly IApplicationDbContext _context;

            public GetCatalogTypeByIdQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<CatalogType> Handle(GetCatalogTypeByIdQuery query, CancellationToken cancellationToken)
            {
                return await _context.CatalogTypes.FirstOrDefaultAsync(x => x.Id == query.Id, cancellationToken);
            }
        }
    }
}
