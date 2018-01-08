/**
 * 
 */
var Pessoa = function(id,nome,idade){
	this.id = id;
	this.nome = nome;
	this.idade = idade;
	
	this.show = function(){
		alert(this.id);
		alert(this.nome);
		alert(this.idade);
	};
};