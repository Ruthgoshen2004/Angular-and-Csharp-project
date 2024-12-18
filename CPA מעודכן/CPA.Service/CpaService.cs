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
    public class CpaService:ICpaService
    {
        private readonly ICpaRepositories _cpaRepositories;
        public CpaService(ICpaRepositories cpaRepositories)
        {
            _cpaRepositories = cpaRepositories;
        }

        public async Task AddOneCpaAsync(cpa c)
        {
           await _cpaRepositories.AddCpaAsync(c);
        }

        public async Task DeleteOneCpaAsync(int id)
        {
           await _cpaRepositories.DeleteCpaAsync(id);
        }

        public async Task< List<cpa>> GetAllCpaAsync()
        {
            return await _cpaRepositories.GetCpaAsync();
        }

        public async Task< cpa> GetCpaAsync(int id)
        {
           return await _cpaRepositories.GetCpaByIdAsync(id);
        }

        public async Task<cpa> UpdateOneCpaAsync(int id, cpa c)
        {
            return await _cpaRepositories.UpdateCpaAsync(id, c);
        }
    }
}
