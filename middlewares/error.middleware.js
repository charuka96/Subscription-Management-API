const errorMedleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.log(err);

    //mongoose bad objectID
    if (err.name === "CastError") {
      const message = "Resource Not Found";
      error = new Error(message);
      error.statusCode = 404;
    }

    //mongoose dublicate key
    if (err.code === 11000) {
      const message = "Dublicate filed value entered";
      error = new Error(message);
      error.statusCode = 400;
    }

    //mongoose ValidationError
    if (err.code === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message.join(","));
      error.statusCode = 400;
    }

    res
      .status(error.statusCode || 500)
      .json({ sucsess: false, error: error.message || "Server Error" });
  } catch (error) {
    next(error);
  }
};

export default errorMedleware;
