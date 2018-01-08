var AbaTab = {
	Class : function(id) {
		this.id = id;
		this.elementos = new Array();
		this.elementoDefult = "";
		this.elementoAtivo = "";

		this.add = function(elemento, defult) {
			this.elementos.push(elemento);
			if (defult) {
				this.elementoDefult = elemento;
			}
			var aba = this;
			$("#menu" + (this.elementos.length - 1)).click(function() {
				aba.setActive(elemento);
			}).trigger('change');

		};

		this.load = function() {
			if (this.elementoAtivo == "" && this.elementoDefult != "") {
				this.elementoAtivo = this.elementoDefult;
			}
			var ativo = this.elementoAtivo;
			var i = 0;
			
			$.each(this.elementos, function(index, elemento) {
				if (elemento == ativo) {
					$("#menu" + i).addClass('active');
					$("#" + elemento).show();
				} else {
					$("#menu" + i).removeClass('active');
					;
					$("#" + elemento).hide();
				}
				i++;
			});
		};

		this.setActive = function(elemento) {
			this.elementoAtivo = elemento;
			this.load();
		};
	}
};