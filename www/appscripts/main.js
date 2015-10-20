require(
    [],
    function () {
            
        console.log("yo, I'm alive!");
        var paper = new Raphael(document.getElementById("mySVGCanvas"));





// SETTING INITIAL VARAIBLES --------------------------------------------------
        var interval = 50; //interval at which rect1 is redrawn
        var difficulty = 1; //difficulty of game, affects rect1 size
        var counter = 0; //counts number of times clicked, ie 'score'
        var difficultytext = paper.text(10,20,""); //text in top left corner of game space showing difficulty level of the game ('difficulty' var)
        var gametime = NaN; //amount of time player has per game, ie 10 seconds. initial is set to NaN since game is not yet in play
        var pWidth = paper.canvas.offsetWidth; //var for width of game space 
        var pHeight = paper.canvas.offsetHeight; //var for height of game space
        var startButton = paper.circle(300, 200, 40); //draws button for starting game
        var startText = paper.text(300, 200, 'START'); //draws text on start button
        var timerBar = paper.rect(0,395,600,30); //draws timer bar at bottom of game space
        var timertext = paper.text(10,360,""); //text on top left of game space showing how much time left in game
        var scoretext = paper.text(580,110,counter); //text in top left corner of game space showing player's score ('counter' var)
        var rect1 = paper.rect(-100,-100,100, 100); //initial drawing of rect1 off-canvas



// SETTING ATTRIBUTES OF GAME ELEMENTS --------------------------------------------------
        startButton.attr({ //attributes for start button
            stroke: "none",
            fill: "#ffaf47"
        });

        startText.attr({ //attributes for start button text
            fill: "white",
            stroke: "white",
            "font-size": 16
        });

        timerBar.attr({ //attributes for timer bar at buttom
            'fill': '#ffaf47',
            'stroke': 'none'
        });

        timertext.attr({ //attributes for timer text
            'text-anchor':'start',
            'font-size': 100,
            'fill': '#ffaf47',
            'opacity': 0.4
        }); 

        scoretext.attr({ //attributes for score text
            'text-anchor':'end',
            'font-size': 250,
            'fill': '#999999',
            'opacity': 0.4
        });      

        rect1.attr({ //set rect1 appearance params
            'fill': "hsl(240, 50, 50)",
            'stroke-width': 0,
            'stroke-linejoin': 'round',
            'opacity': .75
        });

        difficultytext.attr({
            'text-anchor':'start',
            'font-size': 24,
            'fill': '#cccccc'
        });


// DEFINING FUNCTIONS OF GAME OPERATION --------------------------------------------------
        var timer = function() { //if game is in play, reduce timer by 1s every 1000ms. reflect in timertext object
            if (gametime>0) {
                timertext.show();
                gametime -= 1;
                timertext.attr({
                    text: gametime + "s"
                });
                timerBar.animate({
                    'width':60*gametime
                },1000);
            } else {
                gametime = NaN; //if game is not in play, set timer to NaN
                timertext.hide(); //hide timer text if game is not in play
            };
            
        };

        var ready = function(){ //function to set initial 'ready to play' state - show start button and text, prompt player to input difficulty and update value
        	startButton.show();
        	startText.show();
            console.log("game is ready to play");
        };

        var start = function (){ //function to start game - hides start button and text, sets initial game parameters (timer and score) and calls first square function
        	console.log("game is starting");
        	startButton.hide(); //hide start button while game is in play
        	startText.hide(); //hide start button while game is in play
            gametime = 10; //set amount of game time to 10s
        	moveSquare(); //initial moveSquare function to show square on game area
        	counter = 0; //initial score is 0, set after moveSquare function since moveSquare will increase score by 1
        	scoretext.attr({text:counter}); //reset score text to 0
        };


        var randInt = function( m, n ) { //randInt function calls a random integer with m as minimum and n as maximum
            var range = n-m+1;
            var frand = Math.random()*range;
            return m+Math.floor(frand);
        }

        var moveSquare = function(){ //the big function that determines how the square will act when clicked
            rect1.show(); //make sure rect1 is shown (it's hidden in the 'ready' state)
            var xpos, ypos; //create vars xpos and ypos
            rect1.xpos = randInt(0,5)*100; //randomly set xpos to 0 to 500 in 100 intervals
            rect1.ypos = randInt(0,3)*100; //randomly set ypos to 0 to 300 in 100 intervals

        	counter++; //add 1 to counter every time function is called when square is clicked (add score) and reflect on score text
            scoretext.attr({text:counter});
        	console.log("your square move count is now " + counter); 

            rect1.xrate = randInt(-1,1); //randomize x rate of movement of square to -1, 0, or 1
            rect1.yrate = randInt(-1,1); //randomize y rate of movement of square to -1, 0, or 1
            console.log("rate of movement is " + rect1.xrate +","+ rect1.yrate);
        };

        var endCheck = function () { //process to end and reset the game when timer runs out
            if (gametime===0) { //only run this function if timer = 0, ie when game is over
                rect1.hide(); //hides rect1 since game is not in play
                timerBar.animate({'width':600}); //returns timer bar to full width
                confirm("Your score is " + counter + "!"); //show pop-up telling player final score
                difficultyInput(); //prompts player for difficulty input again
                ready(); //calls function to put game in ready state
            };
        }

        difficultyInput = function () { //function to prompt player to input difficulty of the game
            var difficulty = prompt("Click the moving boxes as many times as possible within the time limit!\n\nPlease enter your difficulty level from 1 to 10 (with 10 being the most difficult).", "1-10");
            difficultytext.attr({text: "Difficulty: " + difficulty}); //updates difficulty text
            console.log("game difficulty set to level " + difficulty);
            setInterval(function () { //checks if player input was incorrect (not an integer from 1 to 10)
                    if (difficulty < 1 || difficulty > 10 || difficulty == null || isNaN(difficulty)) {
                        difficulty = prompt("Please enter a difficulty level between 1 and 10!", "1-10");
                        difficultytext.attr({'text-anchor':'start', text:"Difficulty: " + difficulty});
                        rect1.attr({ //sets rect1 size in proportion to difficulty
                            'height': 150/difficulty,
                            'width': 150/difficulty
                        })
                        console.log("game difficulty is set to level " + difficulty);
                    };
            }, 100);
            rect1.attr({ //sets rect1 size in proportion to difficulty
                'height': 150/difficulty,
                'width': 150/difficulty
            });
        };


        draw = function(){ //draw function redraws the square at refresh rate specified in 'interval' variable
            if (rect1.xpos<0) { //if rect1 moves beyond left border, redraw with randomized coordinates
                rect1.xpos = randInt(0,5)*100;
                rect1.ypos = randInt(0,3)*100;
            } else if (rect1.xpos>pWidth){ //if rect1 moves beyond right border, redraw with randomized coordinates
                rect1.xpos = randInt(0,5)*100;
                rect1.ypos = randInt(0,3)*100;
            } else if (rect1.ypos>pHeight) { //if rect1 moves beyond top border, redraw with randomized coordinates
                rect1.xpos = randInt(0,5)*100;
                rect1.ypos = randInt(0,3)*100;
            } else if (rect1.ypos<0) { //if rect1 moves beyond bottom border, redraw with randomized coordinates
                rect1.xpos = randInt(0,5)*100;
                rect1.ypos = randInt(0,3)*100;
            };

            rect1.xpos = rect1.xpos + (rect1.xrate*difficulty); //increases xpos property of rect1 by xrate every time draw function is called
            rect1.ypos = rect1.ypos + (rect1.yrate*difficulty); //increases ypos property of rect1 by yrate every time draw function is called

            rect1.attr({ //updates the position of rect1 every time draw function is called
                x: rect1.xpos,
                y: rect1.ypos
            });
        };


// GAME OPERATIONS --------------------------------------------------
        setInterval(draw,interval); //calls 'draw' function every 'interval' number of ms
        startButton.node.addEventListener('click', start); //starts game by calling start function when start button is clicked
        rect1.node.addEventListener('click', moveSquare); //runs click function whenever rect1 is clicked
        setInterval(timer,1000); //runs timer function to decrease every 1000ms
        setInterval(endCheck,1000); //checks for 0s state to end game every 1000ms
        rect1.hide(); //hides rect1 on load
        difficultyInput(); //initial difficulty prompt
        ready(); // sets game in initial 'ready' phase upon load


    }
);