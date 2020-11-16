using System.Threading.Tasks;
using Catalog.Core.Application.Interfaces;
using Catalog.Core.Domain.Entities;
using Catalog.Infrastructure.Persistence.Configurations;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Infrastructure.Persistence.Contexts
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            
        }

        public DbSet<Brand> Brands { get; set; }
        public DbSet<CatalogItem> CatalogItems { get; set; }
        public DbSet<CatalogType> CatalogTypes { get; set; }

        public Task<int> SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new BrandConfig());
            modelBuilder.ApplyConfiguration(new CatalogTypeConfig());
            modelBuilder.ApplyConfiguration(new CatalogItemConfig());
        }
    }
}
