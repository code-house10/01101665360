// JavaScript Document
function quick_search(){
	'use strict';
	/* Quik search in header on click function */
	var quikSearch = jQuery("#quik-search-btn");
	var quikSearchRemove = jQuery("#quik-search-remove");
	
	quikSearch.on('click',function() {
		jQuery('.rdx-quik-search').animate({'width': '100%' });
		jQuery('.rdx-quik-search').delay(500).css({'left': '0'  });
    });
    
	quikSearchRemove.on('click',function() {
        jQuery('.rdx-quik-search').animate({'width': '0%' ,  'right': '0'  });
		jQuery('.rdx-quik-search').css({'left': 'auto'  });
    });	
	/* Quik search in header on click function End*/
}

function magnific_popup()
{
	'use strict';	
	/* magnificPopup function */
    jQuery('.mfp-gallery').magnificPopup({
		delegate: '.mfp-link',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				//return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				return item.el.attr('title');
			}
		}
    });
	/* magnificPopup function end */
	
	/* magnificPopup for paly video function */		
	jQuery('.video').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
					 '<div class="mfp-close"></div>'+
					 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					 '<div class="mfp-title">Some caption</div>'+
			  		 '</div>'
		},
		callbacks: {
			markupParse: function(template, values, item) {
				values.title = item.el.attr('title');
			}
		}
	});
	/* magnificPopup for paly video function end*/
	
}

