using CPA.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPA.Core.Repositories
{
    public interface ICpaRepositories
    {
        Task<List<cpa>> GetCpaAsync();
        Task<cpa> GetCpaByIdAsync(int id);
        Task AddCpaAsync(cpa c);
        Task<cpa> UpdateCpaAsync(int id, cpa c);
        Task DeleteCpaAsync(int id);
    }
}
