import React from 'react';

interface DooDooTaskDescriptionProps {
    name: string;
    description: string;
}

export const DooDooTaskDescription: React.FC<DooDooTaskDescriptionProps> = ({
    name,
    description,
}) => {
    return (
        <div className="flex-1 flex flex-col justify-start">
            <div className="font-bold">{name}</div>
            <div>{description}</div>
        </div>
    );
};
