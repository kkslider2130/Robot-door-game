let doorImage1 = document.querySelector('#door1');
let doorImage2= document.querySelector('#door2')
const doorImage3= document.querySelector('#door3')
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
let spaceDoorPath ='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'

let currentlyPlaying = true;
let numClosedDoors = 3;

const startButton = document.querySelector('#start');

let openDoor1 = botDoorPath;

let openDoor2 = beachDoorPath;

let openDoor3 = spaceDoorPath;

const randomChoreDoorGen = () => {
  const choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor===0){
     openDoor1 = botDoorPath
     openDoor2 = beachDoorPath
     openDoor3 = spaceDoorPath
     }else if(choreDoor===1){
         openDoor2 = botDoorPath
         openDoor1 = spaceDoorPath
         openDoor3 = beachDoorPath

  }else{
         openDoor3 = botDoorPath
         openDoor1 = beachDoorPath
         openDoor2 = spaceDoorPath

  }
}
const isBot =(door)=>{
  if(door.src===botDoorPath){
    return true;
  }else{
    return false;
  }
}
const isClicked=(door)=>{
  if(door.src===closedDoorPath){
     return false;
     }else{
       return true;
     }
  
}
const playDoor = (door) =>{
  numClosedDoors --;
  if(numClosedDoors===0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver()
  }
}


doorImage1.onclick=()=>{
  if(currentlyPlaying&&!isClicked(doorImage1)){doorImage1.src=openDoor1;
  playDoor(doorImage1)}
}
doorImage2.onclick=()=>{
  if(currentlyPlaying&&!isClicked(doorImage2)){doorImage2.src=openDoor2;
  playDoor(doorImage2)}
}
doorImage3.onclick=()=>{
  if(currentlyPlaying&&!isClicked(doorImage3)){doorImage3.src=openDoor3;
  playDoor(doorImage3)}
}
startButton.onclick=()=>{
  if(currentlyPlaying===false){startRound()}
}
const startRound=()=>{
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  numClosedDoors=3;
  startButton.innerHTML='Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGen()


}

const gameOver = (status) =>{
  if(status === 'win'){
    startButton.innerHTML='You win! Play again?'
  }else{
    startButton.innerHTML ='Game over! Play again?'
  }
  currentlyPlaying = false;
}

startRound()