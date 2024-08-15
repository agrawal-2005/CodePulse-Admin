import React from 'react';

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    hoverColor = 'hover:bg-blue-700',
    focusColor = 'focus:ring-2 focus:ring-blue-500',
    disabled = false,
    className = '',
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${hoverColor} ${focusColor} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
