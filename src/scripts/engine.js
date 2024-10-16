const emojis = [
  "👽",
  "👽",
  "👻",
  "👻",
  "🤑",
  "🤑",
  "🎁",
  "🎁",
  "💎",
  "💎",
  "🎱",
  "🎱",
  "🍺",
  "🍺",
  "🍕",
  "🍕" , 
];
let openCards = [];


let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
let seconds = 0;
let minutes = 0;
setInterval(time, 1000);

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Fantástico! Você encontrou todos os emojis!");
        location.reload();
    }
}

function time(){
    seconds++;

    let clock = "";

    if (seconds < 10) {
        clock = "0" + minutes + ":0" + seconds;
    }else if(seconds === 60){
        minutes++;
        seconds = 0;
        clock = "0" + minutes + ":" + seconds;
    }else{
        clock = "0" + minutes + ":" + seconds;
    }

    document.querySelector("#clock").innerHTML = clock;
}
