const express = require("express");
const router = express.Router();
const {getWritings, postWriting} = require("../controllers/writings");

router.get("/", getWritings)
router.post("/",postWriting)

module.exports = router;