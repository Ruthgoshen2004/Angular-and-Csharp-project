
using AutoMapper;
using CPA.API.Entities;
using CPA.Core;
using CPA.Core.DTOs;
using CPA.Core.Entities;
using CPA.Core.Service;
using CPA.Service;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.Xml;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CPA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
         private readonly ICustomerService _customerService;
        private readonly IMapper _mapper;

        public CustomerController(ICustomerService customerService,IMapper mapper)
        {
            _customerService = customerService;
            _mapper = mapper;
        }


        // GET: api/<CustomerController>
        [HttpGet]
        public async Task< ActionResult> Get()
        {
            var list = await _customerService.GetAllCustomersAsync();
            var listDto = _mapper.Map<IEnumerable<CustomerDto>>(list);
            return Ok(listDto);
        }

        // GET api/<CustomerController>/5
        [HttpGet("{id}")]
        public async Task< ActionResult> Get(int id)
        {
            Customer c =await _customerService.GetCustomerAsync(id);
            var customerDto = _mapper.Map<CustomerDto>(c);
            return Ok(customerDto);
        }

        // POST api/<CustomerController>
        [HttpPost]
        public async Task Post([FromBody] CustomerPostEntity c)
        {
            var customerToAdd=new Customer { CaseNumber = c.CaseNumber,Name=c.Name };
           await _customerService.AddOneCustomerAsync(customerToAdd);

        }

        // PUT api/<CustomerController>/5
        [HttpPut("{id}")]
        public async Task< Customer> Put(int id, [FromBody] CustomerPostEntity c)
        {
            var customerToPut = new Customer { CaseNumber = c.CaseNumber, Name = c.Name };
            return await _customerService.UpdateOneCustomerAsync(id, customerToPut);

        }

        // DELETE api/<CustomerController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
           await _customerService.DeleteOneCustomerAsync(id);
        }
    }
}
