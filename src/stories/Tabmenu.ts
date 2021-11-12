import { TabProps, createTab } from "./Tab";
import './tabmenu.css';

export interface TabMenuProps {
    className?: string | string[] | { [name: string]: boolean } | undefined;
    tabs: TabProps[];
}

export const createTabMenu = (props: TabMenuProps) => {
    const { className, tabs } = props;
    const tabMenu = `
        <ul class="${className}">
            ${tabs.map((tab) => createTab(tab)).join("")}
        </div>
    `;
    return tabMenu;
};