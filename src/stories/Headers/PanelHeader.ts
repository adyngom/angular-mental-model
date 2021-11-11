import './panel-header.css';

export interface PanelHeaderProps {
    title: string;
    subtitle?: string;
}

export const createPanelHeader = (props: PanelHeaderProps) => {
    const { title, subtitle } = props;
    return `
        <header class="panel-header">
            <h2 class="panel-header-title font-bold">${title}</h2>     
            ${subtitle ? `<h3 class="panel-header-subtitle font-subtitle">${subtitle}</h3>` : ''}
        </header>
    `;
}