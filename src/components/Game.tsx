import React from 'react';
import {Board} from './Board';
import {Controls} from './Controls';

const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 8, 0, 0, 0, 0, 0, 7, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 6, 0, 0, 0, 0, 1, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 6, 0, 0],
    [0, 0, 0, 0, 0, 7, 0, 0, 0],
];

const handleCellChange = (row: number, col: number, value: number) => {
    console.log(`Cell [${row}][${col}] changed to ${value}`);
}

const handleNewGame = () => {
    console.log('New Game');
}

const handleReset = () => {
    console.log('Reset');
}

export const Game: React.FC = () => {
    return (
        <div className="game">
            <h1>Sudoku</h1>
            <div className="game-board">
                <Board board={board} onCellChange={handleCellChange} />
            </div>
            <div className="game-controls">
                <Controls onNewGame={handleNewGame} onReset={handleReset} />
            </div>
        </div>
    );
}