const board=document.querySelector(".board");
const startbtn=document.querySelector(".btn");
const modal=document.querySelector(".modal");
const startgamemodal=document.querySelector(".start-game");
const gameovermodal=document.querySelector(".gameover");
const restartbtn=document.querySelector(".restart-again")

const highscoreElement=document.querySelector("#highscore");
const ScoreElement=document.querySelector("#Score");
const timeElement=document.querySelector("#time");




let blockheight=50;
let blockwidth=50;

let score=0;
let highscore=localStorage.getItem("highscore")||0;
let time=`00-00`;
 
highscoreElement.textContent=highscore;

const rows=Math.floor(board.clientHeight/blockheight);//no of rows
const cols=Math.floor(board.clientWidth/blockwidth); //no of cols 
let food={ x:Math.floor(Math.random()*rows),  y:Math.floor(Math.random()*cols)}

const blocks=[];
let snake=[
    {
        x:1, y:3
    },  ];

    let intervalid=null;
    let timerintervalid=null;

    let direction="down";
for(let row=0;row<rows;row++)
{
    for(let col=0;col<cols;col++)
    {
        const block=document.createElement("div");
         block.classList.add("block");
         board.appendChild(block);
        //  block.innerText=`${row},${col}`;
         blocks[`${row},${col}`]=block;
        
    }
}
function render()
{
    blocks[`${food.x},${food.y}`].classList.add("food");
    snake.forEach(function(segment)
{
    blocks[`${segment.x},${segment.y}`].classList.add("fill");
    
})
}
render();


function startGame()
{
  intervalid=setInterval(function()
{
      snake.forEach(function(segment)
    {
        blocks[`${segment.x},${segment.y}`].classList.remove("fill");
    });

    // Remove previous food rendering
    blocks[`${food.x},${food.y}`].classList.remove("food");


    let head=null;
   if(direction=="left")
   {
    head={x:snake[0].x  ,  y:snake[0].y-1  }
   }
   else if(direction=="right")
   {
    head={x:snake[0].x  ,  y:snake[0].y+1  }
     
   }
   else if(direction == "up")
{
    head = {x: snake[0].x - 1, y: snake[0].y};
}
else if(direction == "down")
{
    head = {x: snake[0].x + 1, y: snake[0].y};
}
if(head.x<0 || head.x>=rows || head.y<0 || head.y>=cols)
{
    
    clearInterval(intervalid);
    modal.style.display="flex";
    startgamemodal.style.display="none";
    gameovermodal.style.display="flex";
     return;
}
    // Food collision
    //food consume logic
    if(head.x === food.x && head.y === food.y)
    {
        snake.unshift(head);
        score+=10;
        ScoreElement.textContent=score;

        if(score>highscore)
        {
            highscore=score;
            localStorage.setItem("highscore",highscore.toString());
        }
       

        // Generate new food
        food = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols),
        };
  }
    else
    {
        snake.unshift(head);
        snake.pop();
    }

    render();
},300);
}


startbtn.addEventListener("click", () =>
{

    modal.style.display = "none";

    clearInterval(intervalid); // safety
    startGame();
     // start actual game loop
     timerintervalid=setInterval(()=>
    {
        let [min,sec]=time.split("-").map(Number)
        if(sec==59)
        {
            min+=1;
            sec=0;
        
        }
        else
        {
          sec+=1;
        }
        time=`${min}-${sec}`;
        timeElement.textContent=time;
    },1000)
});
restartbtn.addEventListener("click",restart)

function restart()
{
    clearInterval(intervalid);
   
    // clear old snake cells
    snake.forEach(segment =>
    {
        blocks[`${segment.x},${segment.y}`].classList.remove("fill");
    });

    blocks[`${food.x},${food.y}`].classList.remove("food");
      score=0;
     time=`00-00`;
     ScoreElement.textContent=score;
     highscoreElement.textContent=highscore;
     timeElement.textContent=time;

    snake = [{x:1,y:3}];
     
    food =
    {
        x: Math.floor(Math.random()*rows),
        y: Math.floor(Math.random()*cols)
    };

    direction = "down";

    modal.style.display = "none";

    render();

    startGame();
}

addEventListener("keydown", function(event) {
    if(event.key === "ArrowLeft"  && direction !== "right") direction = "left";
    if(event.key === "ArrowRight" && direction !== "left")  direction = "right";
    if(event.key === "ArrowUp"    && direction !== "down")  direction = "up";
    if(event.key === "ArrowDown"  && direction !== "up")    direction = "down";
});
