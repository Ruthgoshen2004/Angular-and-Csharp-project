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
    public class MeetRepositories:IMeetRepositories
    {
        private readonly DataContext _dataContext;
        public MeetRepositories(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task AddMeetAsync(Meet m)
        {
           _dataContext.MeetsList.Add(m);
           await _dataContext.SaveChangesAsync();
        }

        public async Task DeleteMeetAsync(int id)
        {
            Meet m1= await _dataContext.MeetsList.FirstAsync(e=>e.Id==id);
            _dataContext.MeetsList.Remove(m1);
           await _dataContext.SaveChangesAsync();
        }

        public async Task< List<Meet> > GetMeetAsync()
        {
            return await _dataContext.MeetsList.Include(m=>m.CPA).Include(m=>m.Customer).ToListAsync();
        }

        public async Task< Meet> GetMeetByIdAsync(int id)
        {
            return await _dataContext.MeetsList.Include(m => m.CPA).Include(m => m.Customer).FirstAsync(e => e.Id == id);
        }

        public async Task< Meet >UpdateMeetAsync(int id, Meet m)
        {
            Meet m1 = await _dataContext.MeetsList.FirstAsync(e => e.Id == id);
            m1.MeetingDate = m.MeetingDate;
            m1.MeetingDuration = m.MeetingDuration;
            m1.MeetingHour=m.MeetingHour;
            await _dataContext.SaveChangesAsync();
            return m1;
        }
    }
}
