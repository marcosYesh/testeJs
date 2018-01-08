var listScrpts;
var current;
var durationtotal;
var player;
// var saudacao;
$(function() {
	/*
	 * listScrpts = new HtmlImport("imports"); listScrpts.addItem("question",
	 * "question.html"); listScrpts.load();
	 * 
	 * $('#video').click(function(e) { this.pause(); alert(e.pageX + ' , ' +
	 * e.pageY); alert(current); this.play(); }).trigger('change');
	 

	$('#btnTeste').click(function(e) {
		alert(durationtotal);
	}).trigger('change');
*/
	$('#btnTeste').hide();

	player = new Video("video");
	player.addSource(new SourceVideo("Scorm_01_Tecnologia-4k.mp4","passaVideo"));
	player.addSource(new SourceVideo("Scorm_02_Beneficios-4k.mp4"));
	player.addEvento(new ActionMove("5.5626666", "exibeBotao"));
	player.addEvento(new ActionMove("10.5626666", "escondeBotao"));
	player.addListener(new ListenerVideo("btnTeste"));
	player.addActionListener("btnTeste", "teste");
	player.intiVideo();
	

});


function teste(){
	alert("teste");
}

function acopanhaVideo(currentTime, duration) {
	player.onTrackedVideoFrame(currentTime, duration);
}
function encerraVideo() {
	player.finalizaVideo();
}
function passaVideo() {
	player.intiVideo(1);
}
function exibeBotao() {
	$('#btnTeste').show();
}
function escondeBotao() {
	$('#btnTeste').hide();
}

//