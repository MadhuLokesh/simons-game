var gamePattern = [];
var level=0;
var buttonColours = ["red", "blue", "green", "yellow"];
var userPattern=[];


var started=false;



$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level "+level);

   nextSequence()

    started = true;
  }
});
$(".btn").click(function() {


  userPattern.push($(this).attr("id"));

  playSound($(this).attr("id"));

  animations($(this).attr("id"));
 checkAnswer(userPattern.length-1);


});
function checkAnswer(userClickedIndex)
{

  if (gamePattern[userClickedIndex] === userPattern[userClickedIndex]) {
       if (userPattern.length === gamePattern.length){
         level++;
          $("#level-title").text("level "+level);
         setTimeout(function () {
           nextSequence();
         }, 1000);
       }
     }
     else {
       playSound("wrong");
       $("body").addClass("game-over");
       $("#level-title").text("Game Over, Press Any Key to Restart");

       setTimeout(function () {
         $("body").removeClass("game-over");
       }, 200);

       startOver();
     }





}




function nextSequence() {
  userPattern=[];
  var r = Math.floor(Math.random() * 4);
  var chosenolor = buttonColours[r];
  gamePattern.push(chosenolor);
   animations(chosenolor);
   playSound(chosenolor);




}
function animations(chosenolor){

    $("#"+ chosenolor).fadeOut(100).fadeIn(100);
}
function playSound(chosenolor){
  var audio = new Audio("sounds/"+chosenolor+".mp3");
    audio.play();
}
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
