﻿using System;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Features.BrandFeatures.Commands
{
    public class DeleteBrandCommand : IRequest<Guid>
    {
        public Guid Id { get; set; }

        public class DeleteBrandCommandHandler : IRequestHandler<DeleteBrandCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public DeleteBrandCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(DeleteBrandCommand command, CancellationToken cancellationToken)
            {
                var entity = await _context.Brands.FirstOrDefaultAsync(x => x.Id == command.Id, cancellationToken);
                if (entity == null) return default;

                _context.Brands.Remove(entity);
                await _context.SaveChangesAsync();

                return entity.Id;
            }
        }
    }
}
