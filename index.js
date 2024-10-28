let mode = "dark"; 
const body = document.getElementById("body");

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

