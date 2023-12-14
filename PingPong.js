let red = document.querySelector("#red");
let redScore = document.querySelector("#redScore");
let blue = document.querySelector("#blue");
let blueScore = document.querySelector("#blueScore");
let input = document.querySelector("input");
let redb = document.querySelector("#redb");
let blueb = document.querySelector("#blueb");
let reset = document.querySelector("#reset");
let redbox = document.querySelector("#redbox");
let bluebox = document.querySelector("#bluebox");

blueb.addEventListener("click", () => {
    let b = blueScore.innerHTML;
    ++b;
    blueScore.innerText = b;
    if (blueScore.innerText == input.value && input.value != "0") {
        bluebox.style.backgroundColor = "green";
        bluebox.style.color = "white";
        redb.disabled = "true";
        blueb.disabled = "true";
    }
})

redb.addEventListener("click", () => {
    let r = redScore.innerHTML;
    ++r;
    redScore.innerText = r;
    if (redScore.innerText == input.value && input.value != "0") {
        redbox.style.backgroundColor = "green";
        redbox.style.color = "white";
        redb.disabled = "true";
        blueb.disabled = "true";
    }
})

reset.addEventListener("click", () => {
    redScore.innerText = 0;
    blueScore.innerText = "0";
    input.value = "0";
    bluebox.style.backgroundColor = "white";
    bluebox.style.color = "blue";
    redbox.style.backgroundColor = "white";
    redbox.style.color = "red";
    blueb.attributes.removeNamedItem("disabled")
    redb.attributes.removeNamedItem("disabled")
})

