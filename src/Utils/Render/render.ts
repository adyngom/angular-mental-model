// function to render a template inside an HTML element
export function render(template: string, target: string) {
  const element = document.querySelector(target);
  const fragment = document.createRange().createContextualFragment(template);

  if(!!element) element.appendChild(fragment);
};