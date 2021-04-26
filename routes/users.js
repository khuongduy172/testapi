var express = require('express');
const { UpdateUserById } = require('../middlewares/products.middleware');
var router = express.Router();

const {GetAllUser, AddUser} = require('../middlewares/users.middleware')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await GetAllUser();
  res.json(users);
});

router.post('/', async (req, res, next) => {
  const user = await AddUser(req.body);
  res.json(user);
})



module.exports = router;
