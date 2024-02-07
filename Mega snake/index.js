const canvas = document.querySelector('canvas');
let timeSpan = document.querySelector('#time');
let span = document.querySelector('#span');
let s1 = document.querySelector('#greenscore');
let s2 = document.querySelector('#redscore');
let s3 = document.querySelector('#bluescore');
let s4 = document.querySelector('#yellowscore');
const c = canvas.getContext('2d');

let foodX1
let foodY1

let foodX2
let foodY2

let foodX3
let foodY3

let foodX4
let foodY4

let foodX5
let foodY5

let foodX6
let foodY6

let foodX7
let foodY7

let foodX8
let foodY8
const unit = 12;

// let redplace1 = [
//     { x: 0, y: 0 },
//     { x: 48, y: 0 },
//     { x: 96, y: 0 },
//     { x: 0, y: 48 },
//     { x: 48, y: 48 },
//     { x: 0, y: 96 }
// ];
// let redplace2 = [
//     { x: 0, y: 456 },
//     { x: 0, y: 504 },
//     { x: 0, y: 552 },
//     { x: 48, y: 504 },
//     { x: 48, y: 552 },
//     { x: 96, y: 552 }
// ];
// let redplace3 = [
//     { x: 1056, y: 0 },
//     { x: 1104, y: 0 },
//     { x: 1152, y: 0 },
//     { x: 1104, y: 48 },
//     { x: 1152, y: 48 },
//     { x: 1152, y: 96 }
// ];
// let redplace4 = [
//     { x: 1056, y: 552 },
//     { x: 1104, y: 552 },
//     { x: 1152, y: 552 },
//     { x: 1104, y: 504 },
//     { x: 1152, y: 504 },
//     { x: 1152, y: 456 }
// ]

// function redplace() {
//     redplace1.forEach(item => {
//         c.fillStyle = '#313131'
//         c.fillRect(item.x, item.y, 48, 48);
//     });
//     redplace2.forEach(item => {
//         c.fillStyle = '#313131'
//         c.fillRect(item.x, item.y, 48, 48);
//     });
//     redplace3.forEach(item => {
//         c.fillStyle = '#313131'
//         c.fillRect(item.x, item.y, 48, 48);
//     });
//     redplace4.forEach(item => {
//         c.fillStyle = '#313131'
//         c.fillRect(item.x, item.y, 48, 48);
//     });
//     c.strokeStyle = 'rgba(255 , 0 , 0 , 0.5)';
//     c.lineWidth = 5;
//     c.beginPath();
//     c.moveTo(0, 144);
//     c.lineTo(48, 144);
//     c.lineTo(48, 96);
//     c.lineTo(96, 96);
//     c.lineTo(96, 48);
//     c.lineTo(144, 48);
//     c.lineTo(144, 0);
//     ////////////////////////////
//     c.moveTo(0, 456);
//     c.lineTo(48, 456);
//     c.lineTo(48, 504);
//     c.lineTo(96, 504);
//     c.lineTo(96, 552);
//     c.lineTo(144, 552);
//     c.lineTo(144, 600);
//     ////////////////////////////
//     c.moveTo(1056, 600);
//     c.lineTo(1056, 552);
//     c.lineTo(1104, 552);
//     c.lineTo(1104, 504);
//     c.lineTo(1152, 504);
//     c.lineTo(1152, 456);
//     c.lineTo(1200, 456);
//     ///////////////////////////
//     c.moveTo(1056, 0);
//     c.lineTo(1056, 48);
//     c.lineTo(1104, 48);
//     c.lineTo(1104, 96);
//     c.lineTo(1152, 96);
//     c.lineTo(1152, 144);
//     c.lineTo(1200, 144);
//     c.stroke();
// }

// let enemie = [
//     { x: 300, y: 300 }
// ]

// function drawEnemie() {
//     c.fillStyle = 'red';
//     c.fillRect(enemie[0].x, enemie[0].y, 48, 48);

// };
// let m = Math.round(Math.random() * 10);
// function moveEnemie() {

// }

// console.log(m);


let moveX1 = unit;
let moveY1 = 0;
let hit1 = false
let score1 = 0
let snake1 = [
    { x: 144 + (unit * 4), y: 144 },
    { x: 144 + (unit * 3), y: 144 },
    { x: 144 + (unit * 2), y: 144 },
    { x: 144 + unit, y: 144 },
    { x: 144, y: 144 }
];

