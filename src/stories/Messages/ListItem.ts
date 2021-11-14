import './list-item.css';

export interface MessageListItemProps {
    meta: {
        senderEmail: string;
        timeSent: string;
    },
    thumbailUrl: string;
    subject: string;
    summary: string;
    isFavorite: boolean;
}

export const createMessageListItem = (props: MessageListItemProps) => {
    const { meta, thumbailUrl, subject, summary, isFavorite } = props;
    const { senderEmail, timeSent } = meta;
    return `
        <div class="message-list-item">
            <div class="message-list-item__thumbnail">
                <img src=${thumbailUrl} alt="thumbnail" />
            </div>
            <div class="message-list-item__content">
                <div class="message-list-item__content__header">
                    <div class="message-list-item__content__header__meta">
                        <div class="message-list-item__content__header__sender">${senderEmail}</div>
                        &nbsp;&nbsp; • &nbsp;&nbsp;
                        <div class="message-list-item__content__header__time">${timeSent}</div>
                    </div>
                    <div class="message-list-item__content__header__subject font-semi-bold">${subject}</div>
                </div>
                <div class="message-list-item__content__summary">${summary}</div>
            </div>
            <div class="message-list-item__actions">
                <div class="message-list-item__actions__favorite">
                    <i class="icon icon-favorite ${isFavorite ? 'active' : ''}" />
                </div>
            </div>
        </div>
    `;
};