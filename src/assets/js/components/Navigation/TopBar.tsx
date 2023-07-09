import React from 'react';

const CONTENT_STYLES =
    'flex items-center justify-between max-w-2xl mx-auto px-4 py-2 md:py-3';

const SKIP_STYLES =
    'absolute bg-white border-2 border-black left-0 p-2 top-0 -translate-x-full focus:translate-x-0';

type TopBarProps = {
    children?: React.ReactNode;
};

const TopBar = ({ children }: TopBarProps) => {
    return (
        <header className="bg-white border-b-2 border-black relative">
            <a className={SKIP_STYLES} href="#main-content">
                Skip to phrase
            </a>

            <div className={CONTENT_STYLES}>
                {/* Left */}
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
                    Hangman
                </h1>

                {/* Right */}
                <div className="flex space-x-2 md:space-x-3">{children}</div>
            </div>
        </header>
    );
};

export default TopBar;
