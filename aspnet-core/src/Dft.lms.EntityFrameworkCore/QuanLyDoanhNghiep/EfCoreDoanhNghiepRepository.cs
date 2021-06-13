namespace Dft.lms.QuanLyDoanhNghiep
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Dynamic.Core;
    using System.Threading.Tasks;
    using Dft.lms.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
    using Volo.Abp.EntityFrameworkCore;

    public class EfCoreDoanhNghiepRepository : EfCoreRepository<lmsDbContext, DoanhNghiep>, IDoanhNghiepRepository
    {
        public EfCoreDoanhNghiepRepository(
            IDbContextProvider<lmsDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }

        public async Task<DoanhNghiep> FindByEmailAsync(string email)
        {
            var dbSet = await this.GetDbSetAsync();
            return await dbSet.FirstOrDefaultAsync(e => e.EmailDoanhNghiep == email);
        }

        public async Task<DoanhNghiep> FindByNameAsync(string name)
        {
            var dbSet = await this.GetDbSetAsync();
            return await dbSet.FirstOrDefaultAsync(e => e.TenDoanhNghiep == name);
        }

        public async Task<DoanhNghiep> FindByPhoneAsync(string phone)
        {
            var dbSet = await this.GetDbSetAsync();
            return await dbSet.FirstOrDefaultAsync(e => e.SoDienThoaiDoanhNghiep == phone);
        }

        public async Task<List<DoanhNghiep>> GetListAsync(
            int skipCount,
            int maxResultCount,
            string sorting,
            string filter = null)
        {
            var dbSet = await this.GetDbSetAsync();
            return await dbSet
                 .WhereIf(
                     !filter.IsNullOrWhiteSpace(),
                     e => e.TenDoanhNghiep.Contains(filter)
                     || e.EmailDoanhNghiep.Contains(filter)
                     || e.DiaChiDoanhNghiep.Contains(filter))
                 .OrderBy(sorting)
                 .Skip(skipCount)
                 .Take(maxResultCount)
                 .ToListAsync();
        }
    }
}
