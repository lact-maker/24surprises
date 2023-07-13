document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() === '秋季') {
        document.getElementById('message').textContent = "挑战成功，显示原图！恭喜你解锁线索十六：鱼跃于渊";
        document.getElementById('message').style.color = "green";
        var img = document.createElement("img");
        img.src = "真实图片.jpg";  // 将这里的 "congratulations.jpg" 替换为你的图片文件路径
        img.width = 200;
        img.height = 300;
        var container = document.getElementById("congratsImageContainer");
        container.innerHTML = "";
        container.appendChild(img);
    } else {
        document.getElementById('message').textContent = "回答季节了啦。请再试一次！";
        document.getElementById('message').style.color = "red";
    }
});
