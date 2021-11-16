const { Router } = require("express");
const router = Router();

const { Restaurant } = require("./Restaurant");

Restaurant(router);

router.get("/", (req, res) => {
  res.send("Welcome to Kp's Backend");
});

module.exports = router;
