// This file is not generated, but this comment is necessary to exclude it from StyleCop analysis 
// <auto-generated/> 
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Dft.lms.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class lmsMigrationsDbContextFactory : IDesignTimeDbContextFactory<lmsMigrationsDbContext>
    {
        public lmsMigrationsDbContext CreateDbContext(string[] args)
        {
            lmsEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<lmsMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new lmsMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../Dft.lms.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
