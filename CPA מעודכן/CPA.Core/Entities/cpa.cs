namespace CPA.Core.Entities
{
    public class cpa
    {
        public int Id { get ; set; }

        public string Name { get ; set; }

        public int SeniorityYears { get ; set; }

        public List<Meet> Meets { get; set; }

    }
}
