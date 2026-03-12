// VARIABLES THAT STORE THE REFERENCE TO A DOM ELEMENT SELECTED
const bountyText = document.getElementById("bounty-text");
const bountyBtn = document.getElementById("bounty-btn");
const styleText = document.getElementById("style-text");
const styleBtn = document.getElementById("style-btn");

let bountyIndex = 0;

//VARIABLE DECLARATION, VARIABLE NAME STORED IN [...] ARRAY
const bounties = [
  "฿ 60,000,000",
  "฿ 120,000,000",
  "฿ 320,000,000",
  "฿ 1,111,000,000",
];

const swordStyles = [
  "One Sword Style",
  "Two Sword Style",
  "Three Sword Style",
  "King of Hell Three Sword Style",
];

// FUNCTION
function changeBounty() {
  bountyIndex = bountyIndex + 1;

  // COMPARATIVE OPERATOR
  if (bountyIndex >= bounties.length) {
    bountyIndex = 0;
  }

  bountyText.textContent = bounties[bountyIndex];
}

function showRandomStyle() {
  // ARITHMETIC OPERATOR
  const randomIndex = Math.floor(Math.random() * swordStyles.length);

  styleText.textContent = swordStyles[randomIndex];
}

// EVENTS
bountyBtn.addEventListener("click", changeBounty);
styleBtn.addEventListener("click", showRandomStyle);

// LOOP
for (let i = 0; i < swordStyles.length; i++) {
  console.log(swordStyles[i]);
}
