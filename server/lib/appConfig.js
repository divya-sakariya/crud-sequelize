exports.handleResponse = (label, data, res) => {
  return res.status(200).json({
    title: `${label} successfully`,
    data
  })
}

exports.handleError = (error, res) => {
  res.status(500)
  res.render('error', { error })
};