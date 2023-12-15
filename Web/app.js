let uiWindow = createRect( 600,200,300,300);


const gameStates= {
  start: 0,
  inGame: 1,
  gameOver: 2,
};

const inGameStates = {
  start: 0,
  roll: 1,
  end: 0,
};

let gameState = gameStates.start;
let inGameState = inGameStates.start;

let boardPositionSize= 50;
let pawnPositions= [];
let boardPositions=[];
let playerAmountButtons = [];

let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");


function createRect(x,y,w,h)
{
      let rectangle = {
        x:x,
        y:y,
        x2:x+w,
        y2:y+h,
        w:w,
        h:h
      };
    return rectangle;
}

function clearCanvas()
{
    g.fillStyle = "lightslategray";
    g.fillRect(0,0, canvas.clientWidth, canvas.height);
}

function drawIngame()
{
    for(let i =0 ; i<boardPositions.length;i++)
    {
        let pos = boardPositions[i];

        g.fillStyle  = "#004400";
        //we gebruiken hier de x en y van het rectangle object
        // vul bij de ??? ook de h & w in, net als bij de x en y gedaan is!
        g.fillRect(pos.x,pos.y,pos.w,pos.h);
        g.fillStyle  = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);
    }
}

function createBoardPositions() {
  let x = 0;
  let y = canvas.height - boardPositionSize;
  let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  for (let i = 0; i < path.length; i++) {
    if (path[i] === 1) {
      x += boardPositionSize;
    } else if (path[i] === 3) {
      x -= boardPositionSize;
    } else if (path[i] === 0) {
      y -= boardPositionSize; 
    }
    boardPositions.push(createRect(x, y, boardPositionSize, boardPositionSize));
  }
}

function initGame(){
  createBoardPositions();
for (let i = 0; i < 4; i++) {
    let button = createRect(uiWindow.x+5 +(i * 55) ,uiWindow.y+50,50,50)
    button.playerAmount=i+1;
    playerAmountButtons.push(button);
  }
}

function drawGamestart() {
  for (let i = 0; i < playerAmountButtons.length; i++) {
    let button = playerAmountButtons[i];
    
    g.fillStyle = "#004400";
    g.fillRect(button.x, button.y, button.w, button.h);
    
   
    g.fillStyle = "#FFFFFF";
    g.fillText(button.playerAmount.toString(), button.x + 20, button.y + 30);
  }
  

  g.fillStyle = "#FFFFFF";
  g.fillText("Click the amount of players to start", uiWindow.x + 5, uiWindow.y + 30);
}

function draw()
{
  clearCanvas();
  drawGamestart();
  drawIngame();
}


initGame();
draw();