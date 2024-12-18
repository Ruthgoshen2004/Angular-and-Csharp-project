using CPA.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPA.Core.Service
{
    public interface ICpaService
    {
       Task< List<cpa>> GetAllCpaAsync();
        Task<cpa> GetCpaAsync(int id);
        Task AddOneCpaAsync(cpa c);
        Task<cpa> UpdateOneCpaAsync(int id,cpa c);
        Task DeleteOneCpaAsync(int id);
    }
}
