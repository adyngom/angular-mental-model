import { r as registerInstance, h } from './index-c189c62d.js';

const panelHeaderCss = ":host{display:block}.panel-header-title+.panel-header-subtitle{margin-top:0.625rem;color:var(--secondary-text)}";

let PanelHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("header", { class: "panel-header" }, h("h2", { class: "panel-header-title font-bold" }, this.headerTitle), this.subtitle ? h("h3", { class: "panel-header-subtitle font-subtitle" }, this.subtitle) : ''));
  }
};
PanelHeader.style = panelHeaderCss;

export { PanelHeader as panel_header };
