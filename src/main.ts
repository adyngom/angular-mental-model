import 'reflect-metadata';
import { PanelHeaderComponent } from './components/PanelHeader/PanelHeader';
import { render } from "./Utils";
import "./style.css";

(async function(document) {
    const panelHeader = new PanelHeaderComponent({title: "Recent Emails", subtitle: "Lorem ipsum dolor sit amet"});

    let appHeader = panelHeader.getPanelHeader();

    render(appHeader, "#app");
   
})(document);

