var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  return res.send('GET HTTP method on user resource');
});
 
router.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
 
router.put('/', (req, res) => {
  return res.send('PUT HTTP method on user resource');
});
 
router.delete('/', (req, res) => {
  return res.send('DELETE HTTP method on user resource');
});

module.exports = router;
