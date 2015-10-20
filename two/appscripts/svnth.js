console.log("svnth is up!")

var el = document.getElementById("main"),
    two = new Two({ 
        fullscreen: true
    });
 
two.appendTo(el);

var bg = two.makeRectangle(two.width/2,two.height/2,two.width,two.height);
bg.fill = "#333333"

//------ code for ANIMATION SIX

var tile1 = two.makeRectangle(two.width/4,two.height/4,two.width/2,two.height/2);
tile1.fill = "#ffffff";
tile1.noStroke();
tile1.opacity = 0;

var tile2 = two.makeRectangle(two.width/4+two.width/2,two.height/4,two.width/2,two.height/2);
tile2.fill = "#ffffff";
tile2.noStroke();
tile2.opacity = 0;

var tile3 = two.makeRectangle(two.width/4,two.height/4+two.height/2,two.width/2,two.height/2);
tile3.fill = "#ffffff";
tile3.noStroke();
tile3.opacity = 0;

var tile4 = two.makeRectangle(two.width/4+two.width/2,two.height/4+two.height/2,two.width/2,two.height/2);
tile4.fill = "#ffffff";
tile4.noStroke();
tile4.opacity = 0;

var tilecounter = 0;

var anim6 = function() {

  switch(tilecounter) {
    case 0: tile1.opacity=1; tilecounter++; break;
    case 1: tile2.opacity=1; tilecounter++; break;
    case 2: tile3.opacity=1; tilecounter++; break;
    case 3: tile4.opacity=1; tilecounter=0; break;
  }

  two.bind('update', function(frameCount){
    tile1.opacity += (0 - tile1.opacity) /20;
    tile2.opacity += (0 - tile2.opacity) /20;
    tile3.opacity += (0 - tile3.opacity) /20;
    tile4.opacity += (0 - tile4.opacity) /20;
  });

};

//------ code for BUTTONS

var button1 = two.makeRectangle(30,30,30,30); //draw button to trigger first animation
button1.fill = "#cccccc";
button1.noStroke();

var button2 = two.makeRectangle(30,70,30,30); //draw button to trigger second animation
button2.fill = "#cccccc";
button2.noStroke();

var button3 = two.makeRectangle(30,110,30,30); //draw button to trigger second animation
button3.fill = "#cccccc";
button3.noStroke();

var button4 = two.makeRectangle(30,150,30,30); //draw button to trigger second animation
button4.fill = "#cccccc";
button4.noStroke();

var button5 = two.makeRectangle(30,190,30,30); //draw button to trigger second animation
button5.fill = "#cccccc";
button5.noStroke();

var button6 = two.makeRectangle(30,230,30,30); //draw button to trigger second animation
button6.fill = "#cccccc";
button6.noStroke();

two.bind('update', function(frameCount) { //visual feedback animation for button presses - buttons will always animate back to 100% scale
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  var button1t = (1 - button1.scale) * 0.2;
  var button2t = (1 - button2.scale) * 0.2;
  var button3t = (1 - button3.scale) * 0.2;
  var button4t = (1 - button4.scale) * 0.2;
  var button5t = (1 - button5.scale) * 0.2;
  var button6t = (1 - button6.scale) * 0.2;
  button1.scale += button1t;
  button2.scale += button2t;
  button3.scale += button3t;
  button4.scale += button4t;
  button5.scale += button5t;
  button6.scale += button6t;
}).play();

two.update();

button1._renderer.elem.addEventListener('click', function(){ //on button 1 press
  console.log("animation 1 triggered");
  button1.scale = 0.8;
  anim1();
});

button2._renderer.elem.addEventListener('click', function(){ //on button 2 press
  console.log("animation 2 triggered");
  button2.scale = 0.8;
  anim2();
});

button3._renderer.elem.addEventListener('click', function(){ //on button 3 press
  console.log("animation 3 triggered");
  button3.scale = 0.8;
  anim3();
});

button4._renderer.elem.addEventListener('click', function(){ //on button 3 press
  console.log("animation 4 triggered");
  button4.scale = 0.8;
  anim4();
});

button5._renderer.elem.addEventListener('click', function(){ //on button 3 press
  console.log("animation 5 triggered");
  button5.scale = 0.8;
  anim5();
});

