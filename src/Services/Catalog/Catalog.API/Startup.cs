using Catalog.Core.Application.DependencyInjection;
using Catalog.Infrastructure.Persistence.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace Catalog.API
{
    public class Startup
    {
        private const string ApiName = "Catalog.API";

        private readonly ApiVersion _apiVersion;
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
            _apiVersion = new ApiVersion(1, 0);
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplication();
            services.AddPersistence(_config);

            services.AddCors();

            services.AddMvc(o =>
            {
                o.EnableEndpointRouting = false;
            });

            services.AddSwaggerGen(c =>
            {
                c.IncludeXmlComments($@"{System.AppDomain.CurrentDomain.BaseDirectory}\{ApiName}.xml");
                c.SwaggerDoc($"v{_apiVersion.MajorVersion}", new OpenApiInfo
                {
                    Version = $"v{_apiVersion.MajorVersion}",
                    Title = ApiName,
                });
            });

            services.AddApiVersioning(c =>
            {
                c.DefaultApiVersion = new ApiVersion(1, 0);
                c.AssumeDefaultVersionWhenUnspecified = true;
                c.ReportApiVersions = true;
            });
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(c =>
            {
                c.AllowAnyHeader();
                c.AllowAnyMethod();
                c.AllowAnyOrigin();
            });

            //app.UseHttpsRedirection();
            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", ApiName);
            });

        }
    }
}
