import { createEmailHeader, EmailHeaderProps } from "../Sections/EmailHeader/EmailHeader";
import { createMessageListItem, MessageListItemProps } from "../Messages/ListItem";

export interface RecentEmailsProps {
    emailHeader: EmailHeaderProps;
    messages: MessageListItemProps[];
}

export const createRecentEmails = ({emailHeader , messages }: RecentEmailsProps) => {
    const section = document.createElement("section");
    section.classList.add("panel");

    const header = createEmailHeader(emailHeader);

    section.insertAdjacentHTML("afterbegin", header);

    const list = document.createElement("div");
    list.classList.add("message-list");

    list.innerHTML = messages.map(createMessageListItem).join("");

    section.insertAdjacentElement("beforeend", list);

    return section;
};
