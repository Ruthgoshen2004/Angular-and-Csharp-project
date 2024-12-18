using CPA.Core.Entities;
using CPA.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace CPA.Data.Repositories
{
    public class CustomerRepositories : ICustomerRepositories
    {
        private readonly DataContext _dataContext;
        public CustomerRepositories(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task AddCustomerAsync(Customer c)
        {
            _dataContext.CustomersList.Add(c);
            await _dataContext.SaveChangesAsync();
        }

        public async Task DeleteCustomerAsync(int id)
        {
            Customer c = await _dataContext.CustomersList.FirstAsync(e => e.Id == id);
            _dataContext.CustomersList.Remove(c);
            await _dataContext.SaveChangesAsync();
        }

        public async Task<Customer> GetCustomerByIdAsync(int id)
        {
            Customer c = await _dataContext.CustomersList.FirstAsync(e => e.Id == id);
            return c;
        }

        public async Task<List<Customer>> GetCustomersAsync()
        {
            return await _dataContext.CustomersList.ToListAsync();
        }

        public async Task<Customer> UpdateCustomerAsync(int id, Customer c)
        {
            Customer cPut = await _dataContext.CustomersList.FirstAsync(e => e.Id == id);
            cPut.Name = c.Name;
            cPut.CaseNumber = c.CaseNumber;
            await _dataContext.SaveChangesAsync();
            return cPut;

        }
    }
}
