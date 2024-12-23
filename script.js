const videos = document.querySelectorAll('.video');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;
      if (!video.src) {
        video.src = video.dataset.src;
      }
      entry.target.play();
    }else entry.target.pause();
  });
}, { threshold: 0.7 });
videos.forEach(v => observer.observe(v));

