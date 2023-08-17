import React from 'react';
import {Cell} from './Cell';

type BoardProps = {
    board: number[][];
    onCellChange: (row: number, col: number, value: number) => void;
};

export const Board: React.FC<BoardProps> = ({board, onCellChange}) => {
    const handleChange = (row: number, col: number) => (value: number) => {
        onCellChange(row, col, value);
    };

    return (
        <table className="sudoku-board">
            <tbody>
                {board.map((row, rowIndex) => (
                    <tr key={rowIndex} className={`row-${rowIndex}`}>
                        {row.map((cell, colIndex) => (
                            <td key={colIndex} className={`col-${colIndex}`}>
                                <Cell
                                    value={cell}
                                    isEditable={cell === 0}
                                    onChange={handleChange(rowIndex, colIndex)}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
