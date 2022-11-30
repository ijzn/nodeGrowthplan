const express = require("express");
const videoController = require('../controller/videoController')
const router = express.Router();

router.get("/video-list", videoController.list);

router.get("/videoDetail43", videoController.list);

module.exports = router;
