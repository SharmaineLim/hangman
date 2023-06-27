import React from 'react';
import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard/Keyboard';
import Phrase from './components/Phrase/Phrase';
import { KeysPressedContext } from './contexts';

const App = () => {
    const phrase = 'guess the phrase';

    // Get the phrase as an array of characters.
    const phraseCharacters = phrase.toUpperCase().split('');

    // Keep track of the number of mistakes.
    const [incorrectGuesses, setIncorrectGuesses] = React.useState(0);

    // Keep track of which keys have been pressed.
    const [keysPressed, setKeysPressed] = React.useState([] as string[]);
    const handleKeyClick: React.MouseEventHandler<HTMLButtonElement> = (
        event,
    ) => {
        const key = (event.target as HTMLButtonElement)?.innerText;
        if (key && !keysPressed.includes(key)) {
            // Add the letter to the list of pressed keys.
            setKeysPressed([...keysPressed, key]);

            // If the letter is not in the phrase, increment the mistakes count.
            if (!phraseCharacters.includes(key)) {
                setIncorrectGuesses(incorrectGuesses + 1);
            }
        }
    };

    return (
        <div className="space-y-12">
            <Hangman incorrectGuesses={incorrectGuesses} />
            <KeysPressedContext.Provider value={keysPressed}>
                <Phrase phrase={phrase} />
                <Keyboard handler={handleKeyClick} />
            </KeysPressedContext.Provider>
        </div>
    );
};

export default App;
