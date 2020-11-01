using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace testTweeterAPI.Repository
{
    public interface IApi
    {
        public Stream GetStreamByBearToken(string uri,string token);
    }
}
