import {usedInBox, usedInCol, usedInRow} from "./generateSudoku";

export const sudokuSolver: (sudoku: number[][]) => boolean = (sudoku) => {
    const rowAndCol: number[] = [0, 0];
    if (!findUnassignedLocation(sudoku, rowAndCol)) {
        return true;
    }
    const row: number = rowAndCol[0];
    const col: number = rowAndCol[1];
    for (let num = 1; num <= 9; num++) {
        if (isSafe(sudoku, row, col, num)) {
            sudoku[row][col] = num;
            if (sudokuSolver(sudoku)) {
                return true;
            }
            sudoku[row][col] = 0;
        }
    }
    return false;
}

const findUnassignedLocation: (sudoku: number[][], rowAndCol: number[]) => boolean = (sudoku, rowAndCol) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (sudoku[row][col] === 0) {
                rowAndCol[0] = row;
                rowAndCol[1] = col;
                return true;
            }
        }
    }
    return false;
}

const isSafe: (sudoku: number[][], row: number, col: number, num: number) => boolean = (sudoku, row, col, num) => {
    return !usedInRow(sudoku, row, num) && !usedInCol(sudoku, col, num) && !usedInBox(sudoku, row - row % 3, col - col % 3, num);
}