using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using Catalog.Core.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.BrandFeatures.Queries
{
    public class GetBrandByIdQuery : IRequest<Brand>
    {
        public Guid Id { get; set; }

        public class GetBrandByIdQueryHandler : IRequestHandler<GetBrandByIdQuery, Brand>
        {
            private readonly IApplicationDbContext _context;

            public GetBrandByIdQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Brand> Handle(GetBrandByIdQuery query, CancellationToken cancellationToken)
            {
                return await _context.Brands.FirstOrDefaultAsync(x => x.Id == query.Id, cancellationToken);
            }
        }
    }
}
