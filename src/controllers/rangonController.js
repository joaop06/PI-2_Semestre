const bd_rangon = require('@/data/bd_rangon.json')

module.exports = class ScoreController{
    async updateLogin(req, res){
        const {status_logado} = req.params;

        const usuario_logado = bd_rangon.clientes
    }
}