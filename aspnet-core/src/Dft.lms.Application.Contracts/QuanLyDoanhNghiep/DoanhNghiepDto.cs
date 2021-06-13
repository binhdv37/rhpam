namespace Dft.lms.QuanLyDoanhNghiep
{
    using System;
    using Volo.Abp.Application.Dtos;

    public class DoanhNghiepDto : FullAuditedEntityDto<Guid>
    {
        // Doanh nghiệp
        public string AnhDaiDienDoanhNghiep { get; set; }

        public string TenDoanhNghiep { get; set; }

        public string EmailDoanhNghiep { get; set; }

        public string DiaChiDoanhNghiep { get; set; }

        public string SoDienThoaiDoanhNghiep { get; set; }

        public string NganhNgheDoanhNghiep { get; set; }

        // Người đại diện
        public string TenNguoiDaiDien { get; set; }

        public string EmailNguoiDaiDien { get; set; }

        public string ChucVuNguoiDaiDien { get; set; }

        public string SoDienThoaiNguoiDaiDien { get; set; }
    }
}
