import { Story, Meta } from '@storybook/html';
import { MessageListItemProps, createMessageListItem } from './ListItem';

export default {
    title: 'Molecules/Messages'
} as Meta;

const Template: Story<MessageListItemProps> = (args: MessageListItemProps) => createMessageListItem(args);

export const ListItem = Template.bind({});
ListItem.args = {
    meta: {
        senderEmail: 'bollo@ngoms.com',
        timeSent: '2 days ago'
    },
    thumbailUrl: 'https://picsum.photos/200/200',
    subject: 'How to manage your working time in this pandemic',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isFavorite: false
};
