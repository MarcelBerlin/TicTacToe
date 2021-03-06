let fields = [];
let winner;
let gameOver = false;
let currentShape = 'cross';
let audio_end = new Audio('./sounds/end.wav');

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-2').classList.add('player-inactive');
            document.getElementById('player-1').classList.remove('player-inactive');
        }
        fields[id] = currentShape;
        console.log(fields);
        showImage();
        checkForWin();
    }
}


function showImage() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');

        }
    }
}


function checkForWin() {
    horizontalLines();
    verticalLines();
    diagonalLines();
    gameIsOver();
    checkDraw();
}


function horizontalLines() {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
}


function verticalLines() {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
}


function diagonalLines() {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1)';
    }
}


function gameIsOver() {
    if (!!winner) {
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            audio_end.play();
        }, 1000);
    } else {
        checkDraw();
    }
    checkWhoIsWinner();
}


function checkWhoIsWinner() {
    if (winner == 'circle') {
        setTimeout(function () {
            document.getElementById('player1-win').classList.remove('d-none');
        }, 1000);
    }
    if (winner == 'cross') {
        setTimeout(function () {
            document.getElementById('player2-win').classList.remove('d-none');
        }, 1000);
    }
}


function checkDraw() {
    if (fields.filter((value) => value).length == 9) {
        setTimeout(function () {
            document.getElementById('draw-result').classList.remove('d-none');
            document.getElementById('draw').classList.remove('d-none');
            audio_end.play();
        }, 1000);
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
    checkForWin();
}


function restartGame() {
    gameOver = false;
    fields = [];
    document.location.reload();
}
