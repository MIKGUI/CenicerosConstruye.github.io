// =========================
// VIDEO DE BIENVENIDA
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("video-overlay");
  const video = document.getElementById("intro-video");

  if (overlay && video) {
    if (!sessionStorage.getItem("videoShown")) {
      overlay.style.display = "flex";

      video.addEventListener("ended", () => {
        overlay.style.display = "none";
        sessionStorage.setItem("videoShown", "true");
      });
    } else {
      overlay.style.display = "none";
    }
  }

  // =========================
  // INDICADOR NEGRO EN SECOND NAV
  // =========================
  const secondNav = document.getElementById('second-nav');
  if (secondNav) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    secondNav.appendChild(indicator);

    const links = secondNav.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        const rect = e.target.getBoundingClientRect();
        const navRect = secondNav.getBoundingClientRect();

        indicator.style.width = rect.width + 'px';
        indicator.style.left = (rect.left - navRect.left) + 'px';
        indicator.style.opacity = '1';
      });
    });

    secondNav.addEventListener('mouseleave', () => {
      indicator.style.width = '0';
      indicator.style.opacity = '0';
    });
  }
});
