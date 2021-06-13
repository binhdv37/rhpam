namespace Dft.lms.QuanLyDoanhNghiep
{
    using System.Diagnostics.CodeAnalysis;
    using System.Threading.Tasks;
    using Volo.Abp;
    using Volo.Abp.Domain.Services;

    public class DoanhNghiepManager : DomainService
    {
        private readonly IDoanhNghiepRepository _doanhNghiepRepository;

        public DoanhNghiepManager(IDoanhNghiepRepository doanhNghiepRepository)
        {
            this._doanhNghiepRepository = doanhNghiepRepository;
        }

        public async Task<DoanhNghiep> CreateAsync(
           string anhDaiDienDoanhNghiep,
           [NotNull] string tenDoanhNghiep,
           [NotNull] string emailDoanhNghiep,
           [NotNull] string diaChiDoanhNghiep,
           [NotNull] string soDienThoaiDoanhNghiep,
           string nganhNgheDoanhNghiep,
           [NotNull] string tenNguoiDaiDien,
           [NotNull] string emailNguoiDaiDien,
           string chucVuNguoiDaiDien,
           [NotNull] string soDienThoaiNguoiDaiDien)
        {
            Check.NotNullOrWhiteSpace(tenDoanhNghiep, nameof(tenDoanhNghiep));
            Check.NotNullOrWhiteSpace(emailDoanhNghiep, nameof(emailDoanhNghiep));
            Check.NotNullOrWhiteSpace(diaChiDoanhNghiep, nameof(diaChiDoanhNghiep));
            Check.NotNullOrWhiteSpace(soDienThoaiDoanhNghiep, nameof(soDienThoaiDoanhNghiep));
            Check.NotNullOrWhiteSpace(tenNguoiDaiDien, nameof(tenNguoiDaiDien));
            Check.NotNullOrWhiteSpace(emailNguoiDaiDien, nameof(emailNguoiDaiDien));
            Check.NotNullOrWhiteSpace(soDienThoaiNguoiDaiDien, nameof(soDienThoaiNguoiDaiDien));

            var nameExisting = await this._doanhNghiepRepository.FindByNameAsync(tenDoanhNghiep);
            if (nameExisting != null)
            {
                throw new DoanhNghiepNameAlreadyExistsException(tenDoanhNghiep);
            }

            var emailExisting = await this._doanhNghiepRepository.FindByEmailAsync(emailDoanhNghiep);
            if (emailExisting != null)
            {
                throw new DoanhNghiepEmailAlreadyExistsException(emailDoanhNghiep);
            }

            var phoneExisting = await this._doanhNghiepRepository.FindByPhoneAsync(soDienThoaiDoanhNghiep);
            if (phoneExisting != null)
            {
                throw new DoanhNghiepPhoneAlreadyExistsException(soDienThoaiDoanhNghiep);
            }

            var doanhNghiep = new DoanhNghiep(
                this.GuidGenerator.Create(),
                anhDaiDienDoanhNghiep,
                tenDoanhNghiep,
                emailDoanhNghiep,
                diaChiDoanhNghiep,
                soDienThoaiDoanhNghiep,
                nganhNgheDoanhNghiep,
                tenNguoiDaiDien,
                emailNguoiDaiDien,
                chucVuNguoiDaiDien,
                soDienThoaiNguoiDaiDien);
            return doanhNghiep;
        }
    }
}