var images = [
  'bar.jpg',
  'bell.png',
  'cherry.jpg',
  'grapes.jpg',
  'iceberg.jpg',
  'lemon.png',
  'lucky-seven.png',
  'orange.jpg',
  'possum.jpg',
  //'sink.jpg'
];

var leftTop = document.getElementById('left-top');
var leftMain = document.getElementById('left-main');
var leftBottom = document.getElementById('left-bottom');

var centerTop = document.getElementById('center-top');
var centerMain = document.getElementById('center-main');
var centerBottom = document.getElementById('center-bottom');

var rightTop = document.getElementById('right-top');
var rightMain = document.getElementById('right-main');
var rightBottom = document.getElementById('right-bottom');

var rotate = function(reel, newSymbol) {
  if(reel === 'left'){
    leftBottom.src = leftMain.src;
    leftMain.src = leftTop.src;
    leftTop.src = './images/' + newSymbol;
  }
  else if(reel === 'center'){
    centerTop.src = centerMain.src;
    centerMain.src = centerBottom.src;
    centerBottom.src = './images/' + newSymbol;
  }
  else if(reel === 'right'){
    rightBottom.src = rightMain.src;
    rightMain.src = rightTop.src;
    rightTop.src = './images/' + newSymbol;
  }
  else{
    console.error('That is not a real reel. Needs to be either \'left\', \'center\', or \'right\'');
  }
}

var pushSinkButton = function(){
  var counter = 0;
  var leftSpin = setInterval(function(){
    rotate('left', images[counter % images.length]);
    if(counter > 22){
      clearInterval(leftSpin);
      rotate('left', 'sink.jpg');
      rotate('left', 'lucky-seven.png');
      return;
    }
  }, 160);
  var centerSpin = setInterval(function(){
    let offset = Math.floor(images.length * Math.random());
    rotate('center', images[(offset + counter) % images.length]);
    if(counter > 30){
      clearInterval(centerSpin);
      rotate('center', 'sink.jpg');
      rotate('center', 'bell.png');
      return;
    }
  }, 160);
  var rightSpin = setInterval(function(){
    let offset = Math.floor(images.length * Math.random());
    rotate('right', images[(offset + counter) % images.length]);
    counter++;
    if(counter > 40){
      clearInterval(rightSpin);
      rotate('right', 'sink.jpg');
      rotate('right', 'iceberg.jpg');
      rotate('right', 'cherry.jpg');
      return;
    }
  }, 160);
}

var pushRandomButton = function(){
  var counter = 0;
  var leftSpin = setInterval(function(){
    rotate('left', images[counter % images.length]);
    if(counter > 22){
      clearInterval(leftSpin);
      
      return;
    }
  }, 200);
  var centerSpin = setInterval(function(){
    let offset = Math.floor(images.length * Math.random());
    rotate('center', images[(offset + counter) % images.length]);
    if(counter > 30){
      clearInterval(centerSpin);
      return;
    }
  }, 180);
  var rightSpin = setInterval(function(){
    let offset = Math.floor(images.length * Math.random());
    rotate('right', images[(offset + counter) % images.length]);
    counter++;
    if(counter > 45){
      clearInterval(rightSpin);
      return;
    }
  }, 210);
}

document.getElementById('randomButton').addEventListener('click', pushRandomButton);
document.getElementById('sinkButton').addEventListener('click', pushSinkButton);