const express = require("express")
const router = express.Router()
const rangonController = require("../controllers/rangonController")
this.rangonController = new rangonController()



/* Cliente */
    /* Home */
    router.get('/', this.rangonController.productsAll)
    router.get('/Home', this.rangonController.productsAll)
    router.post('/Home/finalizarpedido', this.rangonController.finalizarPedido)


    /* Cadastro */
    router.post('/cadastro', this.rangonController.registrationUser)


    /* Login */
    router.post('/login', this.rangonController.loginUser)


    /* Pedidos */
    router.post('/pedidos/andamento', this.rangonController.pedidosEmAndamento)
    router.post('/pedidos/finalizadosCancelados', this.rangonController.pedidosFinalizadosCancelados)
    router.put('/pedidos/cancelarpedido', this.rangonController.cancelarPedido)


    /* Perfil */
    router.get('/perfil', this.rangonController.findUserData)


/* Admin */

    /* Admin */

    router.get('/admin-itens', this.rangonController.findItensAdmin)



module.exports = router