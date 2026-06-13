export default async (request, context) => {
  const url = new URL(request.url);
  
  // App က လှမ်းခေါ်တဲ့ URL ကို Cloudflare API ဆီ ပြောင်းပေးပါမယ်
  url.hostname = "api.cloudflareclient.com";
  
  // Headers နှင့် Method များမပျက်စေရန် မူလ Request အတိုင်း ဆက်ပို့ပါမယ်
  const proxyRequest = new Request(url.toString(), request);
  
  return fetch(proxyRequest);
};