let moveX2 = -unit;
let moveY2 = 0;
let hit2 = false
let score2 = 0

let snake2 = [
    { x: 1056 - (unit * 4), y: 456 },
    { x: 1056 - (unit * 3), y: 456 },
    { x: 1056 - (unit * 2), y: 456 },
    { x: 1056 - unit, y: 456 },
    { x: 1056, y: 456 }
];

let moveX3 = 0;
let moveY3 = unit;
let hit3 = false
let score3 = 0

let snake3 = [
    { x: 1056, y: 144 + (unit * 4) },
    { x: 1056, y: 144 + (unit * 3) },
    { x: 1056, y: 144 + (unit * 2) },
    { x: 1056, y: 144 + unit },
    { x: 1056, y: 144 }
];

let moveX4 = 0;
let moveY4 = -unit;
let hit4 = false
let score4 = 0

let snake4 = [
    { x: 144, y: 456 },
    { x: 144, y: 456 + unit },
    { x: 144, y: 456 + (unit * 2) },
    { x: 144, y: 456 + (unit * 3) },
    { x: 144, y: 456 + (unit * 4) }
];

let snakeCount = 4;


addEventListener('keydown', changeDirection);

let score = [
    { s: score1 },
    { s: score2 },
    { s: score3 },
    { s: score4 }
]


let run = true
let time = 100

function Time() {
    timeSpan.textContent = 30
    let r = setInterval(() => {
        if (time == 0) {
            timeSpan.textContent = ''
            showResualt();
            clearInterval(r)
        }
        if (time >= 1) {
            timeSpan.textContent = time;
            time--
        }

    }, 1000);
}

function showResualt() {
    while (true) {
        if (run == false) {
            run = true;
            span.classList.add('dis');
            canvas.classList.remove('dis');
            s1.textContent = ''
            s2.textContent = ''
            s3.textContent = ''
            s4.textContent = ''
            nextTick();
            break
        }
        if (run == true) {
            run = false;
            s1.textContent = `green :${score1}`
            s2.textContent = `red :${score2}`
            s3.textContent = `blue :${score3}`
            s4.textContent = `yellow :${score4}`
            canvas.classList.add('dis');
            break
        }

    }

};

function startGame() {
    span.classList.add('dis');
    canvas.classList.remove('dis');
    Time();
    nextTick();
    if (snakeCount == 4) {
        createFood1();
        drawFood1();
        createFood2();
        drawFood2();
        createFood3();
        drawFood3();
        createFood4();
        drawFood4();
        createFood5();
        drawFood5();
        createFood6();
        drawFood6();
        createFood7();
        drawFood7();
        createFood8();
        drawFood8();
    };
}

function nextTick() {
    if (run == true) {
        setTimeout(() => {
            clearBoard();
            drawFood1();
            drawFood2();
            drawFood3();
            drawFood4();
            drawFood5();
            drawFood6();
            drawFood7();
            drawFood8();
            moveSnake();
            drawSnake();
            nextTick();
        }, 70);
    };
};

function randomNumber(max, min) {
    return Math.round((Math.random() * (max - min) + min) / 12) * 12
};

function createFood1() {
    foodX1 = randomNumber(0, canvas.width - 10);
    foodY1 = randomNumber(0, canvas.height - 10);


    snake1.forEach(snakePart => {
        if (snakePart.x === foodX1 && snakePart.y === foodY1) {
            createFood1();
        }
    })
    snake2.forEach(snakePart => {
        if (snakePart.x === foodX1 && snakePart.y === foodY1) {
            createFood1();
        }

    })
    snake3.forEach(snakePart => {
        if (snakePart.x === foodX1 && snakePart.y === foodY1) {
            createFood1();
        }

    })
    snake4.forEach(snakePart => {
        if (snakePart.x === foodX1 && snakePart.y === foodY1) {
            createFood1();
        }

    })
};

function createFood2() {
    foodX2 = randomNumber(0, canvas.width - 10);
    foodY2 = randomNumber(0, canvas.height - 10);


    snake1.forEach(snakePart => {
        if (snakePart.x === foodX2 && snakePart.y === foodY2) {
            createFood2()
        }
    })
    snake2.forEach(snakePart => {
        if (snakePart.x === foodX2 && snakePart.y === foodY2) {
            createFood2()
        }

    })
    snake3.forEach(snakePart => {
        if (snakePart.x === foodX2 && snakePart.y === foodY2) {
            createFood2()
        }

    })
    snake4.forEach(snakePart => {
        if (snakePart.x === foodX2 && snakePart.y === foodY2) {
            createFood2()
        }

    })
};

