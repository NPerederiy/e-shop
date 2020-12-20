using Basket.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Basket.Persistence.Configurations
{
    public class BasketItemConfig : IEntityTypeConfiguration<BasketItem>
    {
        public void Configure(EntityTypeBuilder<BasketItem> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.BuyerId)
                   .IsRequired();

            builder.Property(x => x.ProductId)
                   .IsRequired();

            builder.Property(x => x.ProductName)
                   .IsRequired();

            builder.Property(x => x.UnitPrice)
                   .HasColumnType("decimal(18, 8)")
                   .IsRequired();

            builder.Property(x => x.OldUnitPrice)
                   .HasColumnType("decimal(18, 8)");

            builder.Property(x => x.Quantity)
                   .IsRequired();
        }
    }
}
