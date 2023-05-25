import '/src/css/common.css';
import Player from '@vimeo/player';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  const stringifyData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, stringifyData);
};
player.on('timeupdate', throttle(onPlay, 1000));

function resumePlayback() {
  if (localStorage.getItem(TIME_KEY) === null) {
    return;
  }
  const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
  if (paused) {
    player.setCurrentTime(paused).catch(function (error) {
      switch (error.name) {
        case 'Error':
          break;
        default:
          break;
      }
    });
  }
}
player.on('ready', resumePlayback);
