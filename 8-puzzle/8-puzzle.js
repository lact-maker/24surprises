let board = [];
let emptyTile = {row: 2, col: 2};

function createBoard() {
    // 8-puzzle的初始配置
    board = [
        [5, 8, 2],
        [6, 4, 7],
        [1, 3, null]
    ];
    emptyTile = {row: 2, col: 2};
}

function displayBoard() {
    let boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let tileDiv = document.createElement('div');
            tileDiv.id = `tile-${i}-${j}`;
            tileDiv.className = 'tile';
            // 如果方块不是空的，使用图片而不是数字
            if (board[i][j] !== null) {
                let imgElement = document.createElement('img');
                imgElement.src = `${board[i][j]}.jpg`;  // 修改为实际图片路径
                imgElement.style.width = '100%';
                imgElement.style.height = '100%';
                tileDiv.appendChild(imgElement);
            }
            tileDiv.addEventListener('click', () => moveTile(i, j));
            boardDiv.appendChild(tileDiv);
        }
    }
}

function moveTile(row, col) {
    if ((Math.abs(emptyTile.row - row) === 1 && emptyTile.col === col) ||
        (Math.abs(emptyTile.col - col) === 1 && emptyTile.row === row)) {
        [board[emptyTile.row][emptyTile.col], board[row][col]] = [board[row][col], board[emptyTile.row][emptyTile.col]];
        emptyTile = {row: row, col: col};
        displayBoard();
        if (checkWin()) {
            alert("挑战成功！恭喜你解锁线索十一：恶之花");
        }
    }
}

function checkWin() {
    let win = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i === 2 && j === 2) {
                if (board[i][j] !== null) win = false;
            } else if (board[i][j] !== i * 3 + j + 1) {
                win = false;
            }
        }
    }
    return win;
}

createBoard();
displayBoard();
