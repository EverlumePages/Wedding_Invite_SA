const https = require('https');

https.get('https://www.youtube.com/results?search_query=kandyan+wedding+cinematic', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/watch\?v=([a-zA-Z0-9_-]{11})/);
    if (match) {
      console.log(match[1]);
    } else {
      console.log('No video ID found');
    }
  });
}).on('error', (err) => {
  console.error(err);
});