function scroll_top(){
	'use strict';
	var scrollTop = jQuery("button.scroltop");
	/* page scroll top on click function */	
    scrollTop.on('click',function() {
		jQuery("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    })

	jQuery(window).bind("scroll", function() {
		var scroll = jQuery(window).scrollTop();
        if (scroll > 900) {
            jQuery("button.scroltop").fadeIn(1000);
        } else {
            jQuery("button.scroltop").fadeOut(1000);
        }
    });
	/* page scroll top on click function end*/
}

/* accordian open close icon change */	 	
function toggleChevron(e) {
	jQuery(e.target)
		 .prev('.panel-heading')
		 .find("i.indicator")
		 .toggleClass('glyphicon-minus glyphicon-plus');
}

function accordian_icon()
{
	/* accodin open close icon change */	 	
	jQuery('#accordion').on('hidden.bs.collapse', toggleChevron);
	jQuery('#accordion').on('shown.bs.collapse', toggleChevron);
	/* accodin open close icon change end */
}
/* accodin open close icon change end*/	 	

/* Input Placeholder  */
function placeholderSupport()
{
	/* input placeholder for ie9 & ie8 & ie7 */
    jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
	/* input placeholder for ie9 & ie8 & ie7 end*/
	
	/*fix for IE7 and IE8  */
	if (!jQuery.support.placeholder) {
		jQuery("[placeholder]").focus(function () {
			if (jQuery(this).val() == jQuery(this).attr("placeholder")) jQuery(this).val("");
		}).blur(function () {
			if (jQuery(this).val() == "") jQuery(this).val(jQuery(this).attr("placeholder"));
		}).blur();

		jQuery("[placeholder]").parents("form").submit(function () {
			jQuery(this).find('[placeholder]').each(function() {
				if (jQuery(this).val() == jQuery(this).attr("placeholder")) {
					 jQuery(this).val("");
				}
			});
		});
	}
	/*fix for IE7 and IE8 end */
}
/* Input Placeholder End */
	 
/* equal height box */	 
function equalheight(container) {
	
	var currentTallest = 0, 
		currentRowStart = 0, 
		rowDivs = new Array(), 
		$el, topPosition = 0;
		
	$(container).each(function() {
		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}
/* equal height box */

/* footer fixed bottom function custom */	
function footerAlign() {
	'use strict';
	jQuery('.site-footer').css('display', 'block');
	jQuery('.site-footer').css('height', 'auto');
	var footerHeight = jQuery('.site-footer').outerHeight();
	jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
	jQuery('.site-footer').css('height', footerHeight);
}
/* footer fixed bottom function custom end */

/* Vertically center Bootstrap 3 modals so they aren't always stuck at the top function custom */
function reposition() {
	'use strict';
	var modal = jQuery(this),
	dialog = modal.find('.modal-dialog');
	modal.css('display', 'block');
	
	/* Dividing by two centers the modal exactly, but dividing by three 
	 or four works better for larger screens.  */
	dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
}
/* Vertically center Bootstrap 3 modals so they aren't always stuck at the top function custom end*/




function file_input()
{
	'use strict';
	/* Input type file jQuery */	 	 
	jQuery(document).on('change', '.btn-file :file', function() {
		var input = jQuery(this);
		var	numFiles = input.get(0).files ? input.get(0).files.length : 1;
		var	label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});
	
	jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
		input = jQuery(this).parents('.input-group').find(':text');
		var log = numFiles > 10 ? numFiles + ' files selected' : label;
	
		if (input.length) {
			input.val(log);
		} else {
			if (log) alert(log);
		}
	});
	/* Input type file jQuery end*/
	
}

function header_fix()
{
	'use strict';
	/* Main navigation fixed on top  when scroll down function custom */		
	jQuery(window).bind('scroll', function () {
		var menu = jQuery('.sticky-header');
		if ($(window).scrollTop() > menu.offset().top) {
			menu.addClass('is-fixed');
		} else {
			menu.removeClass('is-fixed');
		}
	});
	/* Main navigation fixed on top  when scroll down function custom end*/
	
}
function masonryBox()
{
	'use strict';
	/* masonry by  = bootstrap-select.min.js */ 
	var self = $("#masonry");
	self.imagesLoaded(function () {
		self.masonry({
			gutterWidth: 15,
			isAnimated: true,
			itemSelector: ".card-container"
		});
	});

	jQuery(".filters").on('click','li',function(e) {
		e.preventDefault();
		var filter = $(this).attr("data-filter");
		self.masonryFilter({
			filter: function () {
				if (!filter) return true;
				return $(this).attr("data-filter") == filter;
			}
		});
	});
	/* masonry by  = bootstrap-select.min.js end */
}

function setDivHeight()
{	
	'use strict';
	var allHeights = [];
	jQuery('.dzseth div').each(function(e){
		allHeights.push(jQuery(this).height());
	})

	jQuery('.dzseth div').each(function(e){
		var maxHeight = Math.max.apply(Math,allHeights);
		jQuery(this).css('height',maxHeight);
	})
	
	allHeights = [];
	/* Removice */
	var screenWidth = $( window ).width();
	if(screenWidth < 991)
	{
		jQuery('.dzseth div').each(function(e){
			jQuery(this).css('height','');
		})
	}	
}	

/* For Home Page 8-9 */
function onePageLayout(){
	'use strict';
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 50});   
	// Add smooth scrolling on all links inside the navbar
	$("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 800, function(){
		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	}  // End if
  });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("main").style.marginLeft = "280px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
/* For Home Page 8-9 */

/* counterUp one function by = counterup-min.js */
function counter(){
	jQuery('.counter').counterUp({
		delay: 10,
		time: 3000
	});
}

function setHeight() {
	windowHeight = jQuery(window).innerHeight();
	jQuery('.content-admin-wraper , .aon-custo-map-iner , .full-screen-content').css('min-height', windowHeight);
};

