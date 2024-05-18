using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend_Gymrecipes.Data;
using Backend_Gymrecipes.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;




namespace Backend_Gymrecipes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GymprogramsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<GymprogramsController> _logger;

        public GymprogramsController(ApplicationDbContext context, ILogger<GymprogramsController> logger)
        {

            _context = context;
            _logger =logger;

        }
        // GET: api/gymprograms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gymprograms>>> GetGymprograms()
        {
           try
            {
                return await _context.GymPrograms.ToListAsync();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }
        // GET: api/gymprograms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gymprograms>> GetGymProgram(int id)
        {
           var Gymprograms = await _context.GymPrograms.FindAsync(id);

            if (Gymprograms == null)
            {
                return NotFound();
            }

            return Gymprograms;
        }
        // POST: api/gymprograms
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Gymprograms>> PostGymprograms(Gymprograms gymprograms)
        {

            

            _context.GymPrograms.Add(gymprograms);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGymProgram), new { id = gymprograms.ProgramId }, gymprograms);
        }
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGymprograms(int id)
        {
            var Gymprograms = await _context.GymPrograms.FindAsync(id);
            if (Gymprograms == null)
            {
                return NotFound();
            }

            _context.GymPrograms.Remove(Gymprograms);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGymprograms(int id, Gymprograms gymprograms)
        {

            _logger.LogInformation($"Received PUT request for Gymprograms with ID {id}");

            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid model state");
                return BadRequest(ModelState);
            }

            // Set the ProgramId to the ID from the URL
            gymprograms.ProgramId = id;

            _context.Entry(gymprograms).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GymprogramsExists(id))
                {
                    _logger.LogWarning($"Gymprograms with ID {id} not found");
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

        private bool GymprogramsExists(int id)
        {
            return _context.GymPrograms.Any(e => e.ProgramId == id);
        }


    }

    
}
