import React from 'react';

type ResetIconProps = {
    className?: string;
    color?: string;
    size?: number;
};

const ResetIcon = ({
    color = 'currentColor',
    size = 24,
    ...props
}: ResetIconProps) => {
    return (
        <svg
            fill={color}
            height={size}
            stroke={color}
            viewBox="0 0 24 24"
            width={size}
        >
            <path
                d="M10.634-22.807c-.863-.86-3.978 2.257-3.117 3.116l3.586 3.587c-14.532.098-26.282 11.907-26.282 26.46 0 14.614 11.844 26.458 26.458 26.458 13.801 0 25.13-10.563 26.351-24.048.109-1.21-4.28-1.608-4.392-.397C32.224 23.6 22.777 32.404 11.279 32.404c-12.177 0-22.048-9.872-22.048-22.048 0-12.118 9.776-21.951 21.868-22.05L7.517-8.107c-.861.858 2.254 3.978 3.117 3.116l7.348-7.349a2.194 2.194 0 0 0 0-3.116l-7.348-7.351Z"
                transform="matrix(.36 0 0 .34 8 8.75)"
            />
        </svg>
    );
};

export default ResetIcon;
