using System.Threading.Tasks;
using Catalog.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Core.Application.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Brand> Brands { get; set; }
        DbSet<CatalogItem> CatalogItems { get; set; }
        DbSet<CatalogType> CatalogTypes { get; set; }

        Task<int> SaveChangesAsync();
    }
}
