import React from "react";

export default function LoadingComponent({ className, props }) {
    return (
        <div {...props} className={`flex space-x-2 justify-center items-center bg-gray-100 dark:bg-gray-900 h-full ${className}`}>
            <span className="sr-only">Loading...</span>
            <div className="h-8 w-8 bg-black dark:bg-gray-100 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-8 w-8 bg-black dark:bg-gray-100 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-8 w-8 bg-black dark:bg-gray-100 rounded-full animate-bounce"></div>
        </div>
    );
}
