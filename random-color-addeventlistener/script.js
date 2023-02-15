const btn = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn2.onclick = () => {
  const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}