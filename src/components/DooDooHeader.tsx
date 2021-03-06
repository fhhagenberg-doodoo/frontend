import React from 'react';

export const DooDooHeader: React.FC = () => {
    return (
        <span className="self-start w-full sm:w-auto py-2 px-4 align-baseline bg-white text-3xl rounded-full">
            <span role="img" aria-label="doodoo-logo">
                💩
            </span>
            <span className="text-brown font-extrabold tracking-wider lowercase">DooDoo</span>
        </span>
    );
};
