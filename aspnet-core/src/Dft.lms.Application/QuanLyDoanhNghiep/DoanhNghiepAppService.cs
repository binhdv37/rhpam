namespace Dft.lms.QuanLyDoanhNghiep
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Volo.Abp.Application.Dtos;
    using Volo.Abp.Domain.Repositories;

    public class DoanhNghiepAppService : lmsAppService, IDoanhNghiepAppService
    {
        private readonly IDoanhNghiepRepository _doanhNghiepRepository;
        private readonly DoanhNghiepManager _doanhNghiepManager;

        public DoanhNghiepAppService(
                IDoanhNghiepRepository doanhNghiepRepository,
                DoanhNghiepManager doanhNghiepManager)
        {
            this._doanhNghiepRepository = doanhNghiepRepository;
            this._doanhNghiepManager = doanhNghiepManager;
        }

        public async Task<DoanhNghiepDto> GetAsync(Guid id)
        {
            var entity = await this._doanhNghiepRepository.GetAsync(e => e.Id == id);
            return this.ObjectMapper.Map<DoanhNghiep, DoanhNghiepDto>(entity);
        }

        public async Task<PagedResultDto<DoanhNghiepDto>> GetListAsync(GetDoanhNghiepListDto input)
        {
            if (input.Sorting.IsNullOrWhiteSpace())
            {
                input.Sorting = nameof(DoanhNghiep.Id) + " DESC";
            }

            var entitys = await this._doanhNghiepRepository.GetListAsync(
               input.SkipCount,
               input.MaxResultCount,
               input.Sorting,
               input.Filter);

            var totalCount = input.Filter == null
              ? await this._doanhNghiepRepository.CountAsync()
              : await this._doanhNghiepRepository.CountAsync(
               e => e.TenDoanhNghiep.Contains(input.Filter)
                     || e.EmailDoanhNghiep.Contains(input.Filter)
                     || e.DiaChiDoanhNghiep.Contains(input.Filter));

            return new PagedResultDto<DoanhNghiepDto>
            {
                TotalCount = totalCount,
                Items = this.ObjectMapper.Map<List<DoanhNghiep>, List<DoanhNghiepDto>>(entitys),
            };
        }

        public async Task<DoanhNghiepDto> CreateAsync(CreateUpdateDoanhNghiepDto input)
        {
            var create = await this._doanhNghiepManager.CreateAsync(
                input.AnhDaiDienDoanhNghiep,
                input.TenDoanhNghiep,
                input.EmailDoanhNghiep,
                input.DiaChiDoanhNghiep,
                input.SoDienThoaiDoanhNghiep,
                input.NganhNgheDoanhNghiep,
                input.TenNguoiDaiDien,
                input.EmailNguoiDaiDien,
                input.ChucVuNguoiDaiDien,
                input.SoDienThoaiNguoiDaiDien);

            await this._doanhNghiepRepository.InsertAsync(create);
            return this.ObjectMapper.Map<DoanhNghiep, DoanhNghiepDto>(create);
        }

        public async Task<DoanhNghiepDto> UpdateAsync(Guid id, CreateUpdateDoanhNghiepDto input)
        {
            var entity = await this._doanhNghiepRepository.GetAsync(e => e.Id == id);
            var update = this.ObjectMapper.Map(input, entity);
            return this.ObjectMapper.Map<DoanhNghiep, DoanhNghiepDto>(update);
        }

        public async Task DeleteAsync(List<Guid> ids)
        {
            await this._doanhNghiepRepository.DeleteAsync(e => ids.Contains(e.Id));
        }
    }
}
