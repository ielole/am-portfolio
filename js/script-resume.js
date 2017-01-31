$(document).ready(function(){
  $('.resume').hide();
  $('.view-resume').click(function(){
    $('.resume').toggle();
    $('.download-resume').toggle();
    $('.view-resume').text(function(i, text){
      return text === "View Resume" ? "Hide Resume" : "View Resume";
    });
  });
 });
