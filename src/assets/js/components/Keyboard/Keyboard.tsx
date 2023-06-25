import React from 'react';
import Key from './Key';

type KeyboardProps = {
    handler?: React.MouseEventHandler<HTMLButtonElement>;
};

const Keyboard = ({ handler }: KeyboardProps) => {
    const lettersByRow = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ];
    const rowElements = lettersByRow.map((row, index) => {
        const keys = row.map((letter) => {
            return <Key key={letter} letter={letter} onClick={handler} />;
        });
        return (
            <div
                className="flex items-center justify-center space-x-1.5 sm:space-x-2"
                key={`keyboard-row-${index}`}
            >
                {keys}
            </div>
        );
    });

    return <div className="space-y-2">{rowElements}</div>;
};

export default Keyboard;
