using Catalog.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Catalog.Infrastructure.Persistence.Configurations
{
    public class CatalogItemConfig : IEntityTypeConfiguration<CatalogItem>
    {
        public void Configure(EntityTypeBuilder<CatalogItem> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                   .IsRequired();

            builder.Property(x => x.Price)
                   .HasColumnType("decimal(18, 8)")
                   .IsRequired();

            builder.Property(x => x.CatalogTypeId)
                   .IsRequired();

            builder.HasOne(x => x.CatalogType)
                   .WithMany(x => x.CatalogItems)
                   .HasForeignKey(x => x.CatalogTypeId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.Property(x => x.CatalogBrandId)
                   .IsRequired();

            builder.HasOne(x => x.CatalogBrand)
                   .WithMany(x => x.CatalogItems)
                   .HasForeignKey(x => x.CatalogBrandId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
