// @desc  Get All Bootcamp
// @route GET /api/v1/bootcamps
// @access Public
exports.getAllBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootcamps',
  });
};

// @desc  Get Single Bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getSingleBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get bootcamp ${req.params.id}`,
  });
};

// @desc  Create  Bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createNewBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Create new bootcamps',
  });
};

// @desc  Update Bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp ${req.params.id}`,
  });
};

// @desc  Delete Bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`,
  });
};
