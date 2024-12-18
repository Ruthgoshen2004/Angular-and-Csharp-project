using CPA.Core.Entities;

namespace CPA.Core.Repositories
{
    public interface ICustomerRepositories
    {
        Task<List<Customer>> GetCustomersAsync();
       Task< Customer> GetCustomerByIdAsync(int id);
        Task AddCustomerAsync(Customer c);
        Task<Customer> UpdateCustomerAsync(int id, Customer c);
        Task DeleteCustomerAsync(int id);
    }
}
