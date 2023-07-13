let character = document.getElementById('character')
let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue('right'));
let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue('width'));
let ground = document.getElementById('ground');
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue('bottom'));
let groundHeight = parseInt(window.getComputedStyle(ground).getPropertyValue('height'));
let isjumping = false;
let upTime;
let downTime;
let displayScore = document.getElementById('score');
let score=0;

function jump(){
    if(isjumping) return;
    upTime = setInterval(() => {
    if(characterBottom >= groundHeight + 240) {
    clearInterval(upTime);
    downTime = setInterval(() => {
        if(characterBottom <= groundHeight + 10){
            clearInterval(downTime);
            isjumping = false;
        }
        characterBottom -= 10;
        character.style.bottom = characterBottom + 'px';
    }, 20); 
    }
    characterBottom += 10;
    character.style.bottom = characterBottom + 'px';
    isjumping = true;
    }, 20);
}

function showScore(){
    score++;
    displayScore.innerText= score;
}
setInterval(showScore, 100);

function generateObstacle(){
    let obstacles = document.querySelector('.obstacles');
    let obstacle = document.createElement('div');
    obstacle.setAttribute('class', 'obstacle');
    obstacles.appendChild(obstacle);

     let randomTimeout = Math.floor(Math.random() * 1000) + 1000;
    let obstacleRight = -30;
    let obstacleBottom = 100;
    let obstacleWidth = 30;
   let obstacleHeight = Math.floor(Math.random() * 50) + 50;

     obstacle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

    function moveObstacle(){
    obstacleRight += 5;
    obstacle.style.right = obstacleRight + 'px';
    obstacle.style.bottom = obstacleBottom + 'px';
    obstacle.style.width = obstacleWidth + 'px';
    obstacle.style.height = obstacleHeight + 'px';
    if(characterRight >= obstacleRight - characterWidth 
        && characterRight <= obstacleRight + obstacleWidth 
        && characterBottom <= obstacleBottom + obstacleHeight){
        alert('诶呀，就差一步了，加油噢，你一定可以完成的!');
        clearInterval(obstacleInterval);
        clearTimeout(obstacleTimeout);
        location.reload();
    }
    }
    let obstacleInterval = setInterval(moveObstacle, 20);
    let obstacleTimeout = setTimeout(generateObstacle, randomTimeout);
}
generateObstacle();

function control(e){
    if (e.key == 'ArrowUp' || e.key == ' '){
        jump();
    }
}
document.addEventListener('keydown', control);

function showInstructions() {
    let instructions = "小咪快跑！！！你需要通过空格键控制小咪跳过不断出现的障碍物。" +
        "当分数超过400时，挑战成功。" ;
    let instructionsElement = document.createElement('p');
    instructionsElement.innerText = instructions;
    document.body.prepend(instructionsElement);
}

function checkVictory() {
    if (score >= 400) {
        document.getElementById('victoryMessage').style.display = 'block';
    }
}

function showScore() {
    score++;
    displayScore.innerText = score;
    checkVictory();  // 在增加分数后检查是否胜利
}
showInstructions();  // 在文件的最后调用这个函数来显示游戏说明