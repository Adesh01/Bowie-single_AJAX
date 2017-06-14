/*-------------------------------------
| Document Ready
-------------------------------------*/
$(document).ready(function() {
/*-------------------------------------
| Gallery Image Hovers
-------------------------------------*/
function manage_galleries() {
	$('#gallery img')
		.animate({'opacity':'.5'}, 1000)
		.hover(
		function(){
			$(this).stop().animate({'opacity':'1'}, 500);
		},
		function() {
			$(this).stop().animate({'opacity':'.5'}, 500);
		}
	);
}

manage_galleries();


/*-------------------------------------
| AJAX Kill Links
-------------------------------------*/
function kill_links(event) {
	event.preventDefault();
}
$('#sect2 .folio a').click(kill_links);

/*-------------------------------------
| AJAX Load Web
-------------------------------------*/
function load_music() {

	$('.target').load('ajax-music.html #gallery');
}
$('#sect2 .folio a.music').click(load_music);

/*** press ***/
function load_press() {

	$('.target').load('ajax-press.html #gallery');
}
$('#sect2 .folio a.press').click(load_press);

/*-------------------------------------
| AJAX Load Sketches
-------------------------------------*/
function load_poster() {
	console.log('hello');
	
	$('.target').load('ajax-posters.html #gallery', manage_galleries);
}
$('#sect2 .folio a.posters').click(load_poster);

$('#sect2 .folio a:first').trigger('click'); //set a default, pretends to have clicked on first link

/*-------------------------------------
| AJAX After Load Assign Behaviors
-------------------------------------*/
function swap_image () {
		//declare variable
		//var newSource = $('#swap .gallery img:first').attr('src');
		var newSource = $(this).attr('data-large');
		//console.log(newSource);
		$('.large').attr('src', newSource);
	}
	//event listener
	$('#swap .small-img img').mouseover(swap_image);



/*-------------------------------------
| AJAX Default Gallery
-------------------------------------*/
function slide_slide () {
			$('#sliding img:eq(1)').delay(2000).animate({'left':'0px'}, 2000);
			$('#sliding img:eq(0)').delay(2000).animate({'left':'-1050px'}, 2000, slide_shuffle);
		}
		function slide_shuffle () {
			$('#sliding img:eq(0)').css({'left':'1050px'}).appendTo('#sliding');
			slide_slide(); //keep it going
		}
		slide_slide(); //start


/*-------------------------------------
	| LIGHTBOX MESSAGES
	-------------------------------------*/
	function light_on() 
	{

		// var theText = $(this).find('img').attr('data-text');
		var theText = $(this).find('.desc').html();
		$('#lb .light p').html(theText);

		$('#lb').show();
	}

	function light_off() 
	{
		$('#lb').hide();
	}

	/*-------------------------------------
	| Event Listeners
	-------------------------------------*/
	$('#messages .set').click(light_on);
	$('#lb .light .close').click(light_off);
	$('#lb').click(light_off);



	/*-------------------------------------
	| Stop Propagation
	-------------------------------------*/
	$('#lb .light div, #lb .light .text').click(function(event) {
		// event.preventDefault();
		event.stopPropagation();
	});

/*-------------------------------------
| Pinned fixed navigation
-------------------------------------*/
function pinned_nav()  {
	var howFar = $(window).scrollTop();
	console.log(howFar);

	if (howFar >= 220) {
		$('body').addClass('pinned');
	} else {
		$('body').removeClass('pinned');
	}
}
$(window).scroll(pinned_nav);




}); //ends document doc ready


