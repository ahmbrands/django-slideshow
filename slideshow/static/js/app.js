$(document).ready(function() {

	function initiate_geolocation() {  
		navigator.geolocation.getCurrentPosition(handle_geolocation_query,handle_errors);  
	}

	function handle_geolocation_query(position){  
		alert('Lat: ' + position.coords.latitude + ' ' +  'Lon: ' + position.coords.longitude);  
	}

	function handle_errors(error)  
	{  
		switch(error.code)  
		{  // these all need to be converted to modals
			case error.PERMISSION_DENIED: alert("user did not share geolocation data");  
			break;  
			case error.POSITION_UNAVAILABLE: alert("could not detect current position");  
			break;  
			case error.TIMEOUT: alert("retrieving position timed out");  
			break;  
			default: alert("unknown error");  
			break;  
		}  
	}

	// If video is used, make sure to show full frame
	$("#content").fitVids();

	$('#content').append(ich.feedback());

	$('#send-feedback span').click(function() {
		$('#send-feedback').toggle();
		$('#feedback').toggle();
		$('#send-fb-button').click(function() {
			$('#feedback').toggle();
			$('#feedback-sent').toggle();
			$('#feedback-sent').delay(3000).toggle();
			$('#send-feedback').delay(3000).toggle();
			return false;
		});
		return false;
	});

	$('#add-fly').click(function() {
		$('#journal-entry-form').hide();
		$('#fly-picker').show();
		return false;
	});

	$('#add-photo').click(function() {
		$('#journal-entry-form').hide();
		$('#photo-picker').show();
		return false;
	});

	$('#location-bttn').click(function() {
		initiate_geolocation();
		return false;
	});

	$('.panel-close').click(function() {
		$(this).parent().hide();
		$('#fly-search-results').hide(); //development only
		$('#journal-entry-form').show();
		return false;
	});

	$('#fly-search-results .add').click(function() {
		var	addFly = '<li class="small-photo">' + $(this).parent().html() + '</li>';
		$('#journal-entry-flies').append(addFly);
		$(this).parent().fadeOut();
	});

	$('#photo-picker .add').click(function() {
		var	addFly = '<li class="small-photo">' + $(this).parent().html() + '</li>';
		$('#journal-entry-photos').append(addFly);
		$(this).parent().fadeOut();
	});

	$('#settings-toggle').click(function() {
		//$('#platter nav').fadeIn();
		$('#platter').animate({left:'0'}, 'fast');
		return false;
	});

	$('#platter .close').click(function() {
		//$('#platter nav').fadeOut();
		$('#platter').animate({left:'-100%'}, 'fast');
		return false;
	});

	$('.weather-list span').click(function() {
		$('.weather-list span').removeClass('active').removeClass('not-active');
		$(this).addClass('active');
		$('.weather-list span').not('.active').addClass('not-active');
		return false;
	});

	$('.display-list li span').click(function() {
		//$('.photo-list span').siblings('figure').removeClass('active').removeClass('not-active');
		$(this).siblings('figure').addClass('active');
		$('.display-list span').siblings('figure').not('.active').addClass('not-active');
		return false;
	});

	$('#fly-search-submit').click(function() {
		$('#fly-search-results').toggle();
		return false;
	});

	$('.load-more').click(function() {
		var	addImages = $(this).parent().siblings('ul').html();
		$('.item-list').append(addImages);
	});

});