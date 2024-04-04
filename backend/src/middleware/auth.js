import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // console.log("header", req.header("Authorization"));
    let token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({
        success: false,
        message: `token missing`
      });
    }
    
    token = token.replace("Bearer ", "");

    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET)
      // console.log(decoded);
      req.user = decoded;
    } 
    catch (error) {
      console.log(error);
      return res.status(401).json({
        success: false,
        message: `token invalid`,
      });
    }
    next();
  } 
  catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: `something went wrong, while verifying token`,
    });
  }
};

export default authMiddleware;
