// script.js
function startFooterAnimation() {
    const footer = document.querySelector('footer');
    footer.classList.add('animate-footer');
  }
  
  function stopFooterAnimation() {
    const footer = document.querySelector('footer');
    footer.classList.remove('animate-footer');
  }
  
  setInterval(() => {
    startFooterAnimation();
    setTimeout(stopFooterAnimation, 1000);
  }, 5000);
  