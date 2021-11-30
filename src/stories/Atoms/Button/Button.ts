import './button.css';

export interface ButtonProps {
    level?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    withSmallIcon?: boolean;
    withLargeIcon?: boolean;
    IconOnly?: boolean;
    transparent?: boolean;
    label?: string;
    onClick?: () => void;
}

export const createButton = ({
    label = 'Button',
    level = 'primary',
    size = 'medium',
    type = 'button',
    disabled = false,
    withSmallIcon = false,
    withLargeIcon = false,
    IconOnly = false,
    transparent = false,
    onClick,
}: ButtonProps) => {
    const button = document.createElement('button');
    button.classList.add(`btn`, `btn-${level}`, `btn-${size}`, `font-medium`);
    if (disabled) {
        button.classList.add('btn-disabled');
        button.setAttribute('disabled', 'disabled');
    }
    if (withSmallIcon) {
        button.classList.add('btn-with-icon icon-small');
    }
    if (withLargeIcon) {
        button.classList.add('btn-with-icon icon-large');
    }
    if (IconOnly) {
        button.classList.add('btn-icon-only');
    }
    if (transparent) {
        button.classList.add('btn-transparent');
    }

    if(label && !IconOnly) {
        button.innerText = label;
    }

    if(!label && !IconOnly) {
        throw new Error('Button not marked as "Icon Only" must have a label');
    }

    button.type = type;
    button.addEventListener('click', onClick);

    return button;
}
