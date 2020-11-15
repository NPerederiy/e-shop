using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using Catalog.Core.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.ItemFeatures.Queries
{
    public class GetCatalogItemByIdQuery : IRequest<CatalogItem>
    {
        public Guid Id { get; set; }

        public class GetCatalogItemByIdQueryHandler : IRequestHandler<GetCatalogItemByIdQuery, CatalogItem>
        {
            private readonly IApplicationDbContext _context;

            public GetCatalogItemByIdQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<CatalogItem> Handle(GetCatalogItemByIdQuery query, CancellationToken cancellationToken)
            {
                return await _context.CatalogItems.FirstOrDefaultAsync(x => x.Id == query.Id, cancellationToken);
            }
        }
    }
}
