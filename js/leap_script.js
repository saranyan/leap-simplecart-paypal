
function vectorToString(vector, digits) {
  if (typeof digits === "undefined") {
    digits = 1;
  }

  return "(" + vector[0].toFixed(digits) + ", "
             + vector[1].toFixed(digits) + ", "
             + vector[2].toFixed(digits) + ")";
}

function swipeDirection(vector){
  if(vector[0] > 0){
    return 1;
  }
  else {
    return -1;
  }
  return -1;
}

// Setup Leap loop with frame callback function
var controllerOptions = {enableGestures: true};
var foo = false;
var circle = 0;

Leap.loop(controllerOptions, function(frame) {

if(frame.hands.length > 0){
  if(frame.hands[0].pinchStrength > 0.999){
      console.log("hand pinch detected: " + frame.hands[0].pinchStrength);
      if(localStorage.foo == "1"){
        localStorage.foo = 0;
        console.log('trigger');
        jQuery('#checkout_btn')[0].click();
      }
    }
}
// Body of callback function
var prevGestureID = 0;
if (frame.gestures.length > 0) {
  console.log(frame.id + " " + frame.gestures.length)
  //for (var i = 0; i < 1; i++) {
    var gesture = frame.gestures[0];
    switch (gesture.type) {

      case "circle":
          console.log("circle");
        break;
      case "swipe":
          console.log("swipe " + (swipeDirection(gesture.direction) == 1?"right":"left"))
          if(swipeDirection(gesture.direction) == 1){
            //localStorage.set("inPlay",1);
            //right swipe
            if(localStorage.foo == "1"){
              localStorage.foo = 0;
              var selected_block = $('#catalog').find('.caption.selected').first();
              //console.log('step1')
              selected_block.toggleClass('selected');
              //console.log('step2')
              selected_block.closest('.cat').next().find('.caption').toggleClass('selected');
            }

            //console.log('step3');
          }
          else {
            if(localStorage.foo == "1"){
              localStorage.foo = 0;
              var selected_block = $('#catalog').find('.caption.selected').first();
              //console.log('step1')
              selected_block.toggleClass('selected');
              //console.log('step2')
              selected_block.closest('.cat').prev().find('.caption').toggleClass('selected');
            }
          }

        break;
      case "screenTap":
          console.log("screen tap")
          /*if(localStorage.foo == "1"){
            localStorage.foo = 0;
            console.log('trigger');
            jQuery('#checkout_btn')[0].click();
          }*/

      case "keyTap":
        console.log("key tap")
        if(localStorage.foo == "1"){
          localStorage.foo = 0;
          var selected_block = $('#catalog').find('.caption.selected').first();
          selected_block.closest('.cat').find('a').last().click();
        }

        break;
      default:
        break;
    }
  //}
}
})

function setLocalStorage(){
  localStorage.foo = 1;
}

$(function(){
  setInterval(function(){ localStorage.foo = 1; localStorage.circle = 0; }, 3000);
})


function checkLibrary() {
  if (typeof Leap === "undefined") {
    document.getElementById("main").innerHTML = "The Leap JavaScript client library (leap.js file) was not found. Please download the library from the GitHub project at <a href='https://github.com/leapmotion/leapjs'>https://github.com/leapmotion/leapjs</a>."
    alert("The Leap JavaScript client library (leap.js file) was not found. Please download the latest version from the GitHub project at https://github.com/leapmotion/leapjs");
  }
}
