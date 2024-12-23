const videoPlayer = document.getElementById('video-player');
const videoList = document.getElementById('video-list').children;

function changeVideo(e) {
  if (e.target.tagName === 'VIDEO') {
    const videoSrc = e.target.dataset.src;
    videoPlayer.src = videoSrc;
    videoPlayer.load();
    videoPlayer.play();
  }
}

for (const video of videoList) {
  video.addEventListener('click', changeVideo);
}

let startY;
let isDragging = false;
videoList[0].click(); // 初始加载第一个视频并播放

document.addEventListener('touchstart', (e) => {
  startY = e.touches[0].pageY;
  isDragging = false;
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) {
    isDragging = true;
  }
  const currentY = e.touches[0].pageY;
  const diffY = currentY - startY;
  if (Math.abs(diffY) > 50) {
    if (diffY > 0 && document.activeElement!== videoList[0]) {
      const currentIndex = Array.from(videoList).indexOf(document.activeElement);
      videoList[currentIndex - 1].click();
    } else if (diffY < 0 && document.activeElement!== videoList[videoList.length - 1]) {
      const currentIndex = Array.from(videoList).indexOf(document.activeElement);
      videoList[currentIndex + 1].click();
    }
  }
});
