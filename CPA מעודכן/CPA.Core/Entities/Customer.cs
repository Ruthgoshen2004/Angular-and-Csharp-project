namespace CPA.Core.Entities
{
    public class Customer
    {
        public int Id { get; set; } 

        public string Name { get; set; }

        public string CaseNumber { get; set; }
       
        public List<Meet> Meets { get; set; }
   

    }
}
