using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend_Gymrecipes.Data;
using Backend_Gymrecipes.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;


namespace Backend_Gymrecipes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MealplansController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<MealplansController> _logger;

        public MealplansController(ApplicationDbContext context, ILogger<MealplansController> logger)
        {

            _context = context;
            _logger = logger;

        }
        // GET: api/mealplans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mealplans>>> GetMealplans()
        {
            try
            {
                return await _context.Mealplans.ToListAsync();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }
        // GET: api/mealplans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mealplans>> GetMealplans(int id)
        {
            var Mealplans = await _context.Mealplans.FindAsync(id);

            if (Mealplans == null)
            {
                return NotFound();
            }

            return Mealplans;
        }
        // POST: api/mealplans
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Mealplans>> PostMealplans(Mealplans mealplans)
        {
            _context.Mealplans.Add(mealplans);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMealplans), new { id = mealplans.MealId }, mealplans);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteMealplans(int id)
        {
            var Mealplans = await _context.Mealplans.FindAsync(id);
            if (Mealplans == null)
            {
                return NotFound();
            }

            _context.Mealplans.Remove(Mealplans);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMealplans(int id, Mealplans mealplans)
        {

            _logger.LogInformation($"Received PUT request for Mealplans with ID {id}");

            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid model state");
                return BadRequest(ModelState);
            }

           
            mealplans.MealId = id;

            _context.Entry(mealplans).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MealplansExists(id))
                {
                    _logger.LogWarning($"Mealplans with ID {id} not found");
                    return NotFound();
                }
                else
                {
                    _logger.LogError("Concurrency exception occurred");
                    throw;
                }
            }

            return NoContent();
        }

        private bool MealplansExists(int id)
        {
            return _context.Mealplans.Any(e => e.MealId == id);
        }

    }
}

