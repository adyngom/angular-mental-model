import { Story, Meta } from '@storybook/html';
import { createPost, PostProps } from './Post';

export default {
    title: 'Fitmail/Post',
    argTypes: {
        goToPost: { action: 'goToPost' }
    }
} as Meta;

const Template: Story<PostProps> = (args: PostProps) => createPost(args);

export const Default = Template.bind({});

Default.args = {
    post: {
        userId: 1,
        id: 1,
        title: 'Post title',
        body: 'Post body'
    }
};