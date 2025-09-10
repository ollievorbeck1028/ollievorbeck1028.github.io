$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50 ); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200,); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500 ); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100 ); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
  //                  |
  //           -->   \|/   <-->  
createPlatform(250, 650, 90, 10, "red");
createPlatform(350, 490, 125, 10, "red");
createPlatform(470, 390, 20, 10, "red");
createPlatform(594, 310, 12, 500, "white");
createPlatform(594, 0, 12, 200, "white");
createPlatform(606, 650, 75, 10, "red");
createPlatform(850, 150, 12, 600, "white");
createPlatform(850, 0, 12, 50, "white");
createPlatform(400, 600, 90, 10, "red");
//stays red
createPlatform(840, 500, 10, 10, "red");
createPlatform(840, 380, 10, 10, "red");
createPlatform(840, 620, 10, 10, "red");
createPlatform(840, 260, 10, 10, "red");

createPlatform(660, 200, 10, 100, "black");
createPlatform(870, 620, 100, 10, "red"); 
createPlatform(1050, 550, 50, 10, "red");
createPlatform(920, 50, 10, 100, "black");
createPlatform(850, 50, 75, 10, "black");
createPlatform(594, 200, 75, 10, "black");
createPlatform(1150, 450, 100, 10, "red");
createPlatform(1300, 350, 10, 5000, "white");
createPlatform(200, 400, 50, 10, "red");
createPlatform(10, 700, 100, 10, "red");
createPlatform(1300, 700, 100, 10, "red");



    // TODO 3 - Create Collectables

createCollectable("coin", 625, 150, 0, 0);
createCollectable("coin", 900, 570, 0, 0);
createCollectable("coin", 200, 340, 0, 0);
createCollectable("coin", 825, 75, 0, 0);
createCollectable("coin", 1325, 660, 0, 0);
    
    // TODO 4 - Create Cannons
createCannon("top", 1000, 1000);
createCannon("left", 690, 50);
createCannon("top", 600, 1200);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
