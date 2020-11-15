using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using Catalog.Core.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.BrandFeatures.Queries
{
    public class GetAllBrandsQuery : IRequest<IEnumerable<Brand>>
    {
        public class GetAllBrandsQueryHandler : IRequestHandler<GetAllBrandsQuery, IEnumerable<Brand>>
        {
            private readonly IApplicationDbContext _context;

            public GetAllBrandsQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<Brand>> Handle(GetAllBrandsQuery query, CancellationToken cancellationToken)
            {
                var entityList = await _context.Brands.ToListAsync(cancellationToken);

                return entityList?.AsReadOnly();
            }
        }
    }
}
