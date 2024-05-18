using System.ComponentModel.DataAnnotations;

namespace Backend_Gymrecipes.Models
{
    public class Gymprograms
    {
        [Key]
        public int ProgramId { get; set; }

        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string ImageURL { get; set; }
    }
}
