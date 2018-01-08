/**
 * 
 */

$(function() {
	var userFeed = new Instafeed(
			{
				get : 'user',
				userId : '2154730724',
				clientId : '507ace92725a41388de466671a6a0a6e',
				accessToken : '2154730724.507ace9.bc96c000edbb4651b764f40f9e3c5bcd',
				resolution : 'standard_resolution',
				template : '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /><span>{{likes}}{{comments}}</span></a>',
				sortBy : 'most-recent',
				limit : 32,
				links : false
			});
	userFeed.run();
});
