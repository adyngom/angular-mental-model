import { Story, Meta } from '@storybook/html';
import { PanelHeaderProps, createPanelHeader } from "./PanelHeader";

export default {
    title: 'Atoms/Headers'
} as Meta;

const Template: Story<PanelHeaderProps> = (args: PanelHeaderProps) => createPanelHeader(args);

export const WithoutSubtitle: Story<PanelHeaderProps> = Template.bind({});

WithoutSubtitle.args = {
    title: 'Pie Chart'
};

export const WithSubtitle: Story<PanelHeaderProps> = Template.bind({});

WithSubtitle.args = {
    title: 'Recent Emails',
    subtitle: 'Lorem ipsum dolor sit amet'
};

