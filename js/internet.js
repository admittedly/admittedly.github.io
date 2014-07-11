$(function(){
	$.get("/touch?" + new Date().getTime())
	.done(function(resp){
		//If more than 10 minutes old
		if(!parseInt(resp)){
			$(".status").html("I have no idea how the internet is.")
		} else if(parseInt(resp) < (new Date().getTime()/1000 - 60*5)){
			$(".status").html("The internet is probably <span class='bad'>down</span>.");
		}else{
			$(".status").html("The internet is probably <span class='good'>up</span>.");
		}
	})
	.fail(function(resp){
		$(".status").html("I have no idea how the internet is.")
	});
});