/*** Add Switcher */
function addSwitcher()
{
	var dzSwitcher = '<div class=styleswitcher><div class=switcher-btn-bx><a class=switch-btn><span class="fa fa-gear fa-lg fa-spin"></span></a></div><div class=styleswitcher-inner><h6 class=switcher-title>Layout</h6><ul class=layout-view><li class="active wide-layout">Wide<li class=boxed>Boxed</ul><h6 class=switcher-title>Nav</h6><ul class=nav-view><li class="active nav-light">Light<li class=nav-dark>Dark</ul><h6 class=switcher-title>Header</h6><ul class=header-view><li class="active header-fixed">Fixed<li class=header-static>Static</ul><h6 class=switcher-title>Color Skin</h6><ul class=color-skins><li><a class="theme-skin skin-1"href="?theme=css/skin/skin-1"title="default Theme"></a><li><a class="theme-skin skin-2"href="?theme=css/skin/skin-2"title="pink Theme"></a><li><a class="theme-skin skin-3"href="?theme=css/skin/skin-3"title="sky Theme"></a><li><a class="theme-skin skin-4"href="?theme=css/skin/skin-4"title="green Theme"></a><li><a class="theme-skin skin-5"href="?theme=css/skin/skin-5"title="red Theme"></a><li><a class="theme-skin skin-6"href="?theme=css/skin/skin-6"title="orange Theme"></a><li><a class="theme-skin skin-7"href="?theme=css/skin/skin-7"title="purple Theme"></a><li><a class="theme-skin skin-8"href="?theme=css/skin/skin-8"title="blue Theme"></a></ul><h6 class=switcher-title>Background Image</h6><ul class=background-switcher><li><img alt=""rel=images/background/bg1.jpg src=images/switcher/switcher-bg/bg1.jpg><li><img alt=""rel=images/background/bg2.jpg src=images/switcher/switcher-bg/bg2.jpg><li><img alt=""rel=images/background/bg3.jpg src=images/switcher/switcher-bg/bg3.jpg><li><img alt=""rel=images/background/bg4.jpg src=images/switcher/switcher-bg/bg4.jpg></ul><h6 class=switcher-title>Background Pattern</h6><ul class=pattern-switcher><li><img alt=""rel=images/pattern/pt1.jpg src=images/switcher/switcher-patterns/bg1.jpg><li><img alt=""rel=images/pattern/pt2.jpg src=images/switcher/switcher-patterns/bg2.jpg><li><img alt=""rel=images/pattern/pt3.jpg src=images/switcher/switcher-patterns/bg3.jpg><li><img alt=""rel=images/pattern/pt4.jpg src=images/switcher/switcher-patterns/bg4.jpg><li><img alt=""rel=images/pattern/pt5.jpg src=images/switcher/switcher-patterns/bg5.jpg><li><img alt=""rel=images/pattern/pt6.jpg src=images/switcher/switcher-patterns/bg6.jpg><li><img alt=""rel=images/pattern/pt7.jpg src=images/switcher/switcher-patterns/bg7.jpg><li><img alt=""rel=images/pattern/pt8.jpg src=images/switcher/switcher-patterns/bg8.jpg><li><img alt=""rel=images/pattern/pt9.jpg src=images/switcher/switcher-patterns/bg9.jpg><li><img alt=""rel=images/pattern/pt10.jpg src=images/switcher/switcher-patterns/bg10.jpg><li><img alt=""rel=images/pattern/pt11.jpg src=images/switcher/switcher-patterns/bg11.jpg><li><img alt=""rel=images/pattern/pt12.jpg src=images/switcher/switcher-patterns/bg12.jpg></ul></div></div>';
	
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher);
	}
}
/*################	End OF Function List ###################################*/
	
/* Document.ready Start */	

