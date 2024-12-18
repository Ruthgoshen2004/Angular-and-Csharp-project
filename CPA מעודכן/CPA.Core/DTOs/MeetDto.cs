using CPA.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPA.Core.DTOs
{
    public class MeetDto
    {
        public int Id { get; set; }

        public DateTime MeetingDate { get; set; }

        public int MeetingHour { get; set; }

        public double MeetingDuration { get; set; }

        public int CPAId { get; set; }

        public int CustomerId { get; set; }

        public cpaDto   Cpa { get; set; }

        public CustomerDto Customer { get; set; }

      
    }
}
