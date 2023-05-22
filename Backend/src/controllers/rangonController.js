const connection = require("../data/data")

module.exports = class ScoreController {

    async productsAll(req, res) {

        connection.query("SELECT * FROM Produtos", function (err, rows) {
            if (!err) {
                res.status(200).json({
                    rows
                })
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
                res.status(400).json({
                    message: "E-mail já cadastrado!"
                })
            }
        })
    }

    async loginUser(req, res) {
        const { email, senha } = req.body
        connection.query(`SELECT * FROM Clientes WHERE email = '${email}' AND senha = '${senha}'`, function (err, rows) {
            if (!err) {

                if (rows.length > 0) {
                    res.status(200).json({
                        message: "Login realizado!",
                        data: rows
                    })
                } else {
                    res.status(400).json({
                        message: "Login e/ou senha inválidos!"
                    })
                }
            } else {
                console.log(err)
            }
        })
    }

    async finalizarPedido(req, res) {
        const { cliente, id_Produtos, total } = req.body

        const produtosJSON = JSON.stringify(id_Produtos)
        connection.query(`INSERT INTO Pedidos VALUES (null, ${cliente}, '${produtosJSON}', ${total}, 'Em Andamento')`, function (err) {
            if (!err) {
                res.status(200).json({
                    message: "Pedido Realizado!"
                })
            } else {
                res.status(400).json({
                    message: "Erro ao realizar pedido!"
                })
                console.log(err)
            }
        })
    }

    async pedidosAndamento(req, res) {
        const { cliente } = req.body
        console.log(cliente)
        connection.query(`SELECT * FROM Pedidos WHERE id_cliente = ${cliente} AND statuspedido = 'Em Andamento'`, function (err, rows) {

            if (!err) {
                res.status(200).json({
                    message: "Pedidos Em Andamento!",
                    data: rows
                })
                console.log(rows)
            } else {
                res.status(400).json({
                    message: "Erro ao buscar pedidos em andamento!"
                })
                console.log(err)
            }

        })
    }

    async procuraproduto(req, res) {
        const { id } = req.body
        console.log(id)
        connection.query(`SELECT * FROM Produtos WHERE id = ${id}`, function (err, rows) {
            if (!err) {
                res.status(200).json({
                    rows
                })
            } else {
                console.log(err)
            }
        })
    }

}
