let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn=document.querySelector("#btn");
let msgContainer=document.querySelector(".msg-con");
let msg=document.querySelector("#mag");


let turn0= true;   //playerx,  player0

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    
    [1,4,7],

    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame=() =>{
     turn0= true;
     enableBoxes();
     msgContainer.classList.add("hide");
}







//use eventlistener

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        
        if (turn0){
            box.innerText="x";
            turn0 = false;
        } else{
            box.innerText="o";
            turn0 = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



const showWinner= (winner) =>{
    msg.innerText= `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
     disableBoxes();
};


const checkWinner=()=>{
    for( let pattern of winPatterns){
       
        let pos1val= boxes[pattern[0]].innerHTML; 
        let pos2val= boxes[pattern[1]].innerHTML;
        let pos3val= boxes[pattern[2]].innerHTML;

        if(pos1val !="" && pos2val !=""  && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);