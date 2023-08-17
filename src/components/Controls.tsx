import React from 'react';

type ControlsProps = {
    onNewGame: () => void;
    onReset: () => void;
}

export const Controls: React.FC<ControlsProps> = ({onNewGame, onReset}) => {
    return (
        <div className="controls">
            <button onClick={onNewGame}>New Game</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}