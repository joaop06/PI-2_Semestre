const connection = require("../data/data")

module.exports = class ScoreController {

    async productsAll(req, res) {

        connection.query("SELECT * FROM Produtos", function (err, rows) {
            if (!err) {
                res.status(200).json({
                    rows,

                })
                console.log(rows)
            } else {
                console.log(err)
            }
        })

    }

    async registrationUser(req, res) {
        const { nome_completo, celular, email, senha, cep, cidade, estado, endereco, numero } = req.body
        connection.query(`INSERT INTO Clientes VALUES (null, '${nome_completo}', '${celular}', '${email}','${senha}','${cep}','${cidade}', '${estado}', '${endereco}', '${numero}')`, function (err) {
            if (!err) {
                res.status(200).json({
                    message: "Cadastro realizado!"
                })
            } else {
                if (err === 1366) {
                    res.status(400).json({
                        message: "E-mail já cadastrado!"
                    })

                }
                console.log(err)
            }
        })
    }

}