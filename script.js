document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("featureSection");
  const track = document.getElementById("horizontalTrack");
  const tabs = document.querySelectorAll(".tab-item");

  const totalSlides = 4;

  function animateScroll() {
    if (!section || !track) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    const end = sectionHeight - viewportHeight;

    const scrollInside = Math.min(
      Math.max(-rect.top, 0),
      end
    );

    const progress = end === 0 ? 0 : scrollInside / end;

    const move = Math.min(Math.max(progress * 300, 0), 300);

    const moveRounded = Math.round(move * 1000) / 1000;

    track.style.transform = `translate3d(-${moveRounded}vw, 0, 0)`;

    const activeIndex = Math.min(
      Math.floor(progress * totalSlides),
      totalSlides - 1
    );

    tabs.forEach((tab, i) => {
      tab.classList.toggle("is-active", i === activeIndex);
    });

    requestAnimationFrame(animateScroll);
  }

  requestAnimationFrame(animateScroll);
});
document.addEventListener("DOMContentLoaded", () => {

  const specTabs = document.querySelectorAll(".spec-tab");
  const specPanels = document.querySelectorAll(".spec-list");

  specTabs.forEach(tab => {
    tab.addEventListener("click", () => {

      const target = tab.dataset.specTarget;

      // remove active from all tabs
      specTabs.forEach(t => t.classList.remove("is-active"));

      // add active to clicked tab
      tab.classList.add("is-active");

      // hide all panels
      specPanels.forEach(panel => {
        panel.classList.remove("is-active");
      });

      // show correct panel
      const activePanel = document.querySelector(
        `.spec-list[data-spec-panel="${target}"]`
      );

      if (activePanel) {
        activePanel.classList.add("is-active");
      }

    });
  });

});