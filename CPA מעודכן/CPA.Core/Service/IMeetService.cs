using CPA.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPA.Core.Service
{
    public interface IMeetService
    {
       Task< List<Meet>> GetAllMeetsAsync();
       Task< Meet> GetMeetAsync(int id);
        Task AddOneMeetAsync(Meet m);
       Task< Meet> UpdateOneMeetAsync(int id, Meet m);
        Task DeleteOneMeetAsync(int id);
    }
}
