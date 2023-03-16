$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

$('.next').on('click', function(){
	var currentImg = $('.active');
	var nextImg = currentImg.next();

	if(nextImg.length){
		currentImg.removeClass('active');
		nextImg.addClass('active');
	}else{
		currentImg.removeClass('active');
		currentImg.siblings().first().addClass('active');
	}

	
});


$('.prev').on('click', function(){
	var currentImg = $('.active');
	var prevImg = currentImg.prev();

	if(prevImg.length){
		currentImg.removeClass('active');
		prevImg.addClass('active');
	}else{
		currentImg.removeClass('active');
		currentImg.siblings().last().addClass('active');
	}
});

});


