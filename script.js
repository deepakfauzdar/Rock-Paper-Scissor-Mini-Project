let userCount=0;
let compCount=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScore=document.getElementById("me-count");
let compScore=document.getElementById("comp-count");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=  Math.floor(Math.random()*3);
    return options[randomIdx];
}

const draw=()=>{
   msg.innerText="Sorry Match Draw!!Please start Again"
  msg.style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
 if(userWin){
    userCount+=1;
    userScore.innerText=userCount;
    msg.innerText=`Congratulations!! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
 }else{
   compCount+=1;
   compScore.innerText=compCount;
    msg.style.backgroundColor="red";
    msg.innerText=`OOPS!! ${compChoice} beats your ${userChoice}`;
 }
}

const playGame=(userChoice)=>{
  const compChoice=genCompChoice();

  //here comes the logic part or comparison between user and computer
  let userWin=true;
  
  if(userChoice===compChoice){
   draw();
  }else{
   if(userChoice==="rock"){
      //comp choice-->paper/scissor
      userWin=compChoice==="paper"?false:true;
   }else if(userChoice==="paper"){
      //comp choice-->rock,scissor
      userWin=compChoice==="rock"?true:false;
   }else{
      userWin=compChoice==="rock"?false:true;
   }
   showWinner(userWin,userChoice,compChoice);
  }

}

choices.forEach( (choice)=>{
//    console.log(choice);
   choice.addEventListener("click", function(){
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
   })
})