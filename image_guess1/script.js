document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() === '武林孤儿') {
        document.getElementById('message').textContent = "挑战成功，显示原图！恭喜你解锁线索六：阿布扎比的广场";
        document.getElementById('message').style.color = "green";
        var img = document.createElement("img");
        img.src = "真实图片.jpg";  
        img.width = 300;
        img.height = 200;
        var container = document.getElementById("congratsImageContainer");
        container.innerHTML = "";
        container.appendChild(img);
    } else {
        document.getElementById('message').textContent = "不好意思噢，答错了噢。请再试一次！";
        document.getElementById('message').style.color = "red";
    }
});
