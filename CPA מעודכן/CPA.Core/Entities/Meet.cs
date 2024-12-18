using System.ComponentModel.DataAnnotations;

namespace CPA.Core.Entities
{
    public class Meet
    {
        
        public int Id { get; set; }

        public DateTime MeetingDate { get; set; }

        public int MeetingHour { get; set; }

        public double MeetingDuration { get; set; }

        public int CPAId { get; set; }

        public cpa CPA { get; set; }

        public int CustomerId { get; set; }
       
        public Customer Customer { get; set; }
    }
}
