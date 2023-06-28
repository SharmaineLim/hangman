import React from 'react';

import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard/Keyboard';
import Modal from './components/Modal/Modal';
import Phrase from './components/Phrase/Phrase';
import { KeysPressedContext } from './contexts';

const MODAL_OPEN_STYLES = 'h-screen overflow-hidden';

const App = () => {
    const phrase = 'guess the phrase';

    // Get the phrase as an array of characters.
    const phraseCharacters = phrase.toUpperCase().split('');

    // Keep track of the number of incorrect guesses.
    const [incorrectGuesses, setIncorrectGuesses] = React.useState(0);
    // Keep track of which keys have been pressed.
    const [keysPressed, setKeysPressed] = React.useState([] as string[]);
    // Keep track of whether the modal is open.
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    // Modal content.
    const [modalContent, setModalContent] = React.useState(
        null as React.ReactNode,
    );

    // On click, add the letter to the list of pressed keys, and
    // check if the letter is in the phrase.
    const handleKeyClick: React.MouseEventHandler<HTMLButtonElement> = (
        event,
    ) => {
        const key = (event.target as HTMLButtonElement)?.innerText;
        if (key && !keysPressed.includes(key)) {
            // Add the letter to the list of pressed keys.
            setKeysPressed([...keysPressed, key]);

            // If the letter is not in the phrase,
            // increment the incorrect guess count.
            if (!phraseCharacters.includes(key)) {
                // After (6) incorrect guesses, the game is over.
                if (incorrectGuesses >= 5) {
                    setModalContent(<h1>Game Over</h1>);
                    setIsModalOpen(true);
                }

                setIncorrectGuesses(incorrectGuesses + 1);
            }
        }
    };

    return (
        <div className={isModalOpen ? MODAL_OPEN_STYLES : ''}>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {modalContent}
            </Modal>
            <div className="space-y-12">
                <Hangman incorrectGuesses={incorrectGuesses} />
                <KeysPressedContext.Provider value={keysPressed}>
                    <Phrase phrase={phrase} />
                    <Keyboard handler={handleKeyClick} />
                </KeysPressedContext.Provider>
            </div>
        </div>
    );
};

export default App;
