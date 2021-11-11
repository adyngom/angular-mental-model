import { Story, Meta } from '@storybook/html';
import { createTabMenu, TabMenuProps } from './Tabmenu';

export default {
    title: 'Fitmail/Tabmenu',
    argTypes: {
        tabs: {
            control: "array"
        }
    }
} as Meta;

const Template: Story<TabMenuProps> = (tabMenu:TabMenuProps) => {
    return createTabMenu(tabMenu);
};

export const Default = Template.bind({});

Default.args = {
    className: "tab-links",
    tabs: [
    {
        className: 'tab',
        disabled: false,
        selectedClassName: 'selected',
        tabTarget: "important",
        tabTitle: "Important"
    },
    {
        className: 'tab',
        disabled: false,
        tabTarget: "social",
        tabTitle: "Social"
    },
    {
        className: 'tab',
        disabled: false,
        tabTarget: "promotions",
        tabTitle: "Promotions"
    }
]};

