namespace Dft.lms.QuanLyDoanhNghiep
{
    using Volo.Abp;

    public class DoanhNghiepPhoneAlreadyExistsException : BusinessException
    {
        public DoanhNghiepPhoneAlreadyExistsException(string phone)
               : base(lmsDomainErrorCodes.DoanhNghiepPhoneAlreadyExists)
        {
            this.WithData("phone", phone);
        }
    }
}
