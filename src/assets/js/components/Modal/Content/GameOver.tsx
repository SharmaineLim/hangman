import React from 'react';

import Button from '../Button';

type GameOverProps = {
    phrase: string;
};

const GameOver = ({ phrase }: GameOverProps) => {
    return (
        <div>
            <h1 className="mb-4 font-bold text-4xl text-center">Game Over</h1>
            <p
                aria-label={`The phrase was: ${phrase}`}
                className="mb-4 text-xl text-center"
            >
                The phrase was:
                <br aria-hidden={true} />
                &ldquo;<span className="font-bold">{phrase}</span>&rdquo;
            </p>
        </div>
    );
};

export default GameOver;
