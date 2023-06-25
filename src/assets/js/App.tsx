import React from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Phrase from './components/Phrase/Phrase';

const App = () => {
    return (
        <div className="space-y-12">
            <Phrase phrase="guess the phrase" />
            <Keyboard />
        </div>
    );
};

export default App;
