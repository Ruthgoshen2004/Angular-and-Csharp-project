using CPA.Core.Entities;
using CPA.Core.Repositories;
using CPA.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPA.Service
{
    public class CustomerService:ICustomerService
    {
        private readonly ICustomerRepositories _customerRepositories;
        public CustomerService(ICustomerRepositories customerRepositories)
        {
            _customerRepositories = customerRepositories;
        }

        public async Task AddOneCustomerAsync(Customer c)
        {
            await _customerRepositories.AddCustomerAsync(c);
        }

        public async Task DeleteOneCustomerAsync(int id)
        {
           await _customerRepositories.DeleteCustomerAsync(id);
        }

        public async Task< List<Customer>> GetAllCustomersAsync()
        {
            return await _customerRepositories.GetCustomersAsync();
        }

        public async Task< Customer> GetCustomerAsync(int id)
        {
            return await _customerRepositories.GetCustomerByIdAsync(id);
        }

        public async Task<Customer> UpdateOneCustomerAsync(int id,Customer c)
        {
          return await _customerRepositories.UpdateCustomerAsync(id,c);
        }
    }
}
