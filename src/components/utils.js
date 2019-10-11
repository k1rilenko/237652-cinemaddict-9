export const utils = {
  position: {
    AFTERBEGIN: `start`,
    BEFOREEND: `end`
  },
  createElement(template) {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;
    return newElement.firstChild;
  },
  render(container, element, position) {
    switch (position) {
      case utils.position.AFTERBEGIN:
        container.prepend(element);
        break;
      case utils.position.BEFOREEND:
        container.append(element);
        break;
    }
  },
  unrender(element) {
    if (element) {
      element.remove();
    }
  }
};
