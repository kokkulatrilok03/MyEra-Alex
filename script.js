document.addEventListener("DOMContentLoaded", () => {
  // 1. Specification Tabs Logic
  const specTabs = document.querySelectorAll(".spec-tab");
  const specPanels = document.querySelectorAll(".spec-list");

  specTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
          const target = tab.dataset.specTarget;

          specTabs.forEach(t => t.classList.remove("is-active"));
          tab.classList.add("is-active");

          specPanels.forEach(panel => {
              panel.classList.toggle("is-active", panel.dataset.specPanel === target);
          });
      });
  });

  // 2. Benefits / Features Logic
  const benefitMarkers = document.querySelectorAll(".benefit-marker");
  const benefitCards = document.querySelectorAll(".benefit-card");

  benefitMarkers.forEach((marker) => {
      marker.addEventListener("click", () => {
          const targetIndex = parseInt(marker.dataset.benefitIndex);

          // Update markers
          benefitMarkers.forEach(m => m.classList.remove("is-active"));
          marker.classList.add("is-active");

          // Update cards
          benefitCards.forEach((card, index) => {
              card.classList.toggle("is-active", index === targetIndex);
          });
      });
  });
});