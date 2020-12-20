using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Basket.Persistence.Migrations.BasketDb
{
    public partial class Denormalization : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_CustomerBaskets_BasketId",
                table: "BasketItems");

            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_CustomerBaskets_CustomerBasketBuyerId",
                table: "BasketItems");

            migrationBuilder.DropTable(
                name: "CustomerBaskets");

            migrationBuilder.DropIndex(
                name: "IX_BasketItems_BasketId",
                table: "BasketItems");

            migrationBuilder.DropIndex(
                name: "IX_BasketItems_CustomerBasketBuyerId",
                table: "BasketItems");

            migrationBuilder.DropColumn(
                name: "CustomerBasketBuyerId",
                table: "BasketItems");

            migrationBuilder.RenameColumn(
                name: "BasketId",
                table: "BasketItems",
                newName: "BuyerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BuyerId",
                table: "BasketItems",
                newName: "BasketId");

            migrationBuilder.AddColumn<Guid>(
                name: "CustomerBasketBuyerId",
                table: "BasketItems",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CustomerBaskets",
                columns: table => new
                {
                    BuyerId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerBaskets", x => x.BuyerId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_BasketId",
                table: "BasketItems",
                column: "BasketId");

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_CustomerBasketBuyerId",
                table: "BasketItems",
                column: "CustomerBasketBuyerId");

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_CustomerBaskets_BasketId",
                table: "BasketItems",
                column: "BasketId",
                principalTable: "CustomerBaskets",
                principalColumn: "BuyerId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_CustomerBaskets_CustomerBasketBuyerId",
                table: "BasketItems",
                column: "CustomerBasketBuyerId",
                principalTable: "CustomerBaskets",
                principalColumn: "BuyerId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
