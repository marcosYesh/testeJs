/**
 * 
 */
var Player = function(){
	
	this.filmes = [];
	this.controles = [];
	this.altura ="";
	this.largura ="";
	
	
	this.add = function(filme){
		this.filmes.push(filme);
	};
};