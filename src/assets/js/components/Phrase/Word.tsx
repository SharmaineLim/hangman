import React from 'react';
import Letter from './Letter';

type WordProps = {
    word: string;
    wordIndex: number;
};

const Word = ({ word, wordIndex }: WordProps) => {
    // Get each letter in the word as a Letter component.
    const letterElements = word.split('').map((letter, index) => {
        return (
            <Letter
                key={`word-${wordIndex}-${index}`}
                letter={letter}
                letterIndex={index}
            />
        );
    });

    const wordNumber = wordIndex + 1;
    return (
        <div
            aria-label={`word number ${wordNumber}, a ${word.length}-letter word`}
            className="flex mx-2.5"
        >
            {letterElements}
        </div>
    );
};

export default Word;
