using System.Threading.Tasks;
using Ordering.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Ordering.Core.Application.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Order> Orders { get; set; }
        DbSet<OrderedItem> OrderedItems { get; set; }

        Task<int> SaveChangesAsync();
    }
}