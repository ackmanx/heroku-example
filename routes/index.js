var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/passthrough', async (req, res) => {
  const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
  res.json(await response.json())
})

module.exports = router;
