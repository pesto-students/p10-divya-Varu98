const validateID = (req, res, next) => {
  const { id } = Number(req.params);
  if (!id)
    return res
      .status(400)
      .json({ message: "Bad Request, please provide valid id" });
  next();
};

const requestLogger = (req, res, next) => {
  console.log(
    `Time: ${new Date()}\nRequest Method: ${req.method}\nRequest Path: ${
      req.url
    }\n`
  );
  next();
};

module.exports.validateID = validateID;
module.exports.requestLogger = requestLogger;
