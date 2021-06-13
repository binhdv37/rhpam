namespace Dft.lms.QuanLyDoanhNghiep
{
    using Volo.Abp.Application.Dtos;

    public class GetDoanhNghiepListDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}