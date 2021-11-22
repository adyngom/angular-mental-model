import { Story, Meta } from '@storybook/html';
import { createButton, ButtonProps } from './Button';

export default {
    title: 'Atoms/Button',
    argTypes: {
        label: { control: 'text' },
        level: { control: 'text'},
        size: { 
            control: { type: 'select'},
            options: ['small', 'medium', 'large'] ,
        },
        type: { 
            control: { type: 'select'},
            options: ['button', 'submit', 'reset'] ,
        }
    }
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return createButton(args);
};
const PrimaryArgs: ButtonProps = {
    level: 'primary',
    label: 'Compose Email',
    size: 'large',
    type: 'button',
    disabled: false,
    withSmallIcon: false,
    withLargeIcon: false,
    IconOnly: false,
    transparent: false,
};

export const Primary = Template.bind({});
Primary.args = {
    ...PrimaryArgs
};

export const PrimaryTransparent = Template.bind({});
PrimaryTransparent.args = {
    ...PrimaryArgs,
    transparent: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    ...PrimaryArgs,
    level: 'secondary'
};

export const SecondaryTransparent = Template.bind({});
SecondaryTransparent.args = {
    ...PrimaryArgs,
    level: 'secondary',
    transparent: true
};
