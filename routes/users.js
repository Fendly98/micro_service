var express = require('express');
const { createUser, getUsers, getUser } = require('../user');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const users = getUsers()
  res.send(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params

  try {
    const user = getUser(id)

    res.send(user)
  } catch (error) {
    res.send({ error: error.message });
  }
})

router.post('/', (req, res) => {
  const data = req.body

  try {
    const newUser = createUser(data)
    console.log({ newUser })

    res.send(newUser);
  } catch (error) {
    res.send({ error: error.message });
  }
})

module.exports = router;
