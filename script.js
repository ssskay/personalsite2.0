const state = {
  head: 0,
  body: 0,
};

const headPics = [
  'Pictures/Head/chibi.jpeg',
  'Pictures/Head/cute.jpg',
  'Pictures/Head/professional.jpeg',
];

const headDescrip = [
  'I absolutely love anime and what better way to express that than a kawaii anime icon of me?!',
  'I love everything super cute, like alpacas, pink, poros (on the heart), and my boyfriend! I got this super cute icon commissioned for me and him for Valentines Day <3',
  'I can be professional if I need to! (even though this is the only professional headshot I have, from my junior year function 4 years ago)',
];

const bodyPics = [
  'Pictures/body/bathrobe.png',
];

const bodyDescrip = [
  'I love working from home in comfort',
];

function newHead() {
  let fullHeadDescription = 'head: ';
  fullHeadDescription += headDescrip[state.head];
  const output = document.getElementById('Head Description');
  output.innerHTML = fullHeadDescription;
}

function loadHead() {
  const img = `<img src="${headPics[state.head]}">`;
  const output = document.getElementById('Head Image');
  output.innerHTML = img;
}

function updateHeadRight() {
  state.head += 1;
  if (state.head > headPics.length - 1) {
    state.head = 0;
  }
  newHead();
  loadHead();
  console.log(state.head);
}

function updateHeadLeft() {
  state.head -= 1;
  if (state.head < 0) {
    state.head = headPics.length - 1;
  }
  newHead();
  loadHead();
}

function newBody() {
  let fullBodyDescription = 'body: ';
  fullBodyDescription += bodyDescrip[state.head];
  const output = document.getElementById('Body Description');
  output.innerHTML = fullBodyDescription;
}

function loadBody() {
  const img = `<img src="${bodyPics[state.body]}">`;
  const output = document.getElementById('Body Image');
  output.innerHTML = img;
}

function init() {
  console.log('window has loaded');
  state.head = Math.floor(Math.random() * (headPics.length));
  state.body = Math.floor(Math.random() * (bodyPics.length));
  newHead();
  loadHead();
  newBody();
  loadBody();
}

window.onload = init;
