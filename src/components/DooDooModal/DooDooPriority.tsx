import React, { useState } from 'react';

interface DooDooRatingProps {
    id?: string;
    className?: string;
    initialRating?: number;
    minRating?: number;
    maxRating: number;
    onChange: (value: number) => void;
}

export const DooDooPriority: React.FC<DooDooRatingProps> = ({
    minRating,
    maxRating,
    initialRating,
    onChange,
}) => {
    const [currentlyHoveredIndex, setCurrentlyHoveredIndex] = useState(-1);
    const [value, setValue] = useState(initialRating ?? -1);

    const numberOfElements = maxRating - (minRating ?? 0);
    const maxElementRange = Array.from(new Array(maxRating).keys());
    const elementRange = maxElementRange.slice(0, numberOfElements);

    const calculateOpacity = (index: number) => {
        if (currentlyHoveredIndex > -1) {
            return index <= currentlyHoveredIndex ? 1 : 0.5;
        } else {
            return index < value ? 1 : 0.5;
        }
    };

    const clickSymbol = (index: number) => {
        setValue(index + 1);
        onChange(index);
    };

    return (
        <>
            {elementRange.map((i) => {
                return (
                    <span
                        className="text-3xl"
                        role="img"
                        aria-label="Toilet symbol"
                        key={i}
                        onMouseEnter={() => setCurrentlyHoveredIndex(i)}
                        onMouseLeave={() => setCurrentlyHoveredIndex(-1)}
                        onClick={() => clickSymbol(i)}
                        style={{
                            opacity: calculateOpacity(i),
                        }}>
                        🚽
                    </span>
                );
            })}
        </>
    );
};
