window.onload = function() {
    document.getElementById('submit').addEventListener('click', function() {
        var userInput = document.getElementById('user_input').value;
        var message = document.getElementById('message');

        if (userInput.toLowerCase() === '236') { // 你可以将 'yes' 换成你的正确答案
            message.innerText = '挑战成功！恭喜你解锁线索十三：丫丫作曲';
            message.style.color = 'green';
        } else {
            message.innerText = '算差值噢，用减法，小婷猪！';
            message.style.color = 'red';
        }
    });
};