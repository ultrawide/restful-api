var express = require('express');
var router = express.Router();
var users = require('./users');

const { v4: uuidv4 } = require('uuid');
 
let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
};

router.get('/', (req, res) => {
    return res.send(Object.values(messages));
});
   
router.get('/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});

router.post('/', (req, res) => {
    const id = uuidv4();
    const message = {
      id,
      text: req.body.text,
      userId: req.me.id,
    };
   
    messages[id] = message;
   
    return res.send(message);
});

module.exports = router;