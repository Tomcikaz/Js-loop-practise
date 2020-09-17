let html = '';
let red;
let green;
let blue;
let randomRGB;

function mix() { 
  return Math.floor(Math.random() * 256);
}

for (i = 1; i <= 10; i ++) {

  randomRGB = `rgb( ${mix(red)}, ${mix(green)}, ${mix(blue)} )`;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
  
  }

document.querySelector('main').innerHTML = html;



//for (i = 1; i <= 10; i ++) {
//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">${i}</div>`;
//
//}
