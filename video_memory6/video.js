window.onload = function() {
    document.getElementById('submit').addEventListener('click', function() {
        var userInput = document.getElementById('user_input').value;
        var message = document.getElementById('message');

        if (userInput.toLowerCase() === '棕色') { 
            message.innerText = '挑战成功！恭喜你解锁线索三：坤坤的篮球';
            message.style.color = 'green';
        } else {
            message.innerText = '嗯？到底是什么颜色！再想一想，应该很简单哦~';
            message.style.color = 'red';
        }
    });
};