// colors
  // #faf87a - yellow



document.onkeydown = function(event) {
        switch (event.keyCode) {
           case 65:
              myPerson.speedX = -10;
              break;
           case 87:
              myPerson.speedY = -10;
              break;
           case 68:
            myPerson.speedX = 10;
              break;
        //    case 40:
        //       myPerson.speedY = 10;
        //       break;
         }
    };

document.onkeyup = function(event) {
  switch (event.keyCode) {
     case 65:
        myPerson.speedX =  0;
        break;
     case 87:
        myPerson.speedY =  0;
        break;
     case 68:
      myPerson.speedX = 0;
        break;
     // case 40:
     //    myPerson.speedY = 0;
     //    break;
  }
  // switch (event.keyCode) {
  //    case 37:
  //       myPerson.speedX =  0;
  //       break;
  //    case 38:
  //       myPerson.speedY =  0;
  //       break;
  //    case 39:
  //     myPerson.speedX = 0;
  //       break;
  //    case 40:
  //       myPerson.speedY = 0;
  //       break;
  // }
}

    var myPerson;

    var notif = "no";
    var startMessage;
    var challenges = [
      // "l0",
      "l1c1();","l1c2()","l1c3()",
      "l2c1()","l2c2()","l2c3()",
      "l3c1()","l3c2()","l3c3()",
      "l4c1()","l4c2()","l4c3()",
      "l5c1()","l5c2()","l5c3()",
    ];
    var backgrounds = [
      "images/bedroom.png",
      "images/work.png",
      "images/exit.png",

      "images/toilet.png",
      "images/bag.png",
      "images/sanitizer.png",

      "images/trees.png",
      "images/trees2.png",
      "images/trees.png",

      "https://wallpaperaccess.com/full/508929.png",
      "https://wallpaperaccess.com/full/629329.jpg",
      "https://pbs.twimg.com/media/EDlhI6eWkAA75zf.jpg",
    ];
    var levelNo = 0;
    var background = 0;
    var challenge;

    var questions = [
      "You get a text from your local government encouraging everyone to stay home. Do you stay home?",
      "You are bored. You...",
      "Your friend texts you saying they want to meet for coffee. What do you reply?",

      "Do you take 12 packs of toilet paper?",
      "Do you take a store provided bag?",
      "You pass by a hand sanitizing machine! Do you get hand sanitizer?",

      "On your walk, someone begins approaching you! You...",
      "Someone's rambling about the \'Chinese Virus \'.",
      "You realize that everyone around you is wearing a mask! You...",

      "You get a phone call from a former colleague in the medical industry! They want you back in the game! You...",
      "...",
      "Uh oh! You've come across the biggest threat of them all..."
    ]

    var firstChoice = [
      "Yes",
      "Do something productive!",
      "\'Sure!\'",

      "yEs iT'S aN EmeRgEncY!1!1",
      "Yes",
      "Yes - Gotta keep my hands clean!",

      "Remember to stay six feet apart.",
      "Call them out.",
      "Grab one out of your bag.",

      "Go back to nursing",
      "Bring them something.",
      "Bring it on!"

  ]

    var secondChoice = [
      "Hekk no I'm a rebel! <br><br>",
      "Do something you enjoy doing! (Or nothing)",
      "\'I think we should stay home. We can do something virtually!\'",

      "No - What would I even do with 12 packs of toilet paper?",
      "No",
      "No - I don't like sanitizer.",

      "Hold your breath as they pass by and keep walking!",
      "Let them be.",
      "Don't bother.",

      "How could you say no?",
      "Say hi!",
      "Let's fight!"

    ]

    var answers = [
      "Yes - We should all stay home to prevent the spread of the virus! If we all do our part to prevent potential infections, shelter in place will be over before you know it.",
      "Either is fine! The world is under unusual circumstances, and you should do whatever feels right to you. ",
      "Go for virtual - While it's tempting to meet with your friends while you're not at work or school, you should try to stay home as much as possible! Even though you can’t meet in person, you can always stay connected with your peers.",

      "No - Don't hoard the toilet paper! (Or any other essentials!) You might be taking essentials others might not have easy access to.",
      "Yes - While there is no evidence right now that the virus can stick to reusable bags, many stores are encouraging the switch to prevent the spread. If you use store bags, try to stay biodegradable and environmentally friendly!",
      "Yes (unless you're allergic!) - Don't forget to keep your hands clean and free from bacteria!",

      "Stay six feet apart and practice social distancing - social distancing is the best way to protect yourself from the virus when you're outside.",
      "Call them out.",
      "Grab one - it's recommended that you wear a mask to prevent potentially spreading the virus, and so that you avoid possibly taking in the virus from people around you.",

      "Whatever situation you're in, put people first! Whether it’s taking care of someone or making them feel good. You don’t need to save lives to prioritize people.",
      "Spread kindness and help people in any way you can! It doesn't have to be as big as being a first responder, though.",
      "Use everything you've learned (and your fancy medical education) to fight the coronavirus!"
    ]



    // // Make sure the image is loaded first otherwise nothing will draw.
    // background.onload = function(){
    //     ctx.drawImage(background,0,0);
    // }

    function startGame() {
        myPerson = new component(200, 200, "images/person.PNG", 10, 720, "image");
        startMessage = new text("text/start.png", 500, 120, 0, 0);

        myGameArea.start();
        // document.getElementById("start").style.display = "none";
    }

    var myGameArea = {
        canvas : document.createElement("canvas"),
        menu : document.createElement("div"),
        start : function() {
            this.canvas.width = 1080;
            this.canvas.height = 648;
            this.canvas.style = "position:absolute; left: 20%; margin-left: -100px; border: none";
            this.canvas.setAttribute("id", "background")
            this.context = this.canvas.getContext("2d");

            // var c = document.getElementById("background");
            // [this.context].drawImage("images/person.PNG" ,10,10);

            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
        },
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    function text(image, width, height, x, y) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;

      this.image = new Image();
      this.image.src = image;

      this.image.setAttribute("id", "start");
      this.image.setAttribute("class", "text");

      this.image.style = "margin-left: 100px;";

      ctx = myGameArea.context;
      this.update = function() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }

    function component(width, height, color, x, y, type) {
        this.type = type;
        if (type == "image") {
            this.image = new Image();
            this.image.src = color;
          }
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.gravity = 0.5;
        this.gravitySpeed = 0;
        // this.id.setAttribute("id", id);

        this.update = function() {
            ctx = myGameArea.context;
            if (this.type == "text") {
                ctx.font = this.width + " " + this.height;
                ctx.fillStyle = color;
                ctx.fillText(this.text, this.x, this.y);
            } else if (type == "image") {
              ctx.drawImage(this.image,
              this.x,
              this.y,
              this.width, this.height);
            }
            else {
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
        this.newPos = function() {
            this.gravitySpeed += this.gravity;
            this.x += this.speedX;
            this.y += this.speedY + this.gravitySpeed;
            this.hitBottom();
            // this.reachRightEdge();
            this.reachEdge();
            this.reachChallenge();
        }
        this.hitBottom = function() {
            var rockbottom = myGameArea.canvas.height - this.height;
            if (this.y > rockbottom) {
                this.y = rockbottom;
                this.gravitySpeed = 0;
            }
        }
        // this.reachRightEdge = function() {
        //     if (this.x > 1080) {
        //         this.x = 1080;
        //         alert("reached edge");
        //     }
        // }
        this.reachEdge = function() {
           if (this.x < -100) {
              this.x = 1050;
              levelNo--;
              document.getElementById("background").style.background = "url(" + backgrounds[levelNo] + ")";

              if(levelNo < 0) {
                this.x = -100;
                levelNo = 0;
                document.getElementById("background").style.background = "url(" + backgrounds[0] + ")";
              }
          }
          if (this.x > 1050) {
              this.x = -70;
              levelNo++;
              this.speedX = 0;
              // document.canvas.style.backgroundImage = "url('https://wallpaperaccess.com/full/629329.jpg')";
              document.getElementById("background").style.background = "url(" + backgrounds[levelNo] + ")";
              document.getElementById('choices').style.display = "none";
              notif = "no";
            }

        }
        this.reachChallenge = function(level, challengeNo) {
          if (this.x > 500 && notif == "no") {

            // doChallenge = () => {
            //   challenge = challenges[levelNo];
            // }
            // doChallenge();
            changeQuestion();
            // alert("jump on tessa 50 times");

            notif = "yes";
          }
        }
    }

    function updateGameArea() {
        myGameArea.clear();
        myPerson.newPos();
        myPerson.update();
        // startMessage.update();
    }




    // preventing refresh
    $("button").click(function(event){
       event.preventDefault();
     });

     function changeQuestion() {
        // alert("jump on tessa 50 times");
       document.getElementById('choices').style.display = "block";
       document.getElementById('question').style.display = "block";


       document.getElementById('answer').style.display = "none";
       document.getElementById('description').innerHTML = questions[levelNo];

       document.getElementById('choice1').innerHTML = firstChoice[levelNo];
       document.getElementById('choice2').innerHTML = secondChoice[levelNo];
     }

     function revealAnswer() {
       document.getElementById('question').style.display = "none";


       document.getElementById('answer').innerHTML = answers[levelNo] + "<br><br> Keep moving forward to continue!";
       document.getElementById('answer').style.display = "block";
     }
