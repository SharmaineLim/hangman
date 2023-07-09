import React from 'react';

import Button from '../Button';

type GameOverProps = {
    onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    phrase: string;
};

const GameOver = ({ onButtonClick, phrase }: GameOverProps) => {
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
            <Button
                extraClasses="block max-w-xs mt-8 mx-auto w-full"
                onClick={onButtonClick}
            >
                Play Again
            </Button>
        </div>
    );
};

export default GameOver;
