import React from 'react';

const COLOR_STYLES = 'bg-black text-white hover:bg-gray-700 focus:bg-gray-700';
const CONTAINER_STYLES = 'rounded sm:h-8 w-6 sm:w-8';
const TEXT_STYLES = 'font-bold text-lg sm:text-xl';
const TRANSITION_STYLES = 'transition-colors';

type KeyProps = {
    letter: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Key = ({ letter, onClick }: KeyProps) => {
    // Set up styles.
    const styles = [
        COLOR_STYLES,
        CONTAINER_STYLES,
        TEXT_STYLES,
        TRANSITION_STYLES,
    ];

    return (
        <button className={styles.join(' ')} onClick={onClick}>
            {letter}
        </button>
    );
};

export default Key;
