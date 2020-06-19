import React from 'react';

type DooDooTaskOptionsProps = {
    onEdit: (() => void) | (() => Promise<void>);
    onDelete: (() => void) | (() => Promise<void>);
};

export const DooDooTaskOptions: React.FC<DooDooTaskOptionsProps> = ({ onEdit, onDelete }) => {
    return (
        <>
            <button onClick={() => onEdit()}>
                <span role="img" aria-label="Pen EmojI">
                    🖊️
                </span>
            </button>
            <button onClick={() => onDelete()}>
                <span role="img" aria-label="Wastebin EmojI">
                    🗑️
                </span>
            </button>
        </>
    );
};
