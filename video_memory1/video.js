window.onload = function() {
    document.getElementById('submit').addEventListener('click', function() {
        var userInput = document.getElementById('user_input').value;
        var message = document.getElementById('message');

        if (userInput.toLowerCase() === '15,9') { 
            message.innerText = '挑战成功！恭喜你解锁线索九：鹅鸭';
            message.style.color = 'green';
        } else {
            message.innerText = '只看视频中的噢，另外用逗号隔开，用半角不用全角噢，再仔细看一看吧~';
            message.style.color = 'red';
        }
    });
};