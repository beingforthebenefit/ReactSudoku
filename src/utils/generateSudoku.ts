export const generateSudoku: () => number[][] = () => {
    const sudoku = createSudoku();
    fillDiagonal(sudoku);
    fillRemaining(sudoku);
    return sudoku;
};

const createSudoku: () => number[][] = () => {
    const sudoku: number[][] = [];
    for (let i = 0; i < 9; i++) {
        sudoku[i] = [];
        for (let j = 0; j < 9; j++) {
            sudoku[i][j] = 0;
        }
    }
    return sudoku;
}

const fillDiagonal: (sudoku: number[][]) => void = (sudoku) => {
    for (let i = 0; i < 9; i = i + 3) {
        fillBox(sudoku, i, i);
    }
}

const fillBox: (sudoku: number[][], row: number, col: number) => boolean = (sudoku, row, col) => {
    let num: number;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            do {
                num = getRandomNumber();
            } while (!isSafe(sudoku, row, col, num));
            sudoku[row + i][col + j] = num;
        }
    }
    return true;
}

const getRandomNumber: () => number = () => {
    return Math.floor(Math.random() * 9 + 1);
}

const isSafe: (sudoku: number[][], row: number, col: number, num: number) => boolean = (sudoku, row, col, num) => {
    return !usedInRow(sudoku, row, num) && !usedInCol(sudoku, col, num) && !usedInBox(sudoku, row - row % 3, col - col % 3, num);
}

export const usedInRow: (sudoku: number[][], row: number, num: number) => boolean = (sudoku, row, num) => {
    for (let i = 0; i < 9; i++) {
        if (sudoku[row][i] === num) {
            return true;
        }
    }
    return false;
}

export const usedInCol: (sudoku: number[][], col: number, num: number) => boolean = (sudoku, col, num) => {
    for (let i = 0; i < 9; i++) {
        if (sudoku[i][col] === num) {
            return true;
        }
    }
    return false;
}

export const usedInBox: (sudoku: number[][], boxStartRow: number, boxStartCol: number, num: number) => boolean = (sudoku, boxStartRow, boxStartCol, num) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudoku[boxStartRow + i][boxStartCol + j] === num) {
                return true;
            }
        }
    }
    return false;
}

const fillRemaining: (sudoku: number[][]) => boolean = (sudoku) => {
    for (let i = 0; i < 9; i = i + 3) {
        for (let j = 0; j < 9; j = j + 3) {
            if (!fillBox(sudoku, i, j)) {
                return false;
            }
        }
    }
    return true;
}