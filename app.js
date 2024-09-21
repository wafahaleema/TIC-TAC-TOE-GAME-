let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn"); 
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // true for playerO, false for playerX

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    boxes.forEach(box => {
        box.classList.remove('disabled'); 
        box.innerText = "";
    });
}

const disableBoxes = () => {
    boxes.forEach(box => {
        box.classList.add('disabled');
    });
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return; 
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.classList.contains('disabled')) {
            box.innerText = turnO ? "O" : "X";
            box.classList.add('disabled'); 
            turnO = !turnO;
            checkWinner();
        }
    });
});

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame); 



