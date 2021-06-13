﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Dft.lms.Migrations
{
    public partial class Created_DoanhNghiep_Entity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppDoanhNghiep",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AnhDaiDienDoanhNghiep = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TenDoanhNghiep = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    EmailDoanhNghiep = table.Column<string>(type: "nvarchar(320)", maxLength: 320, nullable: false),
                    DiaChiDoanhNghiep = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    SoDienThoaiDoanhNghiep = table.Column<string>(type: "nvarchar(45)", maxLength: 45, nullable: false),
                    NganhNgheDoanhNghiep = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    TenNguoiDaiDien = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    EmailNguoiDaiDien = table.Column<string>(type: "nvarchar(320)", maxLength: 320, nullable: false),
                    ChucVuNguoiDaiDien = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    SoDienThoaiNguoiDaiDien = table.Column<string>(type: "nvarchar(45)", maxLength: 45, nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppDoanhNghiep", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppDoanhNghiep");
        }
    }
}
