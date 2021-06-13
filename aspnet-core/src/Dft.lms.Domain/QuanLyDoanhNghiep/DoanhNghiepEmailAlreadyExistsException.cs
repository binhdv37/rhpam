namespace Dft.lms.QuanLyDoanhNghiep
{
    using Volo.Abp;

    public class DoanhNghiepEmailAlreadyExistsException : BusinessException
    {
        public DoanhNghiepEmailAlreadyExistsException(string email)
               : base(lmsDomainErrorCodes.DoanhNghiepEmailAlreadyExists)
        {
            this.WithData("email", email);
        }
    }
}
