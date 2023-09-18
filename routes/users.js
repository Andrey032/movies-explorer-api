const router = require('express').Router();
const { editUserData, getMe } = require('../controllers/users');
const { validateEditUser } = require('../middlewares/validateCelebrate');

router.get('/me', getMe);
router.patch('/me', validateEditUser, editUserData);

module.exports = router;
