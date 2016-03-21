// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var turnCount = 0;
  var X = "X";
  var O = "O";

  $(".box").on("click", function (event){
    if (turnCount%2===0){
      $(this).text(X);
      $('#message').html("Current Player: 0");
    } else {
       $(this).text(O);
       $('#message').html("Current Player: X");
    }
   turnCount ++;
  });

// function to getWinner and send an alert to winner
  $(".box").on("click", function getWinner(){
    if ($('#box1').text()===X && $('#box2').text()===X && $('#box3').text()===X){
      alert("Player X wins!");
    } else if ($('#box4').text()===X && $('#box5').text()===X && $('#box6').text()===X){
      alert("Player X wins!");
    } else if ($('#box7').text()===X && $('#box8').text()===X && $('#box9').text()===X){
      alert("Player X wins!");
    } else if ($('#box1').text()===X && $('#box4').text()===X && $('#box7').text()===X){
      alert("Player X wins!");
    } else if ($('#box2').text()===X && $('#box5').text()===X && $('#box8').text()===X){
      alert("Player X wins!");
    } else if ($('#box3').text()===X && $('#box6').text()===X && $('#box9').text()===X){
      alert("Player X wins!");
    } else if ($('#box1').text()===X && $('#box5').text()===X && $('#box9').text()===X){
      alert("Player X wins!");
    } else if ($('#box3').text()===X && $('#box5').text()===X && $('#box7').text()===X){
      alert("Player X wins!");
    } else if ($('#box1').text()===O && $('#box2').text()===O && $('#box3').text()===O){
      alert("Player O wins!");
    } else if ($('#box4').text()===O && $('#box5').text()===O && $('#box6').text()===O){
      alert("Player O wins!");
    } else if ($('#box7').text()===O && $('#box8').text()===O && $('#box9').text()===O){
      alert("Player O wins!");
    } else if ($('#box1').text()===O && $('#box4').text()===O && $('#box7').text()===O){
      alert("Player O wins!");
    } else if ($('#box2').text()===O && $('#box5').text()===O && $('#box8').text()===O){
      alert("Player O wins!");
    } else if ($('#box3').text()===O && $('#box6').text()===O && $('#box9').text()===O){
      alert("Player O wins!");
    } else if ($('#box1').text()===O && $('#box5').text()===O && $('#box9').text()===O){
      alert("Player O wins!");
    } else if ($('#box3').text()===O && $('#box5').text()===O && $('#box7').text()===O){
      alert("Player O wins!");
    }
  });

  function displayMessage(message){
      $('#message').html(message);
    }

// Button that will reset entire board
  $('.btn').on("click", function (event){
    $('.box').text("");
  });
});
