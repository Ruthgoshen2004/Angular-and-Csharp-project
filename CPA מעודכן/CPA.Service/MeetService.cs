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
    public class MeetService:IMeetService
    {
        private readonly IMeetRepositories _meetRepositories;
        public MeetService(IMeetRepositories meetRepositories)
        {
            _meetRepositories = meetRepositories;
        }

        public async Task AddOneMeetAsync(Meet m)
        {
          await _meetRepositories.AddMeetAsync(m);
        }

        public async Task DeleteOneMeetAsync(int id)
        {
         await _meetRepositories.DeleteMeetAsync(id);
        }

        public async Task< List<Meet>> GetAllMeetAsync()
        {
            return await _meetRepositories.GetMeetAsync();
        }

        public async Task< List<Meet>> GetAllMeetsAsync()
        {
            return await _meetRepositories.GetMeetAsync();
        }

        public async Task< Meet> GetMeetAsync(int id)
        {
            return await _meetRepositories.GetMeetByIdAsync(id);
        }

        public  async Task< Meet> UpdateOneMeetAsync(int id, Meet m)
        {
            return await _meetRepositories.UpdateMeetAsync(id, m);
        }
    }
}