jQuery(document).ready(function() {
    'use strict';
	
	onePageLayout();
	
	setDivHeight();
	
	quick_search();
	
	magnific_popup();
	
	header_fix();

	scroll_top();
	
	accordian_icon();
	
	file_input();	
	
	footerAlign();

	placeholderSupport();
	
	counter();
	
	setHeight();
	
	/*addSwitcher();*/
	
	jQuery('.tp-bgimg').after("<div class='overlay-row'></div>");
	
	/* Video responsive function */	
	jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	/* Video responsive function end*/  
	  
	/* gallery filter activation = jquery.mixitup.min.js */ 
	if (jQuery('#image-gallery-mix').length) {
		jQuery('.gallery-filter').find('li').each(function () {
			$(this).addClass('filter');
		});
		jQuery('#image-gallery-mix').mixItUp();
	};
	if(jQuery('.gallery-filter.masonary').length){
		jQuery('.gallery-filter.masonary').on('click','span', function(){
			var selector = $(this).parent().attr('data-filter');
			jQuery('.gallery-filter.masonary span').parent().removeClass('active');
			jQuery(this).parent().addClass('active');
			jQuery('#image-gallery-isotope').isotope({ filter: selector });
			return false;
		});
	}
	/* gallery filter activation = jquery.mixitup.min.js */

	
	/* Reposition when a modal is shown */
	jQuery('.modal').on('show.bs.modal', reposition);
	/* Reposition when the window is resized */
	jQuery(window).on('resize', function() {
		jQuery('.modal:visible').each(reposition);
	
		equalheight('.equal-wraper .equal-col');
		footerAlign();
	});
    /* Reposition when a modal is shown end*/
	
	
});
/* Document.ready END */



/* Window Load START */
jQuery(window).load(function () {
	'use strict'; 
	
	masonryBox();
	
	/* Bootstrap Select box function by  = bootstrap-select.min.js */ 
	jQuery('select').selectpicker();
	/* Bootstrap Select box function by  = bootstrap-select.min.js end*/
	
	
	/* TouchSpin box function by  = jquery.bootstrap-touchspin.js */ 
	jQuery("input[name='demo_vertical2']").TouchSpin({
      verticalbuttons: true,
      verticalupclass: 'glyphicon glyphicon-plus',
      verticaldownclass: 'glyphicon glyphicon-minus'
    });
	/* TouchSpin box function by  = jquery.bootstrap-touchspin.js end*/
	
	equalheight('.equal-wraper .equal-col');
	
	setTimeout(function(){
		jQuery('#loading-area').remove();
	}, 0);
	
});
/*  Window Load END */

	
jQuery(window).resize(function() {
		setHeight();
});

/* Loading */
	jQuery(window).load(function() {
		setTimeout(function(){
			jQuery('#loading-area').remove();
		}, 0);
	});
/* Loading End */

/*// WOW - animated content
	var wow = new WOW(
	{
	  boxClass:     'wow',      // animated element css class (default is wow)
	  animateClass: 'animated', // animation css class (default is animated)
	  offset:       100,          // distance to the element when triggering the animation (default is 0)
	  mobile:       false       // trigger animations on mobile devices (true is default)
	});
	wow.init();	*/


var isNoviBuilder = window.xMode;
function isScrolledIntoView(elem) {
    if (!isNoviBuilder) {
      return elem.offset().top + elem.outerHeight() >= jQuery(window).scrollTop() && elem.offset().top <= jQuery(window).scrollTop() + jQuery(window).height();
    }
    else {
      return true;
    }
}
  
function lazyInit(element, func) {
    var $win = jQuery(window);
    $win.on('load scroll', function () {
      if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
        func.call();
        element.addClass('lazy-loaded');
      }
    });
}

function isValidated(elements, captcha) {
    var results, errors = 0;

    if (elements.length) {
      for (j = 0; j < elements.length; j++) {

        var $input = $(elements[j]);
        if ((results = $input.regula('validate')).length) {
          for (k = 0; k < results.length; k++) {
            errors++;
            $input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
          }
        } else {
          $input.siblings(".form-validation").text("").parent().removeClass("has-error")
        }
      }

      if (captcha) {
        if (captcha.length) {
          return validateReCaptcha(captcha) && errors == 0
        }
      }

      return errors == 0;
    }
    return true;
}

