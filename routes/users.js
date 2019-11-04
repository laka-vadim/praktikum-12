const router = require('express').Router();
const users = require('../data/users.json');

router.get('/:id', (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < users.length; i += 1) {
    if (users[i]._id === id) {
      res.send(users[i]);
    }
  }

  // if (!users[id]) {
  //   res.send({ error: 'Такого пользователя нет' })
  // } else {
  //   res.send(users[id])
  // }
});

module.exports = router;
