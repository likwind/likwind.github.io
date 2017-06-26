$(document).ready(function(){
	$("#showNav").hide()
	$("#menu").toggle(function(){
	$("#showNav").show()
	},function(){
	$("#showNav").hide()
	}) 
});