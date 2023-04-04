import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime() {
  player.getCurrentTime().then(time => {
    localStorage.setItem('videoplayer-current-time', Math.round(time));
  });
}

window.addEventListener('load', () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});
