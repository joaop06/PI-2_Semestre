const connection = require("../data/data")

module.exports = class ScoreController {

    async productsAll(req, res) {
        try {
            connection.query("SELECT * FROM Produtos", function (err, rows) {
                res.status(200).json({
                    rows
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    async registrationUser(req, res) {
        try {
            const { nome_completo, celular, email, senha, cep, cidade, estado, endereco, numero } = req.body
            connection.query(`INSERT INTO Clientes VALUES (null, '${nome_completo}', '${celular}', '${email}','${senha}','${cep}','${cidade}', '${estado}', '${endereco}', '${numero}')`, function (err) {
                res.status(200).json({
                    message: "Cadastro realizado!"
                })
            })

        } catch (err) {
            console.log(err)
        }
    }

    async loginUser(req, res) {
        try {
            const { email, senha } = req.body
            connection.query(`SELECT * FROM Clientes WHERE email = '${email}' AND senha = '${senha}'`, function (err, rows) {
                res.status(200).json({
                    message: "Login realizado!",
                    data: rows
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    async finalizarPedido(req, res) {
        try {
            const { id_cliente_fk, list_produtos, total } = req.body
            connection.query(`INSERT INTO Pedidos VALUES (null, ${id_cliente_fk}, '${list_produtos}', ${total}, 'Em Andamento')`, function (err) {
                res.status(200).json({
                    message: "Pedido Realizado!"
                })

            })
        } catch (err) {
            console.log(err)
        }
    }

    async pedidosEmAndamento(req, res) {
        try {
            const { cliente } = req.body
            connection.query(`SELECT * FROM Pedidos WHERE id_cliente_fk = ${cliente} AND status_pedido = 'Em Andamento'`, function (err, rows) {
                res.status(200).json({
                    message: "Pedidos Em Andamento!",
                    data: rows
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    async pedidosFinalizados(req, res) {
        try {
            const { cliente } = req.body
            connection.query(`SELECT * FROM Pedidos WHERE id_cliente_fk = ${cliente} AND status_pedido = 'Finalizado'`, function (err, rows) {
                res.status(200).json({
                    message: "Pedidos Finalizados!",
                    data: rows
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    async findUserData(req, res) {
        try {
            const { id } = req.body
            connection.query(`SELECT * FROM Clientes WHERE id = ${id}`, function (err, rows) {
                res.status(200).json({
                    message: "Dados do Cliente!",
                    data: rows
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

}
