import { Story, Meta } from '@storybook/html';
import { createRecentEmails, RecentEmailsProps } from './RecentEmails';

export default {
    title: 'Partials/Recent Emails'
} as Meta;

const tabs =  [
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
]

const Template: Story<RecentEmailsProps> = (args: RecentEmailsProps) => createRecentEmails(args);

export const Default: Story<RecentEmailsProps> = Template.bind({});

Default.args = {
    emailHeader: { 
        header: { title: 'Recent Emails', subtitle: 'Last 7 Days' } , 
        tabMenu: { className: 'tab-links', tabs } 
    },
    messages: [
        {
            meta: {
                senderEmail: 'senderone@acme.com',
                timeSent: '3 hours ago'
            },
            subject: 'Water on Earth',
            thumbailUrl: 'https://picsum.photos/200',
            summary: `Where there's water on Earth, you find life as we know it. So if you find water somewhere else, it becomes a remarkable draw to look closer to see if life of any kind is there, even if it's bacterial, which would be extraordinary for the field of biology.`,
            isFavorite: false
        },
        {
            meta: {
                senderEmail: 'sendertwo@acme.com',
                timeSent: '1 day ago'
            },
            subject: 'The Universe does not like singles',
            thumbailUrl: 'https://picsum.photos/200',
            summary: `Philosophically, the universe has really never made things in ones. The Earth is special and everything else is different? No, we've got seven other planets. The sun? No, the sun is one of those dots in the night sky. The Milky Way? No, it's one of a hundred billion galaxies. And the universe - maybe it's countless other universes.`,
            isFavorite: false
        },
        {
            meta: {
                senderEmail: 'senderthree@gmail.com',
                timeSent: '2 days ago'
            },
            subject: `It's time to play`,
            thumbailUrl: 'https://picsum.photos/200',
            summary: `Let me tell you something about full moons: kids don't care about full moons. They'll play in a full moon, no worries at all. They only get scared of magic or werewolves from stupid adults and their stupid adult stories.`,
            isFavorite: true
        }
    ]
};
