const express = require('express')
const router = express.Router()
const rangonController = require("../controllers/rangonController")
this.rangonController = new rangonController()

router.get('/', this.rangonController.findAll);
router.put('/login/:status', this.rangonController.updateLogin);

module.exports = router;