var onloadCaptchaCallback;
jQuery(document).ready(function () {
	/**
   * validateReCaptcha
   * @description  validate google reCaptcha
   */
	function validateReCaptcha(captcha) {
		var $captchaToken = captcha.find('.g-recaptcha-response').val();

		if ($captchaToken == '') {
		  captcha
			.siblings('.form-validation')
			.html('Please, prove that you are not robot.')
			.addClass('active');
		  captcha
			.closest('.form-group')
			.addClass('has-error');

		  captcha.bind('propertychange', function () {
			var $this = $(this),
			  $captchaToken = $this.find('.g-recaptcha-response').val();

			if ($captchaToken != '') {
			  $this
				.closest('.form-group')
				.removeClass('has-error');
			  $this
				.siblings('.form-validation')
				.removeClass('active')
				.html('');
			  $this.unbind('propertychange');
			}
		  });

		  return false;
		}

		return true;
	  }

	  /**
	   * onloadCaptchaCallback
	   * @description  init google reCaptcha
	   */
	onloadCaptchaCallback = function () {
		for (i = 0; i < captcha_input.length; i++) {
		  var $capthcaItem = $(captcha_input[i]);

		  grecaptcha.render(
			$capthcaItem.attr('id'),
			{
			  sitekey: $capthcaItem.attr('data-sitekey'),
			  size: $capthcaItem.attr('data-size') ? $capthcaItem.attr('data-size') : 'normal',
			  theme: $capthcaItem.attr('data-theme') ? $capthcaItem.attr('data-theme') : 'light',
			  callback: function (e) {
				$('.recaptcha').trigger('propertychange');
			  }
			}
		  );
		  $capthcaItem.after("<span class='form-validation'></span>");
		}
	};

	var captcha_input = $(".recaptcha");
	/**
	* Google ReCaptcha
	* @description Enables Google ReCaptcha
	*/
	if (captcha_input.length) {
		$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
	}
	var rdGoogleMaps = $("#rd-google-map");
	if (rdGoogleMaps.length) {
		var i;

		$.getScript("//maps.google.com/maps/api/js?key=AIzaSyCo9EFOz0iRE6yyfwJ7j0AZ3P07x7e4Vgs&sensor=false&libraries=geometry,places&v=3.7", function () {
		  var head = document.getElementsByTagName('head')[0],
			  insertBefore = head.insertBefore;

		  head.insertBefore = function (newElement, referenceElement) {
			if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') != -1 || newElement.innerHTML.indexOf('gm-style') != -1) {
			  return;
			}
			insertBefore.call(head, newElement, referenceElement);
		  };

		  for (i = 0; i < rdGoogleMaps.length; i++) {

			var $googleMapItem = $(rdGoogleMaps[i]);

			lazyInit($googleMapItem, $.proxy(function () {
			  var $this = $(this),
				  styles = $this.attr("data-styles");

			  $this.googleMap({
				styles: styles ? JSON.parse(styles) : [],
				onInit: function (map) {
				  var inputAddress = $('#rd-google-map-address');

				  if (inputAddress.length) {
					var input = inputAddress;
					var geocoder = new google.maps.Geocoder();
					var marker = new google.maps.Marker(
						{
						  map: map,
						  icon: "/images/gmap_marker.png",
						}
					);
					var autocomplete = new google.maps.places.Autocomplete(inputAddress[0]);
					autocomplete.bindTo('bounds', map);
					inputAddress.attr('placeholder', '');
					inputAddress.on('change', function () {
					  $("#rd-google-map-address-submit").trigger('click');
					});
					inputAddress.on('keydown', function (e) {
					  if (e.keyCode == 13) {
						$("#rd-google-map-address-submit").trigger('click');
					  }
					});


					$("#rd-google-map-address-submit").on('click', function (e) {
					  e.preventDefault();
					  var address = input.val();
					  geocoder.geocode({'address': address}, function (results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
						  var latitude = results[0].geometry.location.lat();
						  var longitude = results[0].geometry.location.lng();

						  map.setCenter(new google.maps.LatLng(
							  parseFloat(latitude),
							  parseFloat(longitude)
						  ));
						  marker.setPosition(new google.maps.LatLng(
							  parseFloat(latitude),
							  parseFloat(longitude)
						  ))
						}
					  });
					});
				  }
				}
			  });
			}, $googleMapItem));
		  }
		});
	}
});
