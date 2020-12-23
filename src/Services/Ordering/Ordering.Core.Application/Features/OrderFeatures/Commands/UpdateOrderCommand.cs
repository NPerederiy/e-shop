using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Ordering.Core.Application.Interfaces;
using Ordering.Core.Domain.Entities;
using Ordering.Core.Domain.Enums;

namespace Ordering.Core.Application.Features.OrderFeatures.Commands
{
    public class UpdateOrderCommand : IRequest<Guid>
    {
        public Guid Id { get; set; }
        public long OrderNumber { get; set; }
        public Guid BuyerId { get; set; }
        public string Buyer { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public decimal TotalPrice { get; set; }
        public OrderStatus Status { get; set; }
        public string PaymentToken { get; set; }
        public IEnumerable<OrderedItem> OrderedItems { get; set; }

        public class UpdateOrderCommandHandler : IRequestHandler<UpdateOrderCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public UpdateOrderCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public Task<Guid> Handle(UpdateOrderCommand command, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }
        }
    }
}
