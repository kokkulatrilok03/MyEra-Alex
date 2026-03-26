const specTabs = document.querySelectorAll(".spec-tab");
const specPanels = document.querySelectorAll(".spec-list");

specTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.specTarget;

    specTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    specPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.specPanel === target);
    });
  });
});

const benefitMarkers = document.querySelectorAll(".benefit-marker");
const benefitCards = document.querySelectorAll(".benefit-card");

benefitMarkers.forEach((marker) => {
  marker.addEventListener("click", () => {
    const targetIndex = Number(marker.dataset.benefitIndex);

    benefitMarkers.forEach((item, index) => {
      item.classList.toggle("is-active", index === targetIndex);
    });

    benefitCards.forEach((card, index) => {
      card.classList.toggle("is-active", index === targetIndex);
    });
  });
});
