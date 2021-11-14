import { Story, Meta } from '@storybook/html';
import { createEmailHeader, EmailHeaderProps } from './EmailHeader';
import * as PanelsHeaderStories from '../../Headers/PanelHeader.stories';
import * as TabsMenuStories from '../../Tabmenu.stories';

export default {
    title: 'Components/EmailHeader',
    argTypes: {
        header: {},
        tabMenu: {},
    },
} as Meta;

const Template: Story<EmailHeaderProps> = (args) => createEmailHeader(args);

export const Default: Story<EmailHeaderProps> = Template.bind({});

Default.args = {
    header: { title: 'Recent emails', subtitle: 'You have 5 new emails' },
    tabMenu: {className: 'tab-links', tabs: TabsMenuStories.Tabsmenu.args.tabs},
};