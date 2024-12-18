
using AutoMapper;
using CPA.API.Entities;
using CPA.Core;
using CPA.Core.DTOs;
using CPA.Core.Entities;
using CPA.Core.Service;
using CPA.Service;
using Microsoft.AspNetCore.Mvc;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CPA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CPAController : ControllerBase
    {
        private readonly ICpaService _paService;
        private readonly IMapper _mapper;
        public CPAController(ICpaService paService,IMapper mapper)
        {
            _paService = paService;
            _mapper = mapper;
        }

        // GET: api/<CPAController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var list = await _paService.GetAllCpaAsync();
            var listDto = _mapper.Map<IEnumerable< cpaDto>>(list);
           return Ok(listDto);
        }

        // GET api/<CPAController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            cpa c = await _paService.GetCpaAsync(id);
            var cpaDto = _mapper.Map<cpaDto>(c);
            return Ok(cpaDto);
        }

        // POST api/<CPAController>
        [HttpPost]
        public async Task Post([FromBody] cpaPostEntity c)
        {
            var cpaToAdd = new cpa { Name = c.Name, SeniorityYears = c.SeniorityYears };
            await _paService.AddOneCpaAsync(cpaToAdd);
        }

        // PUT api/<CPAController>/5
        [HttpPut("{id}")]
        public async Task<cpa> Put(int id, [FromBody] cpaPostEntity c)
        {
            var cpaToPut = new cpa { Name = c.Name, SeniorityYears = c.SeniorityYears };
            return await _paService.UpdateOneCpaAsync(id, cpaToPut);
        }

        // DELETE api/<CPAController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
           await _paService.DeleteOneCpaAsync(id);
        }
    }
}