function createFood3() {
    foodX3 = randomNumber(0, canvas.width - 10);
    foodY3 = randomNumber(0, canvas.height - 10);

    snake1.forEach(snakePart => {
        if (snakePart.x === foodX3 && snakePart.y === foodY3) {
            createFood3()
        }
    })
    snake2.forEach(snakePart => {
        if (snakePart.x === foodX3 && snakePart.y === foodY3) {
            createFood3()
        }

    })
    snake3.forEach(snakePart => {
        if (snakePart.x === foodX3 && snakePart.y === foodY3) {
            createFood3()
        }

    })
    snake4.forEach(snakePart => {
        if (snakePart.x === foodX3 && snakePart.y === foodY3) {
            createFood3()
        }

    })
};

function createFood4() {
    foodX4 = randomNumber(0, canvas.width - 10);
    foodY4 = randomNumber(0, canvas.height - 10);

    snake1.forEach(snakePart => {
        if (snakePart.x === foodX4 && snakePart.y === foodY4) {
            createFood4()
        }
    })
    snake2.forEach(snakePart => {
        if (snakePart.x === foodX4 && snakePart.y === foodY4) {
            createFood4()
        }

    })
    snake3.forEach(snakePart => {
        if (snakePart.x === foodX4 && snakePart.y === foodY4) {
            createFood4()
        }

    })
    snake4.forEach(snakePart => {
        if (snakePart.x === foodX4 && snakePart.y === foodY4) {
            createFood4()
        }

    })
};

function createFood5() {
    foodX5 = randomNumber(0, canvas.width - 10);
    foodY5 = randomNumber(0, canvas.height - 10);

    snake1.forEach(snakePart => {
        if (snakePart.x === foodX5 && snakePart.y === foodY5) {
            createFood5()
        }
    })
    snake2.forEach(snakePart => {
        if (snakePart.x === foodX5 && snakePart.y === foodY5) {
            createFood5()
        }

    })
    snake3.forEach(snakePart => {
        if (snakePart.x === foodX5 && snakePart.y === foodY5) {
            createFood5()
        }

    })
    snake4.forEach(snakePart => {
        if (snakePart.x === foodX5 && snakePart.y === foodY5) {
            createFood5()
        }

    })
};

function createFood6() {
    foodX6 = randomNumber(0, canvas.width - 10);
    foodY6 = randomNumber(0, canvas.height - 10);

    snake1.forEach(snakePart => {
        if (snakePart.x === foodX6 && snakePart.y === foodY6) {
            createFood6()
        }
    })
    snake2.forEach(snakePart => {
        if (snakePart.x === foodX6 && snakePart.y === foodY6) {
            createFood6()
        }

    })
    snake3.forEach(snakePart => {
        if (snakePart.x === foodX6 && snakePart.y === foodY6) {
            createFood6()
        }

    })
    snake4.forEach(snakePart => {
        if (snakePart.x === foodX6 && snakePart.y === foodY6) {
            createFood6()
        }

    })
};

function createFood7() {
    foodX7 = randomNumber(0, canvas.width - 10);
    foodY7 = randomNumber(0, canvas.height - 10);

    snake1.forEach(snakePart => {
        if (snakePart.x === foodX7 && snakePart.y === foodY7) {
            createFood7()
        }
    })
    snake2.forEach(snakePart => {
        if (snakePart.x === foodX7 && snakePart.y === foodY7) {
            createFood7()
        }

    })
    snake3.forEach(snakePart => {
        if (snakePart.x === foodX7 && snakePart.y === foodY7) {
            createFood7()
        }

    })
    snake4.forEach(snakePart => {
        if (snakePart.x === foodX7 && snakePart.y === foodY7) {
            createFood7()
        }

    })
};

function createFood8() {
    foodX8 = randomNumber(0, canvas.width - 10);
    foodY8 = randomNumber(0, canvas.height - 10);

    snake1.forEach(snakePart => {
        if (snakePart.x === foodX8 && snakePart.y === foodY8) {
            createFood8()
        }
    })
    snake2.forEach(snakePart => {
        if (snakePart.x === foodX8 && snakePart.y === foodY8) {
            createFood8()
        }

    })
    snake3.forEach(snakePart => {
        if (snakePart.x === foodX8 && snakePart.y === foodY8) {
            createFood8()
        }

    })
    snake4.forEach(snakePart => {
        if (snakePart.x === foodX8 && snakePart.y === foodY8) {
            createFood8()
        }

    })
};



