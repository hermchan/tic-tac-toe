// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $(this).find(".box").click( function (event){
    var i = 0;
    for (i = 0; i < 9; i ++)
    if ($(this).text() === ""){
      $(this).text("X");
    } else if ($(this).text() === "") {
        $(this).text("O");
    } else if ($(this).text() === "") {
      ($(this).text() === "X");
    }

});
});
