namespace Dft.lms.QuanLyDoanhNghiep
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Volo.Abp.Domain.Repositories;

    public interface IDoanhNghiepRepository : IRepository<DoanhNghiep>
    {
        Task<DoanhNghiep> FindByNameAsync(string name);

        Task<DoanhNghiep> FindByEmailAsync(string email);

        Task<DoanhNghiep> FindByPhoneAsync(string phone);

        Task<List<DoanhNghiep>> GetListAsync(
            int skipCount,
            int maxResultCount,
            string sorting,
            string filter = null);
    }
}