function drawFood1() {
    c.fillStyle = 'brown';
    c.strokeStyle = 'black';
    c.lineWidth = 1;
    c.fillRect(foodX1, foodY1, unit, unit);
    c.strokeRect(foodX1, foodY1, unit, unit);
};

function drawFood2() {
    c.fillStyle = 'brown';
    c.strokeStyle = 'black';
    c.lineWidth = 1;
    c.fillRect(foodX2, foodY2, unit, unit);
    c.strokeRect(foodX2, foodY2, unit, unit);
};

function drawFood3() {
    c.fillStyle = 'brown';
    c.strokeStyle = 'black';
    c.lineWidth = 1;
    c.fillRect(foodX3, foodY3, unit, unit);
    c.strokeRect(foodX3, foodY3, unit, unit);
};

function drawFood4() {
    c.fillStyle = 'brown';
    c.strokeStyle = 'black';
    c.lineWidth = 1;
    c.fillRect(foodX4, foodY4, unit, unit);
    c.strokeRect(foodX4, foodY4, unit, unit);
};

function drawFood5() {
    c.fillStyle = 'brown';
    c.strokeStyle = 'black';
    c.lineWidth = 1;
    c.fillRect(foodX5, foodY5, unit, unit);
    c.strokeRect(foodX5, foodY5, unit, unit);
};

function drawFood6() {
    c.fillStyle = 'brown';
    c.strokeStyle = 'black';
    c.lineWidth = 1;
    c.fillRect(foodX6, foodY6, unit, unit);
    c.strokeRect(foodX6, foodY6, unit, unit);
};

function drawFood7() {
    c.fillStyle = 'brown';
    c.strokeStyle = 'black';
    c.lineWidth = 1;
    c.fillRect(foodX7, foodY7, unit, unit);
    c.strokeRect(foodX7, foodY7, unit, unit);
};

function drawFood8() {
    c.fillStyle = 'brown';
    c.strokeStyle = 'black';
    c.lineWidth = 1;
    c.fillRect(foodX8, foodY8, unit, unit);
    c.strokeRect(foodX8, foodY8, unit, unit);
};

