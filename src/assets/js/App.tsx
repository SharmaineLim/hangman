import React from 'react';
import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard/Keyboard';
import Phrase from './components/Phrase/Phrase';
import { KeysPressedContext } from './contexts';

const App = () => {
    // Keep track of which keys have been pressed.
    const [keysPressed, setKeysPressed] = React.useState([] as string[]);
    const handleKeyClick: React.MouseEventHandler<HTMLButtonElement> = (
        event,
    ) => {
        const key = (event.target as HTMLButtonElement)?.innerText;
        if (key && !keysPressed.includes(key)) {
            setKeysPressed([...keysPressed, key]);
        }
    };

    return (
        <div className="space-y-12">
            <Hangman />
            <KeysPressedContext.Provider value={keysPressed}>
                <Phrase phrase="guess the phrase" />
                <Keyboard handler={handleKeyClick} />
            </KeysPressedContext.Provider>
        </div>
    );
};

export default App;
