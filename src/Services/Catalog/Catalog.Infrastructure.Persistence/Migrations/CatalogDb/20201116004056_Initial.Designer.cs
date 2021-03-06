﻿// <auto-generated />
using System;
using Catalog.Infrastructure.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Catalog.Infrastructure.Persistence.Migrations.CatalogDb
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20201116004056_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("Catalog.Core.Domain.Entities.Brand", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Brands");
                });

            modelBuilder.Entity("Catalog.Core.Domain.Entities.CatalogItem", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CatalogBrandId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CatalogTypeId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PictureFileName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PictureUri")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,8)");

                    b.HasKey("Id");

                    b.HasIndex("CatalogBrandId");

                    b.HasIndex("CatalogTypeId");

                    b.ToTable("CatalogItems");
                });

            modelBuilder.Entity("Catalog.Core.Domain.Entities.CatalogType", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("CatalogTypes");
                });

            modelBuilder.Entity("Catalog.Core.Domain.Entities.CatalogItem", b =>
                {
                    b.HasOne("Catalog.Core.Domain.Entities.Brand", "CatalogBrand")
                        .WithMany("CatalogItems")
                        .HasForeignKey("CatalogBrandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Catalog.Core.Domain.Entities.CatalogType", "CatalogType")
                        .WithMany("CatalogItems")
                        .HasForeignKey("CatalogTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CatalogBrand");

                    b.Navigation("CatalogType");
                });

            modelBuilder.Entity("Catalog.Core.Domain.Entities.Brand", b =>
                {
                    b.Navigation("CatalogItems");
                });

            modelBuilder.Entity("Catalog.Core.Domain.Entities.CatalogType", b =>
                {
                    b.Navigation("CatalogItems");
                });
#pragma warning restore 612, 618
        }
    }
}
