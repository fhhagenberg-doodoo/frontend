import React from 'react';
import '../../assets/styles/flex-gap.css';

interface DooDooTaskPrioritySymbolsProps {
    priority: number;
}

interface DooDooTaskPriorityProps {
    priority: number;
}

const DooDooTaskPrioritySymbol: React.FC = () => {
    return (
        <span
            className="text-xs md:text-base lg:text-lg"
            role="img"
            aria-label="Toilet per point in priority">
            🚽
        </span>
    );
};

const DooDooTaskPrioritySymbols: React.FC<DooDooTaskPrioritySymbolsProps> = ({ priority }) => (
    <>
        {Array.from(Array(priority).keys()).map((i) => (
            <DooDooTaskPrioritySymbol key={i} />
        ))}
    </>
);

export const DooDooTaskPriority: React.FC<DooDooTaskPriorityProps> = ({ priority }) => {
    return (
        <div className="flex-1 flex items-center">
            <div className="mr-3 text-brown">Priority:</div>
            <div>
                <DooDooTaskPrioritySymbols priority={priority} />
            </div>
        </div>
    );
};
