$(document).ready(function(){
    /* help 
    */


   $('nav').hide(); 

   // setup our click function
   $('menu-button').click(function(){
       $('nav') .slideToggle();
   });
});