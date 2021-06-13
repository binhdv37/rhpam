namespace Dft.lms.QuanLyDoanhNghiep
{
    using System.ComponentModel.DataAnnotations;

    public class CreateUpdateDoanhNghiepDto
    {
        public string AnhDaiDienDoanhNghiep { get; set; }

        [Required]
        [StringLength(lmsDomainSharedConsts.MaxLengthName)]
        public string TenDoanhNghiep { get; set; }

        [Required]
        [StringLength(lmsDomainSharedConsts.MaxLengthCode)]
        public string EmailDoanhNghiep { get; set; }

        [Required]
        [StringLength(lmsDomainSharedConsts.MaxLengthAddress)]
        public string DiaChiDoanhNghiep { get; set; }

        [Required]
        [StringLength(lmsDomainSharedConsts.MaxLengthPhone)]
        public string SoDienThoaiDoanhNghiep { get; set; }

        [StringLength(lmsDomainSharedConsts.MaxLengthName)]
        public string NganhNgheDoanhNghiep { get; set; }

        [StringLength(lmsDomainSharedConsts.MaxLengthName)]
        public string TenNguoiDaiDien { get; set; }

        [Required]
        [StringLength(lmsDomainSharedConsts.MaxLengthEmail)]
        public string EmailNguoiDaiDien { get; set; }

        [StringLength(lmsDomainSharedConsts.MaxLengthName)]
        public string ChucVuNguoiDaiDien { get; set; }

        [Required]
        [StringLength(lmsDomainSharedConsts.MaxLengthPhone)]
        public string SoDienThoaiNguoiDaiDien { get; set; }
    }
}
