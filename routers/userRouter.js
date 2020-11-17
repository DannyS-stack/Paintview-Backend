const { Router } = require("express");

const router = new Router();


router.get("/", async (req, res, next) => {
    const date = req.query.date;

    try {
      const users = await User.findAll({
      });
  
      res.send(users);
    } catch (e) {
      next(e);
    }
  });

  module.exports = router;
