using AutoMapper;
using CPA.Core.DTOs;
using CPA.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPA.Core
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<cpa,cpaDto>().ReverseMap();
            CreateMap<Meet, MeetDto>().ReverseMap();
            CreateMap<Customer,CustomerDto>().ReverseMap(); 
        }
    }
}
