let userscore = 0;
let compscore = 0;
 
const choices = document.querySelectorAll(".image");
const msg = document.querySelector("#res");
const userPoints = document.querySelector("#your-score");
const compPoints = document.querySelector("#comp-score");


console.log(msg);

const displayWinner = (userScore,userSelect,compChoice) =>{
    if(userScore){
        userscore++;
        console.log("user win");
        userPoints.innerText = userscore;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        msg.innerText = "User win!! "+userSelect+" beats "+compChoice;

    }
    else {   
        compscore++;
        console.log("comp win");
        compPoints.innerText = compscore;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        msg.innerText = "Comp win!! "+compChoice+" beats "+userSelect;;
    }
}

const draw = () =>{
    console.log("draw")
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
    msg.innerText = "Draw!!";

}


const randomGen = () =>{
    const options = ['stone','paper','scissor'];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const playgame = (userSelect) => {
    console.log(userSelect);
    //user selected choice
    const compChoice = randomGen();
    console.log(compChoice);
    if(userSelect === compChoice){
        //draw 
        draw();
    }
    else{
        let userScore = true;
        if(userSelect =="stone"){
            // scissor, paper => computer
            userScore = compChoice === "scissor"?true:false;
        }
        else if(userSelect=="paper"){
            // stone, scissor
            userScore = compChoice ==="stone"?true:false;
        }
        else{
            // stone , paper
            userScore = compChoice === "paper" ? true:false;
        }
        displayWinner(userScore,userSelect,compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userSelect = choice.getAttribute("id");
        // console.log("choice was clicked",id);
        playgame(userSelect);
    })
})