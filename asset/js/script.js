let myDate = new Date();
let hours = myDate.getHours();

let greet;

if (hours < 12) {
  greet = 'Ohayou Gozaimasu';
} else if (hours >= 12 && hours <= 17) {
  greet = 'Konnichiwa';
} else if (hours >= 17 && hours <= 24) {
  greet = 'Konbanwa';
}

document.getElementById('greetings').innerText = greet;