button6._renderer.elem.addEventListener('click', function(){ //on button 3 press
  console.log("animation 6 triggered");
  button6.scale = 0.8;
  anim6();
});


//------ code for ANIMATION ONE

var anim1 = function() {

  var bg1 = two.makeRectangle(two.width/2,two.height/2,two.width,two.height); //draw rectangle convering entire frame
  bg1.fill = "#ffffff";
  bg1.noStroke();

  two.bind('update', function(frameCount) {
    if (bg1.opacity > 0) {
      bg1.opacity -= 0.1;
    };
  }).play();

  setTimeout(function() { //remove all instances of animation after 300ms
    two.remove(bg1);
  }, 300);

};

//------ code for ANIMATION TWO

var anim2 = function() {
  var circle2radius = 0.1*two.height; //set radius of circle
  var circle2 = two.makeCircle(-(0.3 * two.width), two.height/2,circle2radius); //draw circle out of frame
  circle2.fill = "#ffaf47";
  circle2.noStroke();

  two.bind('update', function(frameCount){
    var circlet1 = (two.width/2 - circle2.translation.x) * 0.2; //set tweening variable t1 for when circle approaches halfway mark
    var circlet2 = ((1.4*two.width) - circle2.translation.x) * 0.2; //set tweening variable t2 for when circle has passed halfway mark

    if (circle2.translation.x < 0.999*two.width/2) { //before circle hits halfway mark
      circle2.scale += 0.0004*circlet1; 
      circle2.translation.x += circlet1;
    } else { //after circle hits halfway mark
      circle2.translation.x += circlet2;
      circle2.scale -= 0.0004*circlet2;
    };

  });

  setTimeout(function(){ //remove all instances of animation after 2000ms
    two.remove(circle2);
  }, 2000);
};

//------ code for ANIMATION THREE

var anim3 = function() {
  var line3x = Math.random() * two.width; //randomize x position of line 
  var line3 = two.makeLine(line3x,-0.5*two.height,line3x,0); //draw line out of frame
  line3.stroke = "#f9f9f9";
  line3.linewidth = Math.random()*30;

  two.bind('update',function(frameCount){ //move line downwards with tweening variable t
    var line3t = (1.5*two.height - line3.translation.y) * 0.1; 
    line3.translation.y += line3t;
    line3.linewidth += 0.05;
  });

  setTimeout(function(){
    two.remove(line3);
  }, 1000);
};

//------ code for ANIMATION FOUR

var logo = two.interpret(document.querySelector('#logo')).center();
logo.translation.x = two.width/2;
logo.translation.y = two.height/2;
logo.width = 0.8*two.width;
  two.bind('update', function(frameCount) {
    logo.scale += (0.8-logo.scale)/10;
    logo.rotation += (0-logo.rotation)/10;
  }).play();
// setInterval(function(){logo.opacity=0.5;},200);
logo.opacity = 0;
// setInterval(function(){logo.scale=1; logo.fill = "#"+Math.floor(Math.random()*16777215).toString(16);},575);

var anim4 = function() {
  if (logo.opacity === 0) {
    logo.opacity = 1;
    logo.fill = "#"+Math.floor(Math.random()*16777215).toString(16);
    logo.scale = 1;
  } else {logo.opacity = 0};
};


//------ code for ANIMATION FIVE

var anim5 = function () {

  var square5side = 300*Math.random();
  var square5 = two.makeRectangle(Math.random()*two.width, Math.random()*two.height,square5side,square5side);
  // square5.fill = "#"+Math.floor(Math.random()*16777215).toString(16);
  // square5.fill = "#ffffff";
  square5.noFill();
  square5.stroke = "#ffffff"
  square5.linewidth = 2;

  two.bind('update', function(frameCount){
    square5.opacity += (0 - square5.opacity) / 5;
    square5.translation.x += 3*(2*Math.random()-1);
    square5.translation.y += 3*(2*Math.random()-1);
    square5.rotation += 0.2*Math.random();
    square5.scale += (1.2 - square5.scale)/5;
  });

  setTimeout(function(){
    two.remove(square5);
  }, 500);

};


// setInterval(anim5,20);
// setInterval(anim4,875/2);
// setInterval(anim1,875);
