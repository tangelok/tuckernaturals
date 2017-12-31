// Make it rain!

/* ----------------------------------------
Main
------------------------------------------- */

$('.contact-button').on('click', function () {
	 window.location.href="contact.html"
});

$('.read-more').on('click', function () {
	 window.location.href="grow.html"
});



$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=70) {
	 $('nav').addClass('nav');
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=70) {
	 $('nav li a').addClass('nav-text');
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled<=70) {
	 $('nav').removeClass('nav');
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled<=70) {
	 $('nav li a').removeClass('nav-text');
 }
});
