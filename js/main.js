$(document).ready(function(){

   // jQuery methods go here...

   //burger button
   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });

   //typed tagline
   $(".typing").typed({
     strings: ["We Promise Honest Guidance"],
     typeSpeed: 50,
     showCursor: false
   });

   //typed tagline for individual page intro section
   $(".typing-homebuyers").typed({
     strings: ["main text"],
     typeSpeed: 50,
     showCursor: false
   });

});

function formCollapse () {
  $('.search-homes-box').slideUp();
}

function formOpen () {
  $('.search-homes-box').slideDown();
}
