/**
 * 
 */
var Mensagem = function(texto){
	
	
	
	this. show = function(funcao) {
		texto = this.texto;
		eval(funcao + "(texto)");		
	};
	
};