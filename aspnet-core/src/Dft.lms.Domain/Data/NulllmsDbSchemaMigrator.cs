// This file is not generated, but this comment is necessary to exclude it from StyleCop analysis 
// <auto-generated/> 
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Dft.lms.Data
{
    /* This is used if database provider does't define
     * IlmsDbSchemaMigrator implementation.
     */
    public class NulllmsDbSchemaMigrator : IlmsDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}
