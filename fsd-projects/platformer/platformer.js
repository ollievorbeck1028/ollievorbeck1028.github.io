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
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(500, 0, 20, 200);

for (let i = 0; i < 40; i++) {
  createPlatform(500, 0 + (i * 20), 200);
}
    // TODO 3 - Create Collectables
createCollectable("database", 1350, 700);


for (let i = 0; i < 40; i++) {
  createCannon("top", 0 + (i * 5), 1500);
}



for (let i = 0; i < 20; i++) {
  createCannon("top", 200 + (i * 5), 1500);
}
for (let i = 20; i < 40; i++) {
  createCannon("top", 200 + (i * 5), 1550);
}
for (let i = 40; i < 70; i++) {
  createCannon("top", 200 + (i * 5), 1000);
}

    
for (let i = 90; i < 120; i++) {
  createCannon("top", 200 + (i * 5), 1200);
}

    for (let i = 120; i < 150; i++) {
  createCannon("top", 200 + (i * 5), 1600);
}

    for (let i = 150; i < 170; i++) {
  createCannon("top", 200 + (i * 5), 1800);
}

    for (let i = 170; i < 200; i++) {
  createCannon("top", 200 + (i * 5), 1350);
}



    
    // TODO 4 - Create Cannons






//    const cannonSpeeds = [
//     500, // Speed for the first cannon
//     550, // Speed for the second cannon
//     600,
//     650,
//     700,
//     750, // Speed for the sixth cannon
//     800,
//     850,
//     900,
//     950  // Speed for the tenth cannon
// 


}
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  

  registerSetup(setup);
});