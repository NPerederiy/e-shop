using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Ordering.Core.Application.Interfaces;
using Ordering.Core.Domain.Entities;

namespace Ordering.Core.Application.Features.OrderFeatures.Commands
{
    public class MakeOrderCommand : IRequest<Guid>
    {
        public long OrderNumber { get; set; }
        public Guid BuyerId { get; set; }
        public string Buyer { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public decimal TotalPrice { get; set; }
        public string Status { get; set; }
        public string PaymentToken { get; set; }
        public IEnumerable<OrderedItem> OrderedItems { get; set; }

        public class MakeOrderCommandHandler : IRequestHandler<MakeOrderCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public MakeOrderCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(MakeOrderCommand command, CancellationToken cancellationToken)
            {
                var order = new Order
                {
                    OrderNumber = command.OrderNumber,
                    BuyerId = command.BuyerId,
                    Buyer = command.Buyer,
                    City = command.City,
                    Street = command.Street,
                    State = command.State,
                    Country = command.Country,
                    ZipCode = command.ZipCode,
                    TotalPrice = command.TotalPrice,
                    Status = command.Status,
                    PaymentToken = command.PaymentToken,
                    OrderedItems = command.OrderedItems
                };

                await _context.Orders.AddAsync(order, cancellationToken);
                await _context.SaveChangesAsync();

                return order.Id;
            }
        }
    }
}
