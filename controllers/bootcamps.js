const getAllBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootcamps',
  });
};

const getSingleBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get bootcamp ${req.params.id}`,
  });
};

const createNewBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Create new bootcamps',
  });
};

const updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp ${req.params.id}`,
  });
};

const deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`,
  });
};

module.exports = {
  getAllBootcamp,
  getSingleBootcamp,
  createNewBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
