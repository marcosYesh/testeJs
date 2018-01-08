/**
 * 
 */
var Service = function() {
	this.method = "";
	this.url= "";
	this.dados = "";

	this.setMetodo = function(method) {
		this.method = method;
	};

	this.setUrl = function(url) {
		this.url = url;
	};
	
	this.setDados = function(dados) {
		this.dados = dados;
	};

	this.enviar = function(dados, funcao) {
		$.ajax({
			method : this.method,
			url : this.url,
			xhrFields : {
				withCredentials : true
			},
			data : this.dados
		}).success(function(retorno) {
			eval(funcao + "(retorno)");
		}).error(function(retorno) {
			eval(funcao + "(retorno)");
		});
	};

};