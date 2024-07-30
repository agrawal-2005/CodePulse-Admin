import React, { forwardRef } from "react";
import { useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId(); // Generate a unique ID for the input element
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id} // Set the ID for the input element
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black focus:bg-gray-50 outline-none duration-200 border border-gray-200 w-full ${className}`}
        ref={ref} // Forward the ref to the input element
        {...props} // Spread other props (e.g., value, onChange)

      />
    </div>
  );
});

export default Input;
