using Basket.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Basket.Persistence.Configurations
{
    public class CheckoutConfig : IEntityTypeConfiguration<BasketCheckout>
    {
        public void Configure(EntityTypeBuilder<BasketCheckout> builder)
        {
            builder.HasKey(x => x.BuyerId);
        }
    }
}
