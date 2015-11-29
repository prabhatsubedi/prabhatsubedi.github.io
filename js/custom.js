$(function(){
	var year = new Date().getFullYear();
	var copyRight = '&copy; Copyright '+year+'. All Right Reserved.';
	document.getElementById("footer-text").innerHTML=copyRight;
});	
function highlightCurrentPage(id){
	$('.active').removeClass('active');
	$('#'+id).addClass('active');
}
