import React from 'react';
import { KeysPressedContext } from '../../contexts';

const COLOR_STYLES =
    'bg-black border-transparent text-white hover:bg-gray-700 focus:bg-gray-700';
const CONTAINER_STYLES = 'border-2 rounded sm:h-8 w-6 sm:w-8';
const CLICKED_STYLES = 'border-gray-400 cursor-default text-gray-400';
const DISABLED_STYLES =
    'bg-gray-400 border-transparent cursor-default text-white';
const TEXT_STYLES = 'font-bold text-lg sm:text-xl';
const TRANSITION_STYLES = 'transition-colors';

type KeyProps = {
    isDisabled?: boolean;
    letter: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Key = ({ isDisabled, letter, onClick }: KeyProps) => {
    // Check if the key has already been pressed.
    const keysPressed = React.useContext(KeysPressedContext);
    const isPressed = keysPressed && keysPressed.includes(letter);

    // Set up styles.
    // If the key has already been pressed, disable it.
    // Or if the key has been disabled, disable it with different styles.
    const styles = [CONTAINER_STYLES, TEXT_STYLES, TRANSITION_STYLES];
    if (isPressed) {
        styles.push(CLICKED_STYLES);
    } else if (isDisabled) {
        styles.push(DISABLED_STYLES);
    } else {
        styles.push(COLOR_STYLES);
    }

    return (
        <button
            className={styles.join(' ')}
            disabled={isDisabled || isPressed}
            onClick={onClick}
        >
            {letter}
        </button>
    );
};

export default Key;
