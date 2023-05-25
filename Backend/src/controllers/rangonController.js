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
                if (!err) {
                    if (rows.length == 1) {
                        res.status(200).json({
                            message: "Login realizado!",
                            data: rows
                        })
                    } else {
                        res.status(400).send("Login e/ou senha inválidos!")
                    }
                }

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


    /* Pedidos */
    async pedidosEmAndamento(req, res) {
        try {
            const { cliente } = req.body
            connection.query(`SELECT * FROM Pedidos WHERE id_cliente_fk = ${cliente} AND status_pedido = 'Em Andamento' ORDER BY num_pedido DESC`, function (err, rows) {
                res.status(200).json({
                    message: "Pedidos Em Andamento!",
                    data: rows
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    async pedidosFinalizadosCancelados(req, res) {
        try {
            const { cliente } = req.body
            connection.query(`SELECT * FROM Pedidos WHERE id_cliente_fk = ${cliente} AND (status_pedido = 'Finalizado' OR status_pedido = 'Cancelado') ORDER BY num_pedido DESC`, function (err, rows) {
                res.status(200).json({
                    message: "Pedidos Finalizados!",
                    data: rows
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    async cancelarPedido(req, res) {
        try {
            const { num_pedido } = req.body
            connection.query(`UPDATE Pedidos SET status_pedido = 'Cancelado' WHERE num_pedido = ${num_pedido}`, function (err) {
                if (!err) {
                    res.status(200).send("Pedido cancelado com sucesso!")
                }
            })
        } catch (err) {
            console.log(err)
        }
    }


    /* Perfil */
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



    /* Admin */
    async findItensAdmin(req, res) {
        try {
            connection.query('SELECT * FROM Produtos', function (err, rows) {
                res.status(200).json({
                    data: rows
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

}
