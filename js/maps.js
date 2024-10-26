function initGoogleMap() {
	var $googleMaps = $('#map, .page_map');
	if ($googleMaps.length ) {
		$googleMaps.each(function() {
			var $map = $(this);
			var lat;
			var lng;
			var map;

			//map styles. You can grab different styles on https://snazzymaps.com/
			var styles = [{"featureType": "water","elementType": "geometry","stylers": [{"color": "#e9e9e9"},{"lightness": 17}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]}];
			//markers
			var $markers = $map.find('.marker');
			//map settings
			var draggable = $map.data('draggable') ? $map.data('draggable') : false;
			var scrollwheel = $map.data('scrollwheel') ? $map.data('scrollwheel') : false;
			var gmaps_zoom = $map.data('gmaps_zoom') ? $map.data('gmaps_zoom') : 16;

			lat = $markers.first().find('.marker-lat').text();
			lng = $markers.first().find('.marker-lng').text();
			var center = new google.maps.LatLng(lat, lng);
			var settings = {
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				zoom: gmaps_zoom,
				draggable: draggable,
				scrollwheel: scrollwheel,
				center: center,
				styles: styles
			};
			map = new google.maps.Map($map[0], settings);
			
			var infoWindows = [];
			$($markers).each(function(index) {
				var $marker = $(this);
				var markerTitle = $marker.find('.marker-title').text();
				//building info widnow HTML code
				var markerDescription = '';
				markerDescription += markerTitle ? '<h6 class="makret-title">' + markerTitle + '</h6>' : '';
				markerDescription += $marker.find('.marker-description').html() ? '<div class="marker-description">' + $marker.find('.marker-description').html() + '</div>' : '';
				if(markerDescription) {
					markerDescription = '<div class="map_marker_description">' + markerDescription + '</div>';
				}
				var iconSrc = $marker.find('.marker-icon').attr('src');
				var lat = $marker.find('.marker-lat').text();
				var lng = $marker.find('.marker-lng').text();
				var center = new google.maps.LatLng(lat, lng);
				var marker = new google.maps.Marker({
					position: center,
					title: markerTitle,
					map: map,
					icon: iconSrc
				});
				var infowindow = new google.maps.InfoWindow({
					content: markerDescription
				});
				infoWindows.push(infowindow);
				google.maps.event.addListener(marker, 'click', function() {
					for (var i=0;i<infoWindows.length;i++) {
						infoWindows[i].close();
					}
					infowindow.open(map,marker);
				});
			});
		}); //each Google map
	}
}
window.gMapsCallback = function(){
    $(window).trigger('gMapsLoaded');
}
$(document).ready(function() {
	var $googleMaps = $('#map, .page_map');
	if ($googleMaps.length ) {
		var gmaps_key = $googleMaps.data('gmaps_key');
		function loadGoogleMaps(gmaps_key){
			var script_tag = document.createElement('script');
			script_tag.setAttribute("type","text/javascript");
			script_tag.setAttribute("src","//maps.googleapis.com/maps/api/js?callback=gMapsCallback&key="+gmaps_key);
			(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
		}
		$(window).bind('gMapsLoaded', initGoogleMap);
		loadGoogleMaps(gmaps_key);
	}
});