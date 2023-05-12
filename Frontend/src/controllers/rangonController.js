const bd_rangon = require("../data/bd_rangon.json")

module.exports = class ScoreController {
  async produtos_cardapio(req, res){
    res.status(200).json({
      massage: 'Success!',
      data: bd_rangon.produtos
    })
  }
}