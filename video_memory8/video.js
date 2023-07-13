window.onload = function() {
    document.getElementById('submit').addEventListener('click', function() {
        var userInput = document.getElementById('user_input').value;
        var message = document.getElementById('message');

        if (userInput.toLowerCase() === '把爱你写进我的生命里') { // 你可以将 'yes' 换成你的正确答案
            message.innerText = '挑战成功！恭喜你解锁线索二十三：v先生';
            message.style.color = 'green';
        } else {
            message.innerText = '人家原话说的是进啦，不是在啦！';
            message.style.color = 'red';
        }
    });
};