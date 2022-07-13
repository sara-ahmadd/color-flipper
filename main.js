let colorsArray = ['#eb9934', '#aaf752', '#8df2b4', '#7eedeb', '#65aee6', '#6b76ed', '#815adb', '#d482f5', '#eb60e1', '#c91c7b', '#19e6c3', '#ede732', '#e02724', '#978dc4', '#add10f', '#07e094', '#05f5f1', '#f505e5', '#f09ca1', '#edb9e3', '#18328f'];
let simpleColorsArray = ['Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Pink', 'Grey', 'Black', 'rgb(17, 237, 123)', 'rgb(19, 242, 235)', 'rgb(155, 45, 235)', 'rgb(128, 31, 118)'];

let clickBtn = document.querySelector('[name="click-me"]');
let colorH1 = document.querySelector('#color');
let hexColors = document.querySelector('[name="hex"]');
let simpleColors = document.querySelector('[name="simple"]');
let num = document.querySelector('.parent h5');
num.style.display = 'none';

let sum = 0;
let backColor = '';

function changeHexColor() {
  clickBtn.addEventListener('click', () => {
    sum += 1;
    if (sum === colorsArray.length) {
      sum = 0;
    }
    num.innerText = sum;
    backColor = colorsArray[parseInt(num.innerText)];
    document.body.style.backgroundColor = backColor;
    colorH1.innerText = backColor;
    window.localStorage.setItem('body-background', `${backColor}`)
  });
};
changeHexColor();
hexColors.addEventListener('click', () => {
  document.body.style.backgroundColor = '#eee';
  colorH1.innerText = '#eee'
  changeHexColor();
});

document.body.style.backgroundColor = window.localStorage.getItem('body-background');

colorH1.innerText = window.localStorage.getItem('body-background');

function changeSimpleColors() {
  let sum = 0;
  clickBtn.addEventListener('click', () => {
    sum += 1;
    if (sum === simpleColorsArray.length) {
      sum = 0;
    }
    num.innerText = sum;
    backColor = simpleColorsArray[parseInt(num.innerText)];
    document.body.style.backgroundColor = backColor;
    colorH1.innerText = backColor;
  });
};
simpleColors.addEventListener('click', () => {
  document.body.style.backgroundColor = 'Pink';
  colorH1.innerText = 'Pink';
  changeSimpleColors();
});