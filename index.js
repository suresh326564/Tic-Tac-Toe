let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".new_btn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector(".msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click",()=>
    {
        console.log("clicked");
       if(turnO){
        box.innerText="O"
     
        turnO=false;
       }
       else{
       box.innerText="X";
       turnO=true;
       }
       box.disabled=true;
       checkWinner();
    });
});
const showWinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
};

const checkTie = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false; // If any box is empty, the game is not a tie
        }
    }
    return true; // All boxes are filled, it's a tie
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
            }
        }
    }

    // Check for a tie
    if (checkTie() && !msgContainer.classList.contains("hide")) {
        msg.innerText = "It's a Tie!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};





const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
    box.innerText="";
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
