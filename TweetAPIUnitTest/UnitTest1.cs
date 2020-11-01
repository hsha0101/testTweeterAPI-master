using Microsoft.VisualStudio.TestTools.UnitTesting;
using testTweeterAPI.Models;
using testTweeterAPI.Repository;

namespace TweetAPIUnitTest
{
    [TestClass]
    public class UnitTest1
    {
         
        [TestMethod]
        public void CanReceiveDataFromTweeter()
        {
            bool result = false;
            
            IApi api = new TweeterAPI();
             
            var responseStream = api.GetStreamByBearToken("https://api.twitter.com/2/tweets/sample/stream?tweet.fields=created_at", "Bearer AAAAAAAAAAAAAAAAAAAAAMMjJQEAAAAAd4oWcYCSGlHem9XELKavPamnVVA%3D9RTO6xZOKfJF64bhK8HZ0BTP9eF26z5FVc11MFJDu0Dw3xPnF5");

            if (responseStream != null)
            {
                result = true;
            }
  
            responseStream.Close();
            
            Assert.AreEqual(true, result);
        }
    }
}
