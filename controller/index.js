const { pessoas } = require('../database/database')

let pessoa = pessoas.find((elemento) => elemento.id === 1)



if(pessoa){
	pessoa.nome = "Fulano 2"
	console.log(pessoa.nome)
}else{
	console.log("pessoa nao encontrada")
}

