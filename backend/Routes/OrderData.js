const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post("/orderData", async (req, res) => {
  try {
    let data = req.body.order_data;
    if (!req.body.email) {
      return res
        .status(400)
        .send("order validation failed: email: Path `email` is required.");
    }
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;
    if (!emailRegex.test(req.body.email)) {
      return res
        .status(400)
        .send("order validation failed: email: Invalid email address.");
    }
    await data.splice(0, 0, { Order_data: req.body.order_date });

    let eId = await Order.findOne({ email: req.body.email });
    console.log(eId);
    if (eId === null) {
      await Order.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.status(200).json({ success: true });
      });
    } else {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      ).then(() => {
        res.status(200).json({ success: true });
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error", err.message);
  }
});

// Myorder Data
router.post("/myorderData", async (req, res) => {
  try {
    // console.log(req.body.email);
    const myData = await Order.findOne({ email: req.body.email });
    res.json({ orderData: myData });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error", err.message);
  }
});

module.exports = router;
