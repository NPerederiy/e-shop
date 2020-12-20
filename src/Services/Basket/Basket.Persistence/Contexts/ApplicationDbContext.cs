using System.Threading.Tasks;
using Basket.Domain.Entities;
using Basket.Persistence.Configurations;
using Basket.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Basket.Persistence.Contexts
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<BasketItem> BasketItems { get; set; }
        public DbSet<BasketCheckout> BasketCheckouts { get; set; }

        public async Task<int> SaveChangesAsync()
        {
            return await base.SaveChangesAsync();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new BasketItemConfig());
            modelBuilder.ApplyConfiguration(new CheckoutConfig());
        }
    }
}
