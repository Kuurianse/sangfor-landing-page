window.onscroll = function() {
  let scrollPosition = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollPercent = (scrollPosition / scrollHeight) * 100;
  document.querySelector(".progress-bar").style.width = scrollPercent + "%";
};

AOS.init();