window.onload = function() {
    document.getElementById('submit').addEventListener('click', function() {
        var userInput = document.getElementById('user_input').value;
        var message = document.getElementById('message');

        if (userInput.toLowerCase() === '北海') { 
            message.innerText = '挑战成功！恭喜你解锁线索五：陆小帅的啵啵';
            message.style.color = 'green';
        } else {
            message.innerText = '多试几次地名噢，可能是形式不对！';
            message.style.color = 'red';
        }
    });
};