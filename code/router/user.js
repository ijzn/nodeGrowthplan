const exoress = require('exoress');
const userController = require('../controller/userController')
const router = express.Router();


router.get("/list", userController.list);

router.get("/deletUser", (req, res) => {
  console.log(req.url);
  res.send(req.url);
});

module.exports = router;