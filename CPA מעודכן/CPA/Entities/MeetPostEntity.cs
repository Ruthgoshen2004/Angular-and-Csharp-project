namespace CPA.API.Entities
{
    public class MeetPostEntity
    {

        public DateTime MeetingDate { get; set; }

        public int MeetingHour { get; set; }

        public double MeetingDuration { get; set; }

        public int CPAId { get; set; }

        public int CustomerId { get; set; }
    }
}
