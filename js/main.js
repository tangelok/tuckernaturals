// Make it rain!

/* ----------------------------------------
Main
------------------------------------------- */

$('.header-contact-button').on('click', function () {
	 window.location.href="contact.html"
});

$('.read-more').on('click', function () {
	 window.location.href="grow.html"
});
$('.latest-news').on('click', function () {
	 window.location.href="news.html"
});
$('.more-products').on('click', function () {
	 window.location.href="products.html"
});
$('.tech-read-more').on('click', function () {
	 window.location.href="tech.html"
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
