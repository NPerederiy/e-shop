using System.Threading.Tasks;
using Basket.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Basket.Persistence.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<BasketItem> BasketItems { get; set; }
        DbSet<BasketCheckout> BasketCheckouts { get; set; }

        Task<int> SaveChangesAsync();
    }
}
