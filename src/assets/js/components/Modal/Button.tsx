import React from 'react';

const BACKGROUND_STYLES = 'bg-black hover:opacity-50';
const CONTAINER_STYLES = 'rounded-full text-white';
const SIZE_STYLES = 'p-2';
const TRANSITION_STYLES = 'transition-all';

type ButtonProps = {
    children: React.ReactNode;
    extraClasses?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, extraClasses, onClick }: ButtonProps) => {
    const styles = [
        BACKGROUND_STYLES,
        CONTAINER_STYLES,
        SIZE_STYLES,
        TRANSITION_STYLES,
        extraClasses,
    ];
    return (
        <button className={styles.join(' ')} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
