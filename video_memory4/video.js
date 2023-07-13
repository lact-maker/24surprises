window.onload = function() {
    document.getElementById('submit').addEventListener('click', function() {
        var userInput = document.getElementById('user_input').value;
        var message = document.getElementById('message');

        if (userInput.toLowerCase() === '小飞象') { // 你可以将 'yes' 换成你的正确答案
            message.innerText = '挑战成功！恭喜你解锁线索二十：说爱我';
            message.style.color = 'green';
        } else {
            message.innerText = '好好想想噢，小婷猪，是一个迪士尼卡通名字！';
            message.style.color = 'red';
        }
    });
};