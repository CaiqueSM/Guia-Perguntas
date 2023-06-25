const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/:nome/:lang', (req, res) => {
    //res.send('Bem vindo ao meu site!');
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "biscoito", preco: 3.14},
        {nome: "refrigerante", preco: 5.0},
        {nome: "leite", preco: 1.15},
        {nome: "Carne", preco: 32.90},
        {nome: "energético", preco: 9.15},
    ];

    res.render('index', {
        nome,
        lang,
        produtos,
        empresa: 'Guia perguntas',
        inscritos: 8,
        msg: exibirMsg
    });
});

app.listen(8080, () =>{
    console.log('App executando!');
});