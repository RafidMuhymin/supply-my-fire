export default function centerScrollContent(containerId: string) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const centerContent = () => {
    const { scrollWidth, clientWidth } = container;

    // If content is wider than container, center it by scrolling to middle
    if (scrollWidth > clientWidth) {
      const scrollOffset = (scrollWidth - clientWidth) / 2;

      container.scrollLeft = scrollOffset;
    }
  };

  // Center immediately on load
  centerContent();

  // Re-center on resize (in case viewport changes)
  window.addEventListener("resize", centerContent);
}
