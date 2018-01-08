/**
 * 
 */
var token = "";

var InstagramService = function() {
	Service.apply(this, [ Service ]);
	this.token = "";
	this.clientID = "";
	this.clientSecret = "";
	this.userID = "";
	this.redirectUri = "";
	this.resposeCode = "";
	this.scope = "";

	this.getToken = function() {
		this.setMetodo("Post");
		this.setUrl("https://api.instagram.com/oauth/access_token");
		this.setDados({
			"client_id" : this.clientID,
			"client_secret" : this.clientSecret,
			"redirect_uri" : this.redirectUri,
			"response_type" : this.resposeCode,
			"scope" : this.scope
		});
	};

};