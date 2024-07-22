
$(".box").click(function() {
  $(this).addClass("active").delay(1000).queue(function(next) {
      $(this).removeClass("active");
      next();
      
      // Check if innerText is "0" and perform an action
      if ($(this).text() === "0") {
          // Add your action here
      }
  });
});

  

$(".reset").click(function(){
  $(this).addClass("active").delay(1000).queue(function(next){
    location.reload();
    $(this).removeClass("active");
    next();
  });
});



let a=0;
let boxes=document.querySelectorAll(".box");
let turn0=true;
let msg=document.querySelector(".msg");
let winmsg=document.querySelector("#winmsg");
const winpattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("button clicked");
    if(turn0===true){
      box.innerText="O";
    
      turn0=false;
    }
    else{
      box.innerText="X";
      turn0=true;
    }
    box.disabled=true;
    
    check_winner();
    
  });
  
});
no_winner=(nowin)=>{
  winmsg.innerText="match draw !";
  msg.classList.remove("hide");
}

winner_message=(winner)=>{

winmsg.innerText=`congratulations! winner is ${winner}`;
msg.classList.remove("hide");

};

check_winner=()=>{
  a++
for(let pattern of winpattern){
  
  
  let pos1=boxes[pattern[0]].innerText;
  let pos2=boxes[pattern[1]].innerText;
  let pos3=boxes[pattern[2]].innerText;
  if(pos1!=""&&pos2!=""&&pos3!=""){
    if(pos1==pos2&&pos2==pos3){
      winner_message(pos1);
    boxes.forEach((box)=> box.disabled=true)
    }else if(a==9){
    no_winner();
  }
    
  }
  
}};


