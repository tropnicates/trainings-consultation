import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  console.log("Token from request:", token);

  if (!token) {
    return res.status(401).json({ success: false, error: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("Decoded User:", req.user);
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    res.status(401).json({ success: false, error: "Invalid or expired token" });
  }
};

