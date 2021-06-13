namespace Dft.lms.QuanLyDoanhNghiep
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Volo.Abp.Application.Dtos;
    using Volo.Abp.Application.Services;

    public interface IDoanhNghiepAppService : IApplicationService
    {
        Task<DoanhNghiepDto> CreateAsync(CreateUpdateDoanhNghiepDto input);

        Task DeleteAsync(List<Guid> ids);

        Task<DoanhNghiepDto> GetAsync(Guid id);

        Task<PagedResultDto<DoanhNghiepDto>> GetListAsync(GetDoanhNghiepListDto input);

        Task<DoanhNghiepDto> UpdateAsync(Guid id, CreateUpdateDoanhNghiepDto input);
    }
}