let btns = document.getElementById("btns");
let character = document.getElementById("character");
let block = document.getElementById("block");
let counter = 0;
function jump() {
  if (character.classList == "animatech") {
    return;
  }
  character.classList.add("animatech");
  setTimeout(function () {
    character.classList.remove("animatech");
  }, 300);
}
function sta() {
  function check() {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    let blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
      dead();
    } else {
      next();
    }
  }
function dead() {
    btns.style.display = "block";
    block.classList.remove("animateb");
    clearInterval(core);
    console.log("dead");
    alert("Game Over. score: "+Math.floor(counter/100));
    let sb = document.getElementById("scorebest");
    if (sb.innerHTML < Math.floor(counter / 100)) {
      sb.innerHTML = Math.floor(counter / 100);
    }
    counter = 0;
}
function next() {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
}
if (block.classList == "animateb") {
    return;
}
block.classList.add("animateb");
let core = setInterval(check, 10);
}

