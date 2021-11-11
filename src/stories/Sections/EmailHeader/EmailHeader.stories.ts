import { Story, Meta } from '@storybook/html';
import { createEmailHeader, EmailHeaderProps } from './EmailHeader';
import * as PanelsHeaderStories from '../../Headers/PanelHeader.stories';
import * as TabsMenuStories from '../../Tabmenu.stories';

export default {
    title: 'Components/EmailHeader',
} as Meta;

const Template: Story<EmailHeaderProps> = (args) => createEmailHeader(args);

export const Default = Template.bind({});

Default.args = {
    header: PanelsHeaderStories.WithSubtitle.args,
    tabMenu: TabsMenuStories.Tabsmenu.args
};