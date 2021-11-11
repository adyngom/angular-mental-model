import './email-header.css';
import { createTabMenu, TabMenuProps } from '../../Tabmenu';
import { createPanelHeader, PanelHeaderProps } from '../../Headers/PanelHeader';

export interface EmailHeaderProps {
    header: PanelHeaderProps;
    tabMenu: TabMenuProps;
}

export const createEmailHeader = ({ header, tabMenu }: EmailHeaderProps) => {
    const { className, tabs } = tabMenu;
    const { title, subtitle } = header;
    return `
        <div class="email-header">
            <div class="panel-title">
                ${createPanelHeader({ title, subtitle })}
            </div>

            <div class="panel-tabs">
                ${createTabMenu({ className, tabs })}
            </div>
        </div>
    `;
};
