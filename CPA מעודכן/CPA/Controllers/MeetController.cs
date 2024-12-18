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
    public class MeetController : ControllerBase
    {
        private readonly IMeetService _meetService;
        private readonly IMapper _mapper;
        public MeetController(IMeetService meetService,IMapper mapper)
        {
            _meetService = meetService;
            _mapper = mapper;
        }

        // GET: api/<MeetController>
        [HttpGet]
        public async Task< IEnumerable<MeetDto>> Get()
        {
            var list=await _meetService.GetAllMeetsAsync();
            var listDto = _mapper.Map<IEnumerable<MeetDto>>(list);
            return listDto;
        }

        // GET api/<MeetController>/5
        [HttpGet("{id}")]
        public async Task< ActionResult> Get(int id)
        {
            Meet m= await _meetService.GetMeetAsync(id);
            var meetDto=_mapper.Map<MeetDto>(m);
            return Ok(meetDto);
        }
 

        // POST api/<MeetController>
        [HttpPost]
        public async Task Post([FromBody] MeetPostEntity m)
        {
            var meetToAdd=new Meet { CPAId=m.CPAId,CustomerId=m.CustomerId,MeetingDate=m.MeetingDate,MeetingDuration=m.MeetingDuration,MeetingHour=m.MeetingHour };
           await _meetService.AddOneMeetAsync(meetToAdd);
        }

        // PUT api/<MeetController>/5
        [HttpPut("{id}")]
        public async Task< ActionResult<Meet>> Put(int id, [FromBody] MeetPostEntity m )
        {
            var meetToPut = new Meet { CPAId = m.CPAId, CustomerId = m.CustomerId, MeetingDate = m.MeetingDate, MeetingDuration = m.MeetingDuration, MeetingHour = m.MeetingHour };
            return await _meetService.UpdateOneMeetAsync(id, meetToPut);
        }

        // DELETE api/<MeetController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
          await _meetService.DeleteOneMeetAsync(id);

        }       
     

    }
}
