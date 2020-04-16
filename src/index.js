import './style.scss';
import $ from 'jquery';

let time = 0;
setInterval(() => {
  time += 1;
  const message = `You've been on this page for ${time.toString()} seconds.`;
  $('#main').html(message);
}, 1000);