function moveSnake() {
    const goingUp = (moveY1 == -unit);
    const goingDown = (moveY1 == unit);
    const goingRight = (moveX1 == unit);
    const goingLeft = (moveX1 == -unit);

    if (false) {}

    if (snake1[0].x == -12 && goingLeft) {
        snake1[0].x = 1200
    }
    if (snake1[0].x == 1200 && goingRight) {
        snake1[0].x = 0
    }
    if (snake1[0].y == -12 && goingUp) {
        snake1[0].y = 600
    }
    if (snake1[0].y == 600 && goingDown) {
        snake1[0].y = 0
    }

    const goingUp2 = (moveY2 == -unit);
    const goingDown2 = (moveY2 == unit);
    const goingRight2 = (moveX2 == unit);
    const goingLeft2 = (moveX2 == -unit);


    if (snake2[0].x == -12 && goingLeft2) {
        snake2[0].x = 1200
    }
    if (snake2[0].x == 1200 && goingRight2) {
        snake2[0].x = 0
    }
    if (snake2[0].y == -12 && goingUp2) {
        snake2[0].y = 600
    }
    if (snake2[0].y == 600 && goingDown2) {
        snake2[0].y = 0
    }

    const goingUp3 = (moveY3 == -unit);
    const goingDown3 = (moveY3 == unit);
    const goingRight3 = (moveX3 == unit);
    const goingLeft3 = (moveX3 == -unit);


    if (snake3[0].x == -12 && goingLeft3) {
        snake3[0].x = 1200
    }
    if (snake3[0].x == 1200 && goingRight3) {
        snake3[0].x = 0
    }
    if (snake3[0].y == -12 && goingUp3) {
        snake3[0].y = 600
    }
    if (snake3[0].y == 600 && goingDown3) {
        snake3[0].y = 0
    }

    const goingUp4 = (moveY4 == -unit);
    const goingDown4 = (moveY4 == unit);
    const goingRight4 = (moveX4 == unit);
    const goingLeft4 = (moveX4 == -unit);


    if (snake4[0].x == -12 && goingLeft4) {
        snake4[0].x = 1200
    }
    if (snake4[0].x == 1200 && goingRight4) {
        snake4[0].x = 0
    }
    if (snake4[0].y == -12 && goingUp4) {
        snake4[0].y = 600
    }
    if (snake4[0].y == 600 && goingDown4) {
        snake4[0].y = 0
    }

    function nte(num) {
        if (num == 1) {
            score1++
            snake2.pop();
            snake3.pop();
            snake4.pop();
        };
        if (num == 2) {
            score2++
            snake1.pop();
            snake3.pop();
            snake4.pop();
        };
        if (num == 3) {
            score3++
            snake1.pop();
            snake2.pop();
            snake4.pop();
        };
        if (num == 4) {
            score4++
            snake1.pop();
            snake2.pop();
            snake3.pop();
        };
        if (num == 5) {
            snake1.pop();
            snake2.pop();
            snake3.pop();
            snake4.pop();
        };
    };

    const head1 = { x: snake1[0].x + moveX1, y: snake1[0].y + moveY1 };
    snake1.unshift(head1);

    const head2 = { x: snake2[0].x + moveX2, y: snake2[0].y + moveY2 };
    snake2.unshift(head2);

    const head3 = { x: snake3[0].x + moveX3, y: snake3[0].y + moveY3 };
    snake3.unshift(head3);

    const head4 = { x: snake4[0].x + moveX4, y: snake4[0].y + moveY4 };
    snake4.unshift(head4);

    let touch1 = (snake1[0].x == foodX1 && snake1[0].y == foodY1);
    let touch2 = (snake2[0].x == foodX1 && snake2[0].y == foodY1);
    let touch3 = (snake3[0].x == foodX1 && snake3[0].y == foodY1);
    let touch4 = (snake4[0].x == foodX1 && snake4[0].y == foodY1);

    let touch12 = (snake1[0].x == foodX2 && snake1[0].y == foodY2);
    let touch22 = (snake2[0].x == foodX2 && snake2[0].y == foodY2);
    let touch32 = (snake3[0].x == foodX2 && snake3[0].y == foodY2);
    let touch42 = (snake4[0].x == foodX2 && snake4[0].y == foodY2);

    let touch13 = (snake1[0].x == foodX3 && snake1[0].y == foodY3);
    let touch23 = (snake2[0].x == foodX3 && snake2[0].y == foodY3);
    let touch33 = (snake3[0].x == foodX3 && snake3[0].y == foodY3);
    let touch43 = (snake4[0].x == foodX3 && snake4[0].y == foodY3);

    let touch14 = (snake1[0].x == foodX4 && snake1[0].y == foodY4);
    let touch24 = (snake2[0].x == foodX4 && snake2[0].y == foodY4);
    let touch34 = (snake3[0].x == foodX4 && snake3[0].y == foodY4);
    let touch44 = (snake4[0].x == foodX4 && snake4[0].y == foodY4);

    let touch15 = (snake1[0].x == foodX5 && snake1[0].y == foodY5);
    let touch25 = (snake2[0].x == foodX5 && snake2[0].y == foodY5);
    let touch35 = (snake3[0].x == foodX5 && snake3[0].y == foodY5);
    let touch45 = (snake4[0].x == foodX5 && snake4[0].y == foodY5);

    let touch16 = (snake1[0].x == foodX6 && snake1[0].y == foodY6);
    let touch26 = (snake2[0].x == foodX6 && snake2[0].y == foodY6);
    let touch36 = (snake3[0].x == foodX6 && snake3[0].y == foodY6);
    let touch46 = (snake4[0].x == foodX6 && snake4[0].y == foodY6);

    let touch17 = (snake1[0].x == foodX7 && snake1[0].y == foodY7);
    let touch27 = (snake2[0].x == foodX7 && snake2[0].y == foodY7);
    let touch37 = (snake3[0].x == foodX7 && snake3[0].y == foodY7);
    let touch47 = (snake4[0].x == foodX7 && snake4[0].y == foodY7);

    let touch18 = (snake1[0].x == foodX8 && snake1[0].y == foodY8);
    let touch28 = (snake2[0].x == foodX8 && snake2[0].y == foodY8);
    let touch38 = (snake3[0].x == foodX8 && snake3[0].y == foodY8);
    let touch48 = (snake4[0].x == foodX8 && snake4[0].y == foodY8);

    if (touch1 || touch2 || touch3 || touch4 ||
        touch12 || touch22 || touch32 || touch42 ||
        touch13 || touch23 || touch33 || touch43 ||
        touch14 || touch24 || touch34 || touch44 ||
        touch15 || touch25 || touch35 || touch45 ||
        touch16 || touch26 || touch36 || touch46 ||
        touch17 || touch27 || touch37 || touch47 ||
        touch18 || touch28 || touch38 || touch48
    ) {
        if (touch1) {
            nte(1);
            createFood1();
        };
        if (touch2) {
            nte(2);
            createFood1();
        };
        if (touch3) {
            nte(3);
            createFood1();
        };
        if (touch4) {
            nte(4);
            createFood1();
        };
        //////////
        if (touch12) {
            nte(1);
            createFood2();
        };
        if (touch22) {
            nte(2);
            createFood2();
        };
        if (touch32) {
            nte(3);
            createFood2();
        };
        if (touch42) {
            nte(4);
            createFood2();
        };
        ///////////
        if (touch13) {
            nte(1);
            createFood3();
        };
        if (touch23) {
            nte(2);
            createFood3();
        };
        if (touch33) {
            nte(3);
            createFood3();
        };
        if (touch43) {
            nte(4);
            createFood3();
        };
        ///////
        if (touch14) {
            nte(1);
            createFood4();
        };
        if (touch24) {
            nte(2);
            createFood4();
        };
        if (touch34) {
            nte(3);
            createFood4();
        };
        if (touch44) {
            nte(4);
            createFood4();
        };
        ///////
        if (touch15) {
            nte(1);
            createFood5();
        };
        if (touch25) {
            nte(2);
            createFood5();
        };
        if (touch35) {
            nte(3);
            createFood5();
        };
        if (touch45) {
            nte(4);
            createFood5();
        };
        ////////
        if (touch16) {
            nte(1);
            createFood6();
        };
        if (touch26) {
            nte(2);
            createFood6();
        };
        if (touch36) {
            nte(3);
            createFood6();
        };
        if (touch46) {
            nte(4);
            createFood6();
        };
        ///////
        if (touch17) {
            nte(1);
            createFood7();
        };
        if (touch27) {
            nte(2);
            createFood7();
        };
        if (touch37) {
            nte(3);
            createFood7();
        };
        if (touch47) {
            nte(4);
            createFood7();
        };
        ///////
        if (touch18) {
            nte(1);
            createFood8();
        };
        if (touch28) {
            nte(2);
            createFood8();
        };
        if (touch38) {
            nte(3);
            createFood8();
        };
        if (touch48) {
            nte(4);
            createFood8();
        };
        ///////

    } else {
        nte(5)
    }

}

