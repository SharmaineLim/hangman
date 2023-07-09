import React from 'react';

import GameOver from './components/Modal/Content/GameOver';
import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard/Keyboard';
import Modal from './components/Modal/Modal';
import Phrase from './components/Phrase/Phrase';
import TopBar from './components/Navigation/TopBar';
import { KeysPressedContext } from './contexts';

// App-level styles
const BODY_STYLES = 'bg-gray-100 flex flex-col min-h-screen';
const MODAL_OPEN_STYLES = BODY_STYLES + ' h-screen overflow-hidden';

// Main content styles
const MAIN_CONTENT_STYLES =
    'bg-white drop-shadow flex flex-col flex-grow justify-center max-w-2xl mx-auto px-3 py-4 sm:p-6 space-y-6 sm:space-y-8 md:space-y-12';

const App = () => {
    const phrase = 'guess the phrase'.toUpperCase();

    // Get the phrase as an array of characters.
    const phraseCharacters = phrase.split('');

    // Keep track of the number of incorrect guesses.
    const [incorrectGuesses, setIncorrectGuesses] = React.useState(0);
    // Keep track of which keys have been pressed.
    const [keysPressed, setKeysPressed] = React.useState([] as string[]);
    // Keep track of whether the game is over.
    const [isGameOver, setIsGameOver] = React.useState(false);
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
                    setModalContent(<GameOver phrase={phrase} />);
                    setIsGameOver(true);
                    setIsModalOpen(true);
                }

                setIncorrectGuesses(incorrectGuesses + 1);
            }
        }
    };

    return (
        <div className={isModalOpen ? MODAL_OPEN_STYLES : BODY_STYLES}>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {modalContent}
            </Modal>
            <TopBar />
            <main className={MAIN_CONTENT_STYLES} id="main-content">
                <Hangman incorrectGuesses={incorrectGuesses} />
                <KeysPressedContext.Provider value={keysPressed}>
                    <Phrase phrase={phrase} />
                    <Keyboard
                        handler={handleKeyClick}
                        isDisabled={isGameOver}
                    />
                </KeysPressedContext.Provider>
            </main>
        </div>
    );
};

export default App;
