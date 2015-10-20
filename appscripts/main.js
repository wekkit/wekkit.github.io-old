var el = document.getElementById("main"),
    two = new Two({ 
        fullscreen: true
    });
 
two.appendTo(el);

var circle = two.makeCircle(two.width/2,two.height/2, 200);
circle.fill = "#ffaf47"
circle.stroke = "orangered"
circle.linewidth = 5
circle.opacity=0.3

two.bind('update', function(frameCount) {
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  if (circle.scale > 0.9999) {
    circle.scale = .5;
  }
  var t = (1 - circle.scale) * 0.125;
  circle.scale += t;
  circle.translation.set(two.width / 2, two.height / 2);
}).play();

var square = two.makeRectangle(600,100,100,100);
square.fill = "#00dcf9";
square.noStroke();

two.bind('update', function(frameCount) {
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  if (circle.opacity>0.3) {circle.opacity-=0.1} else{};
  var t = (1 - square.scale) * 0.2;
  square.scale += t;
  square.translation.set((7/10)*two.width, (1/10)*two.height);
}).play();

two.update();
square._renderer.elem.addEventListener('click', function(){console.log("click");square.scale = 0.8; circle.opacity=1});
circle._renderer.elem.addEventListener('mouseover', function(){
    two.bind('update',function(frameCount){
        circle.fill="#00dcf9"
        circle.noStroke();
    })
  });
circle._renderer.elem.addEventListener('mouseout', function(){
    two.bind('update',function(frameCount){
        circle.fill="#ffaf47"
        circle.stroke="orangered"
    })
  });