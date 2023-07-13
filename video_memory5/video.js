window.onload = function() {
    document.getElementById('submit').addEventListener('click', function() {
        var userInput = document.getElementById('user_input').value;
        var message = document.getElementById('message');

        if (userInput.toLowerCase() === '4') { 
            message.innerText = '挑战成功！恭喜你解锁线索七：崔美美的贴贴';
            message.style.color = 'green';
        } else {
            message.innerText = '输入数字就行了啦！';
            message.style.color = 'red';
        }
    });
};