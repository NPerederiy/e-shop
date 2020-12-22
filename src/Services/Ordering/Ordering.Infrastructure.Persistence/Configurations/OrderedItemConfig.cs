using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Ordering.Core.Domain.Entities;

namespace Ordering.Infrastructure.Persistence.Configurations
{
    public class OrderedItemConfig : IEntityTypeConfiguration<OrderedItem>
    {
        public void Configure(EntityTypeBuilder<OrderedItem> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                   .IsRequired();

            builder.Property(x => x.Price)
                   .HasColumnType("decimal(18, 8)")
                   .IsRequired();

            builder.Property(x => x.Quantity)
                   .IsRequired();

            builder.Property(x => x.OrderId)
                   .IsRequired();
        }
    }
}
