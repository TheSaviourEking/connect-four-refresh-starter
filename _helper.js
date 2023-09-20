let numOfitems = 4;

function isEmptyGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== '' && grid[i][j] !== ' ') {
                return false;
            }
        }
    }
    return true;
}

function isHorizontalWin(grid) {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col <= grid[0].length - numOfitems; col++) {
            if (grid[row][col] !== '' && grid[row][col] !== ' ') {
                if (grid[row][col] === grid[row][col + 1] && grid[row][col + 1] === grid[row][col + 2] && grid[row][col + 2] === grid[row][col + 3]) {
                    return grid[row][col];
                }
            }
        }
    }
    return false;
}

function isVerticalWin(grid) {
    for (let row = 0; row <= grid.length - numOfitems; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] !== '' && grid[row][col] !== ' ') {
                if (grid[row][col] === grid[row + 1][col] && grid[row + 1][col] === grid[row + 2][col] && grid[row + 2][col] === grid[row + 3][col]) {
                    return grid[row][col];
                }
            }
        }
    }
    return false;
}

function isDiagonalWinDownwardWin(grid) {
    for (let row = 0; row <= grid.length - numOfitems; row++) {
        for (let col = 0; col <= grid[0].length - numOfitems; col++) {
            if (grid[row][col] !== '' && grid[row][col] !== ' ') {
                if (grid[row][col] === grid[row + 1][col + 1] && grid[row + 1][col + 1] === grid[row + 2][col + 2] && grid[row + 2][col + 2] === grid[row + 3][col + 3]) {
                    return grid[row][col];
                }
            }
        }
    }
    return false;
}

function isDiagonalWinUpwardWin(grid) {
    for (row = 0; row < grid.length - (numOfitems - 1); row++) {
        for (col = numOfitems - 1; col < grid[0].length; col++) {
            if (grid[row][col] !== '' && grid[row][col] !== ' ') {
                if (grid[row][col] === grid[row + 1][col - 1] && grid[row + 1][col - 1] === grid[row + 2][col - 2] && grid[row + 2][col - 2] === grid[row + 3][col - 3]) {
                    return grid[row][col];
                }
            }
        }
    }
    return false;
}

function isTie(grid) {
    if (isFullBoard(grid)) {
        if (!(isDiagonalWinDownwardWin(grid) && isDiagonalWinUpwardWin(grid) && isHorizontalWin(grid) && isVerticalWin(grid))) {
            return 'T';
        }
    }
    return false;
}

function isFullBoard(grid) {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '' || grid[row][col] === ' ') {
                return false;
            }
        }
    }
    return true;
}
module.exports = {
    isEmptyGrid,
    isHorizontalWin,
    isVerticalWin,
    // isDiagonalWin,
    isDiagonalWinUpwardWin,
    isTie,
    isFullBoard,

    isDiagonalWinDownwardWin
}