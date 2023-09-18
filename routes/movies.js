const router = require('express').Router();
const { createMovie, getMovies, deleteMovie } = require('../controllers/movies');
const { validateDeleteMovie, validateCreateMovie } = require('../middlewares/validateCelebrate');

router.get('/', getMovies);
router.post('/', validateCreateMovie, createMovie);
router.delete('/:movieId', validateDeleteMovie, deleteMovie);

module.exports = router;
