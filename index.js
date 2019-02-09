

// populate the invitation when the inputs are edited 


function populateInvite() {


// populate Names
let names = document.getElementById("names")


names.innerHTML = `${document.getElementById("groomName").value} & ${document.getElementById("brideName").value}`;

// populate Initials 

let initials = document.getElementById("initials")

initials.innerHTML = `${document.getElementById("groomName").value.charAt(0)} & ${document.getElementById("brideName").value.charAt(0)}`

// transform and populate date 
let str = dateInput.value;
let arr = str.split("-");

if (arr.length !== 1) {
  date.innerHTML = `${arr[2]}/${arr[1]}/${arr[0]}`
  
}

//populate standard text
document.getElementById("text").innerHTML = "You are cordially invited to the wedding of"


// populate venue
let venue = document.getElementById("venue")

venue.innerHTML = document.getElementById("venueInput").value;

}


function changeStyleToSpring () {
    document.querySelector("#formal, #fireworks, #spring").id = "spring";
}

function changeStyleToFormal () {
  document.querySelector("#formal, #fireworks, #spring").id = "formal";
}

function changeStyleToFireworks(){
    document.querySelector("#formal, #fireworks, #spring").id = "fireworks";

}


//listen for any input 
function changeEvent(){
  document.addEventListener("input",populateInvite)
}

// listen for loaded
window.onload = function(){ 
document.getElementById("formalButton").onclick = changeStyleToFormal;
document.getElementById("springButton").onclick = changeStyleToSpring;
document.getElementById("fireworksButton").onclick = changeStyleToFireworks;
changeEvent();
};

