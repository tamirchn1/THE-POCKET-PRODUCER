
//detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
  });
}
//detecting Keyboard Press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key)
});
function makeSound(key) {
switch (key){
 
  default:
    console.log(buttonInnerHTML);
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);
}
