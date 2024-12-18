using CPA.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace CPA.Data
{
    public class DataContext:DbContext
    {
        public  DbSet<Customer> CustomersList { get; set; }
      
        public DbSet<cpa> CPAList { get; set; }
      
        public DbSet<Meet> MeetsList { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=CPA_db");

        }



    }
}
