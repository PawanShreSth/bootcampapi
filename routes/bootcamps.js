const express = require('express');
const router = express.Router();
const {
  getAllBootcamp,
  getSingleBootcamp,
  createNewBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');

router.route('/').get(getAllBootcamp).post(createNewBootcamp);
router
  .route('/:id')
  .get(getSingleBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