function clearBoard() {
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    let head1 = { x: snake1[0].x, y: snake1[0].y };

    snake1.forEach(part => {
        if (part.x == head1.x && part.y == head1.y) {
            c.lineWidth = 2;
            c.fillStyle = 'black';
            c.strokeStyle = 'black';
            c.fillRect(part.x, part.y, unit, unit);
            c.strokeRect(part.x, part.y, unit, unit);
        } else {
            c.lineWidth = 2;
            c.fillStyle = 'green';
            c.strokeStyle = 'black';
            c.fillRect(part.x, part.y, unit, unit);
            c.strokeRect(part.x, part.y, unit, unit);

        }

    });
    let head2 = { x: snake2[0].x, y: snake2[0].y };

    snake2.forEach(part => {
        if (part.x == head2.x && part.y == head2.y) {
            c.lineWidth = 2;
            c.fillStyle = 'black';
            c.strokeStyle = 'black';
            c.fillRect(part.x, part.y, unit, unit);
            c.strokeRect(part.x, part.y, unit, unit);
        } else {
            c.lineWidth = 2;
            c.fillStyle = 'red';
            c.strokeStyle = 'black';
            c.fillRect(part.x, part.y, unit, unit);
            c.strokeRect(part.x, part.y, unit, unit);

        }
    });
    let head3 = { x: snake3[0].x, y: snake3[0].y };

    snake3.forEach(part => {
        if (part.x == head3.x && part.y == head3.y) {
            c.lineWidth = 2;
            c.fillStyle = 'black';
            c.strokeStyle = 'black';
            c.fillRect(part.x, part.y, unit, unit);
            c.strokeRect(part.x, part.y, unit, unit);
        } else {
            c.lineWidth = 2;
            c.fillStyle = 'blue';
            c.strokeStyle = 'black';
            c.fillRect(part.x, part.y, unit, unit);
            c.strokeRect(part.x, part.y, unit, unit);

        }
    });
    let head4 = { x: snake4[0].x, y: snake4[0].y };

    snake4.forEach(part => {
        if (part.x == head4.x && part.y == head4.y) {
            c.lineWidth = 2;
            c.fillStyle = 'black';
            c.strokeStyle = 'black';
            c.fillRect(part.x, part.y, unit, unit);
            c.strokeRect(part.x, part.y, unit, unit);
        } else {
            c.lineWidth = 2;
            c.fillStyle = 'yellow';
            c.strokeStyle = 'black';
            c.fillRect(part.x, part.y, unit, unit);
            c.strokeRect(part.x, part.y, unit, unit);

        }
    });
}

