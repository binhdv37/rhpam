namespace Dft.lms.QuanLyDoanhNghiep
{
    using System;
    using System.Diagnostics.CodeAnalysis;
    using Volo.Abp.Domain.Entities.Auditing;

    public class DoanhNghiep : FullAuditedAggregateRoot<Guid>
    {
        internal DoanhNghiep(
           Guid id,
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
            : base(id)
        {
            this.AnhDaiDienDoanhNghiep = anhDaiDienDoanhNghiep;
            this.TenDoanhNghiep = tenDoanhNghiep;
            this.EmailDoanhNghiep = emailDoanhNghiep;
            this.DiaChiDoanhNghiep = diaChiDoanhNghiep;
            this.SoDienThoaiDoanhNghiep = soDienThoaiDoanhNghiep;
            this.NganhNgheDoanhNghiep = nganhNgheDoanhNghiep;
            this.TenNguoiDaiDien = tenNguoiDaiDien;
            this.EmailNguoiDaiDien = emailNguoiDaiDien;
            this.ChucVuNguoiDaiDien = chucVuNguoiDaiDien;
            this.SoDienThoaiNguoiDaiDien = soDienThoaiNguoiDaiDien;
        }

        private DoanhNghiep()
        {
        }

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
