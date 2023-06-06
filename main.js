// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  // Display Name and Family of All Colors
  outputEl.innerHTML = "<h3>Display All Colors</h3>";

  for (let i = 0; i < colorData.length; i++) {
    let family = colorData[i].family;
    let name = colorData[i].name;
    outputEl.innerHTML += `<p>${name}, ${family}</p>`;
  }
}

function brightColors() {
  // Display Name and Brightness of All Colors with a Brightness of 200 and Higher
  outputEl.innerHTML = "<h3>Display Bright Colors</h3>";
  for (let i = 0; i < colorData.length; i++) {
    let name = colorData[i].name;
    let brightness = colorData[i].brightness;
    if (colorData[i].brightness >= 200) {
      outputEl.innerHTML += `<p>${name}, ${brightness}</p>`;
    }
  }
}
function redPinkFamilies() {
  // Count Colors in Red/Pink Families
  outputEl.innerHTML = "<h3>Count Red/Pink Family Colors</h3>";
  for (let i = 0; i < colorData.length; i++) {
    let name = colorData[i].name;
    let family = colorData[i].family;
    if (colorData[i].family == "Red" || colorData[i].family == "Pink") {
      outputEl.innerHTML += `<p>${name}, ${family}</p>`;
    }
  }
}

function familySearch() {
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Family Search</h3>";
  count = 0;
  let familySearch = prompt("enter a family");
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family == familySearch) {
      count++;
      let name = colorData[i].name;
      let family = colorData[i].family;
      outputEl.innerHTML += `<p>${name}, ${family}</p>`;
    }
  }
  outputEl.innerHTML += count;
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Start Letter Search</h3>";
  let letterSearch = prompt("enter a letter");
  let count = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].name[0] == letterSearch) {
      count++;
      let name = colorData[i].name;
      outputEl.innerHTML += `<p>${name}</p>`;
    }
  }
  outputEl.innerHTML += count;
}
