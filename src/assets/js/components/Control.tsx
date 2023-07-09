import React from 'react';

const BACKGROUND_STYLES = 'bg-black hover:opacity-50 text-white';
const CONTAINER_STYLES =
    'flex items-center justify-center rounded-full text-2xl';
const SIZE_STYLES = 'h-6 sm:h-8 md:h-9 p-0.5 sm:p-1 w-6 sm:w-8 md:w-9';
const TRANSITION_STYLES = 'transition-all';

type ControlProps = {
    children: React.ReactNode;
    extraClasses?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Control = ({
    children,
    extraClasses,
    onClick,
    ...props
}: ControlProps) => {
    const styles = [
        BACKGROUND_STYLES,
        CONTAINER_STYLES,
        SIZE_STYLES,
        TRANSITION_STYLES,
        extraClasses,
    ];
    return (
        <button className={styles.join(' ')} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Control;
