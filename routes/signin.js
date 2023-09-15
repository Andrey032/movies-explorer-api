const router = require('express').Router();
const { login } = require('../controllers/users');
const { validateLoginUser } = require('../middlewares/validateCelebrate');

router.post('/', validateLoginUser, login);

module.exports = router;
