import React from 'react';

type CrossIconProps = {
    className?: string;
    color?: string;
    size?: number;
};

const CrossIcon = ({
    color = 'currentColor',
    size = 24,
    ...props
}: CrossIconProps) => {
    return (
        <svg
            fill="none"
            height={size}
            stroke={color}
            strokeWidth="3"
            viewBox="0 0 24 24"
            width={size}
            {...props}
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
};

export default CrossIcon;
