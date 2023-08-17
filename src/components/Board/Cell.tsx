import React from 'react';

type CellProps = {
    value: number;
    isEditable: boolean;
    onChange: (value: number) => void;
};

export const Cell: React.FC<CellProps> = ({value, isEditable, onChange}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.target.value));
    };

    return (
        <input
            type="number"
            value={value || ''}
            onChange={handleChange}
            disabled={!isEditable}
            className="cell"
            min={1}
            max={9}
        />
    );
}