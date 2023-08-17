const N = 9;
const K = 30; // Number of blanks; you can adjust this as needed

export const generateSudoku: () => number[][] = () => {
  let mat: number[][] = Array.from({ length: N }, () => Array(N).fill(0));
  fillValues(mat);
  return mat;
};

const fillValues = (mat: number[][]) => {
  fillDiagonal(mat);
  fillRemaining(mat, 0, 3);
  removeKDigits(mat);
};

const unUsedInBox = (mat: number[][], rowStart: number, colStart: number, num: number) => {
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (mat[i + rowStart][j + colStart] === num) return false;
  return true;
};

const fillDiagonal = (mat: number[][]) => {
  for (let i = 0; i < N; i += 3) {
    fillBox(mat, i, i);
  }
};

const unUsedInRow = (mat: number[][], i: number, num: number) => {
  for (let j = 0; j < N; j++) if (mat[i][j] === num) return false;
  return true;
};

const unUsedInCol = (mat: number[][], j: number, num: number) => {
  for (let i = 0; i < N; i++) if (mat[i][j] === num) return false;
  return true;
};

const checkIfSafe = (mat: number[][], i: number, j: number, num: number) => {
  return (
    unUsedInRow(mat, i, num) &&
    unUsedInCol(mat, j, num) &&
    unUsedInBox(mat, i - (i % 3), j - (j % 3), num)
  );
};

const fillBox = (mat: number[][], row: number, col: number) => {
  let num: number;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      do {
        num = getRandomNumber();
      } while (!unUsedInBox(mat, row, col, num));
      mat[row + i][col + j] = num;
    }
  }
};

const getRandomNumber = () => Math.floor(Math.random() * N + 1);

const solveSudoku = (mat: number[][], i: number, j: number): boolean => {
  if (i === N - 1 && j === N) return true;
  if (j === N) {
    i++;
    j = 0;
  }
  if (mat[i][j] !== 0) return solveSudoku(mat, i, j + 1);
  for (let num = 1; num <= N; num++) {
    if (checkIfSafe(mat, i, j, num)) {
      mat[i][j] = num;
      if (solveSudoku(mat, i, j + 1)) return true;
    }
    mat[i][j] = 0;
  }
  return false;
};

const fillRemaining = (mat: number[][], i: number, j: number): boolean => {
  if (i === N - 1 && j === N) return true;
  if (j === N) {
    i++;
    j = 0;
  }
  if (mat[i][j] !== 0) return fillRemaining(mat, i, j + 1);
  for (let num = 1; num <= N; num++) {
    if (checkIfSafe(mat, i, j, num)) {
      mat[i][j] = num;
      if (solveSudoku(mat, i, j + 1)) return true;
      mat[i][j] = 0;
    }
  }
  return false;
};

const removeKDigits = (mat: number[][]) => {
  let count = K;
  while (count !== 0) {
    let i = Math.floor(Math.random() * N);
    let j = Math.floor(Math.random() * N);
    while (mat[i][j] === 0) {
      i = Math.floor(Math.random() * N);
      j = Math.floor(Math.random() * N);
    }
    count--;
    mat[i][j] = 0;
  }
};
