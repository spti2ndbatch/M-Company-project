/*=========================================

Template Name: X-ZONE - Corporate HTML5 Responsive Template 
Author: MD Abunaser Khan
Version: 1.0
Design and Developed by: themepark1

NOTE: This is the custom jQuery file for the template

=========================================*/


(function ($) {
	"use strict";

    jQuery(document).ready(function($){
	
	/*-------------------------------------------------------------------------*
	nav item click js
	*-------------------------------------------------------------------------*/
	$('.navbar .dropdown').hover(function() {
		$(this).addClass('extra-nav-class').find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
	}, function() {
		var na = $(this)
		na.find('.dropdown-menu').first().stop(true, true).delay(100).slideUp('fast', function(){ na.removeClass('extra-nav-class') })
	});

	$('.dropdown-submenu').hover(function() {
		$(this).addClass('extra-nav-class').find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
	}, function() {
		var na = $(this)
		na.find('.dropdown-menu').first().stop(true, true).delay(100).slideUp('fast', function(){ na.removeClass('extra-nav-class') })
	});
	
	 /*===================================
            silder carousel
     ====================================*/
    $("#all-slide").owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		autoplay: true,			
		loop: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		mouseDrag: false,
		touchDrag: false,
	});
	
	$("#all-slide").on("translate.owl.carousel", function(){	
		$(".slider-text h1").removeClass("animated fadeInUp").css("opacity", "0");
		$(".slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
		$(".slider-text ul").removeClass("animated fadeInDown").css("opacity", "0");
	});
	
	$("#all-slide").on("translated.owl.carousel", function(){
		$(".slider-text h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
		$(".slider-text ul").addClass("animated fadeInDown").css("opacity", "1");
	});	


	/*---------------------------------------------------
		Portfolio
	----------------------------------------------------*/
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		columnWidth: 1
		}
	});
	$('.portfolio-tab li').on( 'click', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	$('.portfolio-tab li').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});


	/*---------------------------------------------------
		Counter
	----------------------------------------------------*/
	$('.count').counterUp({
		delay: 10, // the delay time in ms
		time: 1000 // the speed time in ms
	});
	
	
	/*---------------------------------------------------
		testimonial
	----------------------------------------------------*/
    $('#testimonial').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        margin: 15,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        autoplaySpeed:1000,
        responsive: {
            0: {
                items:1,
            },
            600:{
                items:1,
            },
            1000: {
                items:2,
            },
        }
    });
	
	/*---------------------------------------------------
		Blog
	----------------------------------------------------*/
     $('#client-logo').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        margin: 50,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        autoplaySpeed:1000,
        responsive: {
            0: {
                margin: 10,
                items: 1
            },
            480: {
                margin: 10,
                items: 3
            },
            600:{
                margin: 20,
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
	
	
	
	/*---------------------------------------------------
		Wow Animation
	----------------------------------------------------*/
    new WOW().init();

	
	/*---------------------------------------------------
		Parallax
	----------------------------------------------------*/
	$(window).stellar();
	
	/*---------------------------------------------------
		Magnific PopUp
	----------------------------------------------------*/
	$('.popup-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	
	
	/*---------------------------------------------------
		scrollUp
	----------------------------------------------------*/
	$(window).load(function() { 
		$('.loader-inner').fadeOut();
		$('.loader').delay(350).fadeOut('slow'); 
	});
	/*---------------------------------------------------
		scrollUp
	----------------------------------------------------*/
	
	$.scrollUp({
		scrollText: '<i class="fa fa-long-arrow-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});	
	
	});
	 
}(jQuery));	
