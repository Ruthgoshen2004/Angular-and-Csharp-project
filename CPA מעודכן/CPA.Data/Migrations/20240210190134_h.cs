using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CPA.Data.Migrations
{
    public partial class h : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CPAList",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SeniorityYears = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CPAList", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CustomersList",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CaseNumber = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomersList", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MeetsList",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MeetingDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MeetingHour = table.Column<int>(type: "int", nullable: false),
                    MeetingDuration = table.Column<double>(type: "float", nullable: false),
                    CPAId = table.Column<int>(type: "int", nullable: false),
                    CustomerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeetsList", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MeetsList_CPAList_CPAId",
                        column: x => x.CPAId,
                        principalTable: "CPAList",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MeetsList_CustomersList_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "CustomersList",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MeetsList_CPAId",
                table: "MeetsList",
                column: "CPAId");

            migrationBuilder.CreateIndex(
                name: "IX_MeetsList_CustomerId",
                table: "MeetsList",
                column: "CustomerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MeetsList");

            migrationBuilder.DropTable(
                name: "CPAList");

            migrationBuilder.DropTable(
                name: "CustomersList");
        }
    }
}
