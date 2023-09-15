const router = require('express').Router();
const { createUser } = require('../controllers/users');
const { validateCreateUser } = require('../middlewares/validateCelebrate');

router.post('/', validateCreateUser, createUser);

module.exports = router;
