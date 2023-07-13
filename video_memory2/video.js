window.onload = function() {
    document.getElementById('submit').addEventListener('click', function() {
        var userInput = document.getElementById('user_input').value;
        var message = document.getElementById('message');

        if (userInput.toLowerCase() === '15,7') { 
            message.innerText = '挑战成功！恭喜你解锁线索十七：困兽之斗';
            message.style.color = 'green';
        } else {
            message.innerText = '只看视频中的噢，另外用逗号隔开，用半角不用全角噢，好好数一数吧。';
            message.style.color = 'red';
        }
    });
};