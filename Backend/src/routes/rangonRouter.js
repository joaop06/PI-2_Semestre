const express = require("express")
const router = express.Router()
const rangonController = require("../controllers/rangonController")
this.rangonController = new rangonController()



/* Cliente */
    /* Home */
    router.get('/', this.rangonController.productsAll)
    router.get('/Home', this.rangonController.productsAll)


    /* Cadastro */
    router.post('/cadastro', this.rangonController.registrationUser)


    /* Login */
    router.post('/login', this.rangonController.loginUser)


module.exports = router