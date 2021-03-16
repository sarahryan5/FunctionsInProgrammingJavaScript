var fireButton = document.createElement("button");
var iceButton = document.createElement("button");
var poisonButton = document.createElement("button");
var dragonEle = document.createElement("div");
var winnerEle = document.createElement("div");

var dragonDamage = 0;

fireButton.innerHTML = "Fire Attack";
iceButton.innerHTML = "Ice Attack";
poisonButton.innerHTML = "Poison Attack";
dragonEle.innerHTML = "Dragon Damage: " + dragonDamage;

fireButton.addEventListener("click", function () {
  attack(3, "fire");
});
iceButton.addEventListener("click", function () {
  attack(1, "ice");
});
poisonButton.addEventListener("click", function () {
  attack(4, "poison");
});

function attack(damage, attackType) {
  if (attackType == "fire") {
    dragonDamage = dragonDamage + (damage - 1);
  } else if (attackType == "ice") {
    dragonDamage = dragonDamage + (damage + 1);
  } else {
    dragonDamage = dragonDamage + damage;
  }
  
  dragonEle.innerHTML = "Dragon Damage: " + dragonDamage;

  if (dragonDamage >= 10) {
    winnerEle.innerHTML = "You win!";
  }
}

document.body.appendChild(fireButton);
document.body.appendChild(iceButton);
document.body.appendChild(poisonButton);
document.body.appendChild(dragonEle);
document.body.appendChild(winnerEle);