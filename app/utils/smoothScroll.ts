export const smoothScroll = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 90; // height of your fixed navbar
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
