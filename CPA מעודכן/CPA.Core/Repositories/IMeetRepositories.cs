using CPA.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPA.Core.Repositories
{
    public interface IMeetRepositories
    {
        Task<List<Meet>> GetMeetAsync();
        Task<Meet> GetMeetByIdAsync(int id);
        Task AddMeetAsync(Meet m);
       Task< Meet> UpdateMeetAsync(int id, Meet m);
        Task DeleteMeetAsync(int id);
    }
}
