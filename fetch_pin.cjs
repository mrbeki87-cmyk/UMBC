const https = require('https');

https.get('https://www.pinterest.com/pin/842384305279618077/', {
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const ogImageMatch = data.match(/property="og:image"\s+content="([^"]+)"/);
    if (ogImageMatch) {
      console.log(ogImageMatch[1]);
      return;
    }
    
    const pinimgMatch = data.match(/(https:\/\/i\.pinimg\.com\/originals\/[^"]+\.(?:png|jpg))/);
    if (pinimgMatch) {
      console.log(pinimgMatch[1]);
      return;
    }
    
    const pinimg736xMatch = data.match(/(https:\/\/i\.pinimg\.com\/736x\/[^"]+\.(?:jpg|png))/);
    if (pinimg736xMatch) {
      console.log(pinimg736xMatch[1]);
      return;
    }
    
    console.log('Not found');
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
