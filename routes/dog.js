// routes/dog.js
var express = require('express');
var router = express.Router();
const request = require('request');

// GET /dog
router.get('/', (req, res) => {
  // ランダムな犬の画像を返すDog API
  const url = 'https://dog.ceo/api/breeds/image/random';

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      // data 例: { "message": "https://...", "status": "success" }
      
      // JSONのまま返す場合
      // res.json(data);

      // 画像をHTMLで返す場合：
      res.send(`
        <html>
          <body>
            <h1>Random Dog Image</h1>
            <img src="${data.message}" alt="dog" style="max-width:400px;">
          </body>
        </html>
      `);
    } else {
      res.status(500).send('Error fetching dog image.');
    }
  });
});

module.exports = router;
