exports.list = async (req, res) => {
  console.log(req.url);
  res.send(req.url);
};

exports.deletUser = async (req, res) => {
  console.log(req.url);
  res.send(req.url);
};
