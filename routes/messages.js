var express = require('express');
var router = express.Router();

var models = require('../models/index');

const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.messages));
});
   
router.get('/:messageId', (req, res) => {
    return res.send(req.context.models.messages[req.params.messageId]);
});

router.post('/', (req, res) => {
    const id = uuidv4();
    const message = {
      id,
      text: req.body.text,
      userId: req.context.me.id,
    };
   
    req.context.models.messages[id] = message;
   
    return res.send(message);
});

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;
 
  req.context.models.messages = otherMessages;
 
  return res.send(message);
});

module.exports = router;