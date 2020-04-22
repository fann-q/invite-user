var n = 2
$('.next').click(function(e){
	$('.question').hide();
	$('.question:nth-child('+n+')').show();
  var questionLength = $('.question').length;
  if(n == questionLength){
  	$('.next').attr('disabled', 'disabled');
  }
  n++;
});