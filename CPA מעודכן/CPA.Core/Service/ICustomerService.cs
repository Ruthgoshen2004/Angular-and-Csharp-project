using CPA.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPA.Core.Service
{
    public interface ICustomerService
    {
       Task< List<Customer>> GetAllCustomersAsync();
       Task<Customer> GetCustomerAsync(int id);
       Task AddOneCustomerAsync(Customer c);
       Task< Customer> UpdateOneCustomerAsync(int id,Customer c);
        Task DeleteOneCustomerAsync(int id);
    }
}
