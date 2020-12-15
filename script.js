



let board = [
    [1, 2, 3],
    [3, 2, 1],
    [9, 9, 9]
]


function createBoard(mat) {
    for(let row=0 ; row<mat.length ; row++){
        for(let col=0 ; col<mat.length ; col++){
            document.getElementById(`t${row}${col}`).value = mat[row][col]
        }
    }
}

createBoard(board)