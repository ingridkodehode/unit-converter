let input = document.getElementById("input-el");
let btn = document.getElementById("btn-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

function newLength() {
  let resultMeters = input.value * 3.281;
  let resultFeet = input.value / 3.281;
  lengthEl.textContent = `${input.value} meters = ${resultMeters.toFixed(
    3
  )} feet  |  
  ${input.value} feet = ${resultFeet.toFixed(3)} meters`;
}

function newVolume() {
  let resultLiters = input.value * 0.264;
  let resultGallons = input.value / 0.264;
  volumeEl.textContent = `${input.value} liters = ${resultLiters.toFixed(
    3
  )} gallons  |  
  ${input.value} gallons = ${resultGallons.toFixed(3)} liters`;
}

function newMass() {
  let resultKilos = input.value * 2.204;
  let resultPounds = input.value / 2.204;
  massEl.textContent = `${input.value} kilos = ${resultKilos.toFixed(
    3
  )} pounds  |  
  ${input.value} pounds = ${resultPounds.toFixed(3)} kilos`;
}

function doTheThing() {
  newLength();
  newVolume();
  newMass();
}
