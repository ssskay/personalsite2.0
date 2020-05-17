const state = {
  idea: 0,
  head: 0,
  body: 0,
  acc:0,
};


const ideaPics = [
  'Pictures/Idea/arblee.png',
  'Pictures/Idea/coda.png',
  'Pictures/Idea/officehours.png',
  'Pictures/Idea/zoomu.png',
  'Pictures/Idea/studykit.png'
];

const ideaDescrip = [
  'ARblee - Consulting retailers to use augmented reality in their physical storefronts to draw people in; arose from Pokemon Go! hype, currently disbanded since retail is dying',
  'Cult of Dope Automations - I love everything super cute, like alpacas, pink, poros (on the heart), and my boyfriend! I got this super cute icon commissioned for me and him for Valentines Day <3',
  'Office Hours - I can be professional if I need to! (even though this is the only professional headshot I have, from my junior year function 4 years ago)',
  'Zoom University - I love everything super cute, like alpacas, pink, poros (on the heart), and my boyfriend! I got this super cute icon commissioned for me and him for Valentines Day <3',
  'Study Kit - I can be professional if I need to! (even though this is the only professional headshot I have, from my junior year function 4 years ago)',
];


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

const accPics = [
  'Pictures/body/bathrobe.png',
];

const accDescrip = [
  "My lit baby, he's quite cute",
];




function newIdea() {
  let fullIdeaDescription = 'Startup: ';
  fullIdeaDescription += ideaDescrip[state.idea];
  const output = document.getElementById('Idea Description');
  output.innerHTML = fullIdeaDescription;
}

function loadIdea() {
  const img = `<img src="${ideaPics[state.idea]}">`;
  const output = document.getElementById('Idea Image');
  output.innerHTML = img;
}

function updateIdeaRight() {
  state.idea += 1;
  if (state.idea > ideaPics.length - 1) {
    state.idea = 0;
  }
  newIdea();
  loadIdea();
}

function updateIdeaLeft() {
  state.idea -= 1;
  if (state.idea < 0) {
    state.idea = ideaPics.length - 1;
  }
  newIdea();
  loadIdea();
}

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

function updateBodyRight() {
  state.body += 1;
  if (state.body > bodyPics.length - 1) {
    state.body = 0;
  }
  newBody();
  loadBody();
}

function updateBodyLeft() {
  state.body -= 1;
  if (state.body < 0) {
    state.body = bodyPics.length - 1;
  }
  newBody();
  loadBody();
}

function newAcc() {
  let fullAccDescription = 'body: ';
  fullAccDescription += accDescrip[state.head];
  const output = document.getElementById('Accessory Description');
  output.innerHTML = fullAccDescription;
}

function loadAcc() {
  const img = `<img src="${accPics[state.acc]}">`;
  const output = document.getElementById('Accessory Image');
  output.innerHTML = img;
}

function updateAccRight() {
  state.acc += 1;
  if (state.acc > accPics.length - 1) {
    state.acc = 0;
  }
  newAcc();
  loadAcc();
}

function updateAccLeft() {
  state.acc -= 1;
  if (state.acc < 0) {
    state.acc = accPics.length - 1;
  }
  newAcc();
  loadAcc();
}

function init() {
  console.log('window has loaded');
  state.idea = Math.floor(Math.random() * (ideaPics.length));
  state.head = Math.floor(Math.random() * (headPics.length));
  state.body = Math.floor(Math.random() * (bodyPics.length));
  state.acc = Math.floor(Math.random() * (accPics.length));
  newHead();
  loadHead();
  newBody();
  loadBody();
  newIdea();
  loadIdea();
  newAcc();
  loadAcc();
}

window.onload = init;