// This file is not generated, but this comment is necessary to exclude it from StyleCop analysis 
// <auto-generated/> 
using Dft.lms.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Dft.lms.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(lmsEntityFrameworkCoreDbMigrationsModule),
        typeof(lmsApplicationContractsModule)
        )]
    public class lmsDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}