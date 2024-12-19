const { pessoas } = require('../database/database');

function listar(){
	console.log(pessoas)
}
function cadastrar(id,nome,telefone,email){
	const novoUsuario = {id,nome,telefone,email}
	pessoas.push(novoUsuario)
}
function deletarTodos(){
	pessoas = []
}
function editar(id,novoNome,novoTelefone,novoEmail){
	const pessoa = pessoas.find(elemento => elemento.id === id)
	if(pessoa){
		pessoa.nome = novoNome;
		pessoa.telefone = novoTelefone;
		pessoa.email = novoEmail;
	}
}

cadastrar(1,"Felipe","84992043616","felipecoutinhonatal@gmail.com")
cadastrar(2,"Clara","84992043616","mariaclarabmanzano@gmail.com")
//deletarId(3)
editar(1,"welson","84988470167","welsonnatal@gmail.com")
listar(pessoas)