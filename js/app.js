// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

var turnCount = 0;

  $(this).find(".box").click( function (event){
    if (turnCount % 2 === 0){
       $(this).text("X");
    } else {
       $(this).text("O");
    }
   turnCount ++;
  });
});
