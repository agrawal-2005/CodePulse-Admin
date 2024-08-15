import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    error = false,
    ...props
}, ref) {
    const id = useId();

    return (
        <div className="w-full">
            {label && (
                <label
                    className="inline-block mb-1 pl-1 text-gray-700"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-500 border ${error ? 'border-red-500' : 'border-gray-200'} w-full transition duration-200 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    );
});

export default Input;