function changeDirection(event) {
    const keyDown = event.keyCode;
    if (keyDown == 32) {
        showResualt()
    }
    const LEFT = 37;
    const RIGHT = 39;
    const UP = 38;
    const DOWN = 40;

    const goingUp = (moveY1 == -unit);
    const goingDown = (moveY1 == unit);
    const goingRight = (moveX1 == unit);
    const goingLeft = (moveX1 == -unit);




    if (keyDown == UP && !goingDown) {
        moveX1 = 0;
        moveY1 = -unit;
    }
    if (keyDown == DOWN && !goingUp) {
        moveX1 = 0;
        moveY1 = unit;
    }
    if (keyDown == RIGHT && !goingLeft) {
        moveX1 = unit;
        moveY1 = 0;
    }
    if (keyDown == LEFT && !goingRight) {
        moveX1 = -unit;
        moveY1 = 0;
    }

    const ALEFT = 65;
    const DRIGHT = 68;
    const WUP = 87;
    const SDOWN = 83;

    const goingUp2 = (moveY2 == -unit);
    const goingDown2 = (moveY2 == unit);
    const goingRight2 = (moveX2 == unit);
    const goingLeft2 = (moveX2 == -unit);





    if (keyDown == WUP && !goingDown2) {
        moveX2 = 0;
        moveY2 = -unit;
    }
    if (keyDown == SDOWN && !goingUp2) {
        moveX2 = 0;
        moveY2 = unit;
    }
    if (keyDown == DRIGHT && !goingLeft2) {
        moveX2 = unit;
        moveY2 = 0;
    }
    if (keyDown == ALEFT && !goingRight2) {
        moveX2 = -unit;
        moveY2 = 0;
    }

    const FLEFT = 70;
    const HRIGHT = 72;
    const TUP = 84;
    const GDOWN = 71;

    const goingUp3 = (moveY3 == -unit);
    const goingDown3 = (moveY3 == unit);
    const goingRight3 = (moveX3 == unit);
    const goingLeft3 = (moveX3 == -unit);



    if (keyDown == TUP && !goingDown3) {
        moveX3 = 0;
        moveY3 = -unit;
    }
    if (keyDown == GDOWN && !goingUp3) {
        moveX3 = 0;
        moveY3 = unit;
    }
    if (keyDown == HRIGHT && !goingLeft3) {
        moveX3 = unit;
        moveY3 = 0;
    }
    if (keyDown == FLEFT && !goingRight3) {
        moveX3 = -unit;
        moveY3 = 0;
    }


    const KLEFT = 75;
    const RIGHT4 = 186;
    const OUP = 79;
    const LDOWN = 76;

    const goingUp4 = (moveY4 == -unit);
    const goingDown4 = (moveY4 == unit);
    const goingRight4 = (moveX4 == unit);
    const goingLeft4 = (moveX4 == -unit);


    if (keyDown == OUP && !goingDown4) {
        moveX4 = 0;
        moveY4 = -unit;
    }
    if (keyDown == LDOWN && !goingUp4) {
        moveX4 = 0;
        moveY4 = unit;
    }
    if (keyDown == RIGHT4 && !goingLeft4) {
        moveX4 = unit;
        moveY4 = 0;
    }
    if (keyDown == KLEFT && !goingRight4) {
        moveX4 = -unit;
        moveY4 = 0;
    }
};
let v = 2;

function start() {
    if (v >= 0) {
        setTimeout(() => {
            span.textContent = v;
            v--
            start();
        }, 1000);
    } else {
        startGame();
    }
}
start();