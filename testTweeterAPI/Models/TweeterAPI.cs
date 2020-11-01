using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using testTweeterAPI.Repository;

namespace testTweeterAPI.Models
{
    public class TweeterAPI : IApi
    {
        public Stream GetStreamByBearToken(string uri,string token)
        {
            try
            {
                var myUri = new Uri(uri);
                var myWebRequest = WebRequest.Create(myUri);
                var myHttpWebRequest = (HttpWebRequest)myWebRequest;
                myHttpWebRequest.PreAuthenticate = true;
                myHttpWebRequest.Headers.Add("Authorization", token);
                myHttpWebRequest.Accept = "application/json";
                var myWebResponse = myWebRequest.GetResponse();
                var responseStream = myWebResponse.GetResponseStream();
                return responseStream;
            }
            catch
            {
                return null;
            }
        }
    }
}
