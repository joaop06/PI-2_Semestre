const express = require("express")
const server = express()
const router = express.Router()
const fs = require('fs')

server.use(express.json({extended: true}))

const readFile = () => {
    const content = fs.readFileSync('./src/data/bd_rangon/produtos.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./src/data/bd_rangon/produtos.json', updateFile, 'utf-8')
}

/* Produtos */
/*************************************/

router.get('/', (req, res) => {
    const content = readFile()
    res.json(content)
    console.log(content)
})








router.post('/admin/Itens', (req, res) => { 
    const produtos = readFile()
    const id = Math.random().toString(32).substr(2, 9)

    const { nome, descricao, preco, tipo } = req.body
    let tipoImagem = ""
    if(tipo == 'L'){
        tipoImagem = "https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/hamburguer2.jpg?raw=true"
    } else if(tipo == 'P'){
        tipoImagem = "https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/pizza2.jpg?raw=true"
    }

    const imagem = tipoImagem
    produtos.push({id, nome, descricao, preco, tipo, imagem })
    writeFile(produtos)
    res.send('Produto cadastrado com sucesso!')
})









router.put('/admin/Itens', (req, res) => {
    const content = readFile()
    res.send(content)
})

router.delete('/admin/Itens', (req, res) => {
    const content = readFile()
    res.send(content)
})
/*************************************/
/* Clientes */
/*************************************/

router.post('/cadastro', (req, res) => {

})


server.use(router)
server.listen(3000, () => {
    console.log("Servidor local ativo! Porta: 3000")
})
