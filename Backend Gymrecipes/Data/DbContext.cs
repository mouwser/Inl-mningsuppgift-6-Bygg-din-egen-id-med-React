using Backend_Gymrecipes.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Backend_Gymrecipes.Data
{


    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }
      

        public DbSet<Gymprograms> GymPrograms { get; set; }

        public DbSet<Mealplans> Mealplans { get; set;}
    }
}
