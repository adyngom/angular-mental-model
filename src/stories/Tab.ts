export interface TabProps  {
    className?: string | string[] | { [name: string]: boolean } | undefined;
    disabled?: boolean | undefined;
    disabledClassName?: string | undefined;
    selectedClassName?: string | undefined;
    tabIndex?: string | undefined;
    tabTarget: string;
    tabTitle: string;
}

export const createTab = (props: TabProps) => {
    const { className, disabled, disabledClassName, selectedClassName, tabIndex, tabTarget, tabTitle } = props;
    return `
        <li
            class="${className} ${selectedClassName || ''} ${disabledClassName || ''}"
            tabindex="${tabIndex}"
            disabled="${disabled}"
            >
            <a href="#${tabTarget}">${tabTitle}</a>
        </li>
    `;
};