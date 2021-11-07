// function to render a template inside an HTML element
export function render(template: string, element: HTMLElement) {
  element.innerHTML = template;
};