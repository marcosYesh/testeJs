/**
 * 
 */
var HTMT_TEXT_PREFIX = "<iframe id='";
var HTMT_TEXT_CENTER = "' src='";
var HTMT_TEXT_SUFIX = "' ></iframe>";
var HtmlImport = function(id) {

	this.id = id;
	this.scripts = [];

	this.addItem = function(script, src) {
		var item = {
			"script" : script,
			"src" : src
		};
-		this.scripts.push(item);
	};

	this.load = function() {
		var lista = this.scripts;
		var corpo = "";
		$.each(lista, function(index, item) {
			corpo += HTMT_TEXT_PREFIX; 
			corpo += item.script;
			corpo += HTMT_TEXT_CENTER;
			corpo += item.src;
			corpo += HTMT_TEXT_SUFIX;
		});
		$("#" + this.id).html(corpo);
		$("#" + this.id).hide();
	};
};