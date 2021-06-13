namespace Dft.lms.QuanLyDoanhNghiep
{
    using Volo.Abp;

    public class DoanhNghiepNameAlreadyExistsException : BusinessException
    {
        public DoanhNghiepNameAlreadyExistsException(string name)
               : base(lmsDomainErrorCodes.DoanhNghiepNameAlreadyExists)
        {
            this.WithData("name", name);
        }
    }
}
