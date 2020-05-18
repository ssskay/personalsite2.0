const state = {
  idea: 0,
  head: 0,
  body: 0,
  acc:0,
};


const ideaPics = [
  'Pictures/Idea/arblee.png',
  'Pictures/Idea/officehours.png',
  'Pictures/Idea/studykit.png',
  'Pictures/Idea/coda.png',
  'Pictures/Idea/zoomu.png',
  'Pictures/Idea/ideas.png',
];

const ideaDescrip = [
  '<strong>ARblee (2016):</strong> Platform for retailers to use augmented reality in their physical storefronts during the peak of Pokemon Go! hype <br> <strong>Status: </strong> Disbanded since retail is dying',
  '<strong>Office Hours (2018):</strong> Organzied archieve of class syllabi, textbooks, exams, office hour notes and more <br> <strong>Status: </strong> Disbanded due to issues onboarding professors and content copyright',
  '<strong>Study Kit (2019): </strong>Termly subscription box that comes with essential school supplies and pre-made study material to make back-to-school shopping easier  <br> <strong>Status: </strong>Disbanded due to similarities to exisiting competition',
  '<strong>Cult of Dope Automations (CoDA) (2019): </strong> Brand that encourages others to use automation tools to make their lives easier <br> <strong>Status: </strong> Currently working on pre-made automations for the elderly and startups',
  '<strong>Zoom University (2020):</strong> Parody brand of Zoom to raise money for COVID-19 relief by commissioning artists who have lost their convention income <br> <strong>Status: </strong> I have a lot of fake Zoom University merch and a storefront coming Summer 2020',
  '<strong>Literally all of them:</strong> I brainstorm startup business plans for fun and would love the oppertunity to grow my technicals skills at DALI and help others make their startup dreams come true.',
];


const headPics = [
  'Pictures/Head/chibi.jpeg',
  'Pictures/Head/cute.jpg',
  'Pictures/Head/professional.jpeg',
];

const headDescrip = [
  "<strong>An anime fanatic:</strong> What better way to express that than a kawaii anime icon of me?! It helps that I actually super happy like an anime girl since I can truly express myself at Dartmouth with friends at DALI",
  '<strong>A cute girl:</strong> I love everything cute!! My favorites include alpacas, the color pink pink, poros (on the heart), and my boyfriend! I got matching icons commissioned for us on Valentines Day <3',
  "<strong>A 'normal' person:</strong> I figured I should throw in a professional headshot, even though it's from my junior year function four years ago.",

];

const bodyPics = [
  'Pictures/body/bathrobe.png',
  'Pictures/body/canadagoose.jpg',
  'Pictures/body/magicalgirl.png',
];

const bodyDescrip = [
  "<strong>Home:</strong> I'm determine to work from home full time in the future so I can code in maximum fluffy comfort. This is also how I feel internally thinking about working in DALI's chill and cozy environment! :D",
  "<strong>Dartmouth:</strong> My fragile Hawaii/Singapore-raised body would not last a single day at Dartmouth without this jacket by my side",
  "<strong>An Anime Convention: </strong>Mandatory Comic-Con/Anime Expo attire. My closet is great to raid for flair during any spontaneous occassion",
];

const accPics = [
  'Pictures/acc/litbaby.jpeg',
  'Pictures/acc/beats.png',
  'Pictures/acc/switch.png',
  'Pictures/acc/laptop.png',
];

const accDescrip = [
  "<strong>Flare:</strong> My baby plush alpaca who I share with my boyfriend. Debugging bff. He's the cutest lit baby ever",
  "<strong>Beats Headphones:</strong> You will literally never see me without these on. If you need new chill beats to study to, hit me up. Playlists range from anime soundtracks to K-pop and classic jazz",
  "<strong>Nintendo Switch:</strong> Would you believe me if I told you that I've met most of my friends at Dartmouth through defeating them in Super Smash Bros?",
  "<strong>My laptop:</strong> Am I streaming chill beats to study to, designing new stickers or coding dope projects for DALI? Hire me to find out ;) 90% of stickers on my laptop were made by me!",
];


function newIdea() {
  let fullIdeaDescription = ideaDescrip[state.idea];
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
  let fullHeadDescription = headDescrip[state.head];
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
  let fullBodyDescription = bodyDescrip[state.body];
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
  let fullAccDescription = accDescrip[state.acc];
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

function saraResults(){
  console.log("success!");
}

window.onload = init;