let mode = "dark"; 
const body = document.getElementById("body");
const buttons = [];



function toggleAnimation(button) {
    if (button.style.animationPlayState !== "running") {
        button.style.animationPlayState = "running";
    } else {
        button.style.animationPlayState = "paused";
    }
}

for (let i = 1; i <= 72; i++) {
    buttons[i] = document.getElementById(`button${i}`);
    let button = buttons[i];
    
    buttons[i].addEventListener("click", () => {
        switch (i) {

            
            case 1:
            case 2:
            case 3:
                
                toggleAnimation(button);
                break;








            default:

                console.log(`Button ${i} clicked, no specific action.`);
        }
    });
}



document.getElementById("title-button").addEventListener("click", function() {
    

    if (mode === "dark") {
        body.style.color = "black"; 
        body.style.backgroundColor = "white"; 
        mode = "light"; 
    } else {
        body.style.color = "white"; 
        body.style.backgroundColor = "black"; 
        mode = "dark"; 
    }
});



