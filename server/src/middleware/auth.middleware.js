const { verifToken } = require("../utils");

module.exports = (req, res, next) => {
  const isValid = req.headers.authorization?.startsWith("Bearer ");
  if (!isValid) return res.json({ success: false, error: "unauthorized" });

  try {
    const token = req.headers.authorization.split(" ")[1];

    const payload = verifToken(token);

    if (!payload.id) {
      return res.json({
        success: false,
        error: "Invalid token",
      });
    }
    req.user = payload;
    // console.log(req.user);
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: "Invalid token",
    });
  }

  next();
}
