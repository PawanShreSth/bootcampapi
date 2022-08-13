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

// router.get('/', getAllBootcamp);
// router.get('/:id', getSingleBootcamp);
// router.post('/', createNewBootcamp);
// router.put('/:id', updateBootcamp);
// router.delete('/:id', deleteBootcamp);

module.exports = router;
