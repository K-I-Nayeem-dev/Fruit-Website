// ===== Flash Deal Timer Down =====

var countDownDate = new Date("Jan 30, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();


  

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  document.getElementById("demo1").innerHTML = days;
  document.getElementById("demo2").innerHTML = hours;
  document.getElementById("demo3").innerHTML = minutes;
  document.getElementById("demo4").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// ===== Flash Deal Timer Down =====


// ===== slick slider  =====

$('.testi_main').slick({
  speed:1000,
  nextArrow:'.next',
  prevArrow:'.prev',
});

// ===== slick slider =====


// ===== flash Countdown timer =====

var countDownDate = new Date("mar 12, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("flash1").innerHTML = days;
  document.getElementById("flash2").innerHTML = hours;
  document.getElementById("flash3").innerHTML = minutes;
  document.getElementById("flash4").innerHTML = seconds;
  document.getElementById("flash5").innerHTML = days;
  document.getElementById("flash6").innerHTML = hours;
  document.getElementById("flash7").innerHTML = minutes;
  document.getElementById("flash8").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// ===== slick Countdown timer =====


// ===== slick Countdown timer =====

$('.feed_main').slick({
  slidesToShow: 2,
  slidesToScroll:1,
  speed:1000,
  arrows: false,
});


$('.p3_slidee').slick({
  slidesToShow: 6,
  slidesToScroll:1,
  speed: 900,
  nextArrow: '.slide1',
  prevArrow: '.slide2',
});

$('.cate_Slide').slick({
  slidesToShow: 5,
  slidesToScroll:1,
  speed: 900,
  nextArrow: '.cateSlide1',
  prevArrow: '.cateSlide2',
});



// ===== slick Countdown timer =====

// ===== slick Countdown timer =====

var countDownDate = new Date("feb 20, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("deal1").innerHTML = days;
  document.getElementById("deal2").innerHTML = hours;
  document.getElementById("deal3").innerHTML = minutes;
  document.getElementById("deal4").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// ===== slick Countdown timer =====



// ===== slick Countdown timer =====


$('.p3_testi_1').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  speed: 900,
  arrows: false,
  autoplay: true,
});
$('.p3_testi_2').slick({
  slidesToShow: 2,
  slidesToScroll:1,
  speed: 900,
  arrows: false,
  autoplay: true,
  vertical: true,
});


// ===== slick Countdown timer =====


// ===== slick Countdown timer =====
document.addEventListener("DOMContentLoaded", function() {
  var numberDisplay = document.getElementById("number-display");
  var minusBtn = document.getElementById("minus-btn");
  var plusBtn = document.getElementById("plus-btn");

  minusBtn.addEventListener("click", function() {
    var currentValue = parseInt(numberDisplay.value);
    if (currentValue > 0) {
      numberDisplay.value = currentValue - 1 + "kg";
    }
  });

  plusBtn.addEventListener("click", function() {
    var currentValue = parseInt(numberDisplay.value);
    numberDisplay.value = currentValue + 1 +"kg";
  });
});




// ===== slick Countdown timer =====

$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});


$(document).ready(function(){
        
  $("#colorful").colorfulTab();    
  
  $("#colorful-elliptic").colorfulTab({
      theme: "elliptic"
  }); 
 
 $("#colorful-flatline").colorfulTab({
      theme: "flatline"
  });    
  
  $("#colorful-background-image").colorfulTab({
      theme: "flatline",
      backgroundImage: "true",
      overlayColor: "#002F68",
      overlayOpacity: "0.8"
  });   

});


AOS.init();


const range = document.querySelector("input[type='range']");
const output = document.querySelector("#price-value");

range.addEventListener("input", function() {
  output.innerHTML = range.value;
});



