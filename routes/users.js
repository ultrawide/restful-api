var express = require('express');
var router = express.Router();

// Hard coded data for demonstration
let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

router.get('/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

router.get('/', (req, res) => {
  return res.send(Object.values(users));
});
 
router.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
 
router.put('/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});
 
router.delete('/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

module.exports = router;
module.exports.users = users;