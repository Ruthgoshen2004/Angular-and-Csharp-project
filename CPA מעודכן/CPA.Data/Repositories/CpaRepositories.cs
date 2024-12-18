using CPA.Core.Entities;
using CPA.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPA.Data.Repositories
{
    public class CpaRepositories : ICpaRepositories
    {
        private readonly DataContext _dataContext;
        public CpaRepositories(DataContext dataContext)
        {
            _dataContext=dataContext;
        }

        public async Task AddCpaAsync(cpa c)
        {
            _dataContext.CPAList.Add(c);
           await _dataContext.SaveChangesAsync();
        }

        public async Task DeleteCpaAsync(int id)
        {
            cpa c = await _dataContext.CPAList.FirstAsync(e => e.Id == id);
            _dataContext.CPAList.Remove(c);
           await _dataContext.SaveChangesAsync();
        }

        public async Task<List<cpa>> GetCpaAsync()
        {
            return await _dataContext.CPAList.ToListAsync();
        }

        public async Task<cpa> GetCpaByIdAsync(int id)
        {
           return await _dataContext.CPAList.FirstAsync(e => e.Id == id);
        }

        public async Task<cpa> UpdateCpaAsync(int id, cpa c)
        {
            cpa c1 =await _dataContext.CPAList.FirstAsync(e => e.Id == id);
            c1.Name = c.Name;
            c1.SeniorityYears = c.SeniorityYears;
           await _dataContext.SaveChangesAsync();
            return c1;
           
        }
        
    }
}
