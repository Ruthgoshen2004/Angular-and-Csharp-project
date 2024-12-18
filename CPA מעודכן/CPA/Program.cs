using CPA.Core;
using CPA.Core.Repositories;
using CPA.Core.Service;
using CPA.Data;
using CPA.Data.Repositories;
using CPA.Service;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICustomerService, CustomerService>();
builder.Services.AddScoped<ICustomerRepositories , CustomerRepositories>();
builder.Services.AddScoped<IMeetService, MeetService>();
builder.Services.AddScoped<IMeetRepositories, MeetRepositories>();
builder.Services.AddScoped<ICpaService, CpaService>();
builder.Services.AddScoped<ICpaRepositories, CpaRepositories>();
builder.Services.AddDbContext<DataContext>();
builder.Services.AddAutoMapper(typeof(MappingProfile));
//builder.Services.AddSingleton<DataContext>();

var policy = "policy";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policy, policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});
var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(policy);

app.MapControllers();

app.Run();
