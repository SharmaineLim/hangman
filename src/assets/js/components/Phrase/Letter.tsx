import React from 'react';

const COLOR_STYLES = 'border-b-4 border-black';
const CONTAINER_STYLES = 'flex justify-center m-1 w-6 sm:w-8';
const TEXT_STYLES = 'font-bold text-xl sm:text-2xl';
const TRANSITION_STYLES = 'transition-colors';

type LetterProps = {
    letter: string;
    letterIndex: number;
};

const Letter = ({ letter, letterIndex }: LetterProps) => {
    const isShown = false;

    // Set up styles.
    const styles = [
        COLOR_STYLES,
        CONTAINER_STYLES,
        TEXT_STYLES,
        TRANSITION_STYLES,
    ];

    const letterNumber = letterIndex + 1;
    return (
        <span
            aria-label={
                `letter ${letterNumber}, ` + (isShown ? `${letter}` : 'blank')
            }
            className={styles.join(' ')}
        >
            {isShown ? letter : <span aria-hidden={true}>?</span>}
        </span>
    );
};

export default Letter;
