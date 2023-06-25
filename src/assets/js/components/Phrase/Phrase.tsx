import React from 'react';
import Word from './Word';

type PhraseProps = {
    phrase: string;
};

const Phrase = ({ phrase }: PhraseProps) => {
    // Get each word in the phrase as a Word component.
    const wordElements = phrase
        .toUpperCase()
        .split(' ')
        .map((word, index) => {
            return <Word key={`word-${index}`} word={word} wordIndex={index} />;
        });

    return (
        <div
            aria-label="phrase to guess"
            className="flex flex-wrap justify-center"
        >
            {wordElements}
        </div>
    );
};

export default Phrase;
