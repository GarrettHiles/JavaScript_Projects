
//keeps track of player and makes x player 1
let activePlayer = 'X';
//determines win conditions
let selectedSquares = [];
// this function allows you to place the Xs and Os into a square.
function placeXOrO(squareNumber) {
    //ensures a square has not been selected before.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        //assigns the player images
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x2.jpg")';
        } else{
            select.style.backgroundImage = 'url("images/o2.jpg")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        
        if (activePlayer === 'X') {
            activePlayer = 'O';

        } else {
            activePlayer = 'X';
        }
        audio('./media/place2.wav');

        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000)
        }
        return true;
    }   
    //random square gets selected by the computer for the 1v1.
    function computersTurn() {
        let success = false;
        let pickASquare;

        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));

            if (placeXOrO(pickASquare));
            //this changes the boolean and ends the loop
            success = true;
        };
    }
} 
//this function searches for every win condition possible. 

function checkWinConditions() {
    if (arrayIncludes('0X', '1x', '2x')) { drawWinLine(50, 100, 558, 100)}

   else if (arrayIncludes('3X', '4x', '5x')) { drawWinLine(50, 304, 558, 304)}

   else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}

   else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}

   else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}

   else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}

   else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}

   else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}

   else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}

   else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}

   else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}

   else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}

   else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}

   else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}

   else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}

   else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}

//incase of tie
   else if (selectedSquares.length >= 9) {
        audio('./media/ooo.wav');

        setTimeout(function () {resetGame(); }, 500);
   }

   //This function checks if an array includes 3 strings. It is used to check for each win condition.
   function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        if (a === true && b === true && c === true) {return true;}
   }
}
// makes the body element temporarily unclickable 
function disableClick() {
    body.style.pointerEvents = 'none';

    setTimeout(function () {body.style.pointerEvents = 'auto'; }, 1000)
}
//sets up the function for calling different audio bits. 
function audio(audioURL) {
    let audio = new Audio(audioURL);

    audio.play();
}

//This function utilized HTML canvass to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //following sets up the x and y axis
    const canvas = document.getElementById('win-lines');

    const c = canvas.getContext('2d');

    let x1 = coordX1,

    y1 = coordY1,

    x2 = coordX2,

    y2 = coordY2,

    x = x1,

    y = y1;
    //interacts with the canvas 
    function animateLineDrawing() {

        const animationLoop = requestAnimationFrame(animateLineDrawing);

        c.clearRect(0, 0, 608, 608);
        // makes a new path
        c.beginPath();
        //start point
        c.moveTo(x1, y1);
        //endpoint
        c.lineTo(x, y);
        //width of line drawn
        c.lineWidth = 10;
        //color of the line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //draws everything stated.
        c.stroke();
        //checks to see if the endpoints have been reached.
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; } 

            if (y < y2) { y += 10; }

            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
        }
        //necessary for the 6, 4, 2 win condition to work
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
// this clears the canvas after a win line has been drawn.
    function clear() {
        const animationLoop = requestAnimationFrame(clear);

        c.clearRect(0, 0, 608, 608);

        cancelAnimationFrame(animationLoop);
    }

    disableClick(); //no clicking for the sound to play

    audio('./media/win-sound.wav');

    animateLineDrawing();

    setTimeout(function () { clear(); resetGame(); }, 1000);
}

///function for reseting the game
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));

        square.style.backgroundImage = '';
    }
    //resets the array
    selectedSquares = [];
}