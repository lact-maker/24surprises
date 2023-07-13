window.onload = function() {
    document.getElementById('submit').addEventListener('click', function() {
        var userInput = document.getElementById('user_input').value;
        var message = document.getElementById('message');

        if (userInput.toLowerCase() === '看浪漫有迹可循,让热爱漫无边际') { // 你可以将 'yes' 换成你的正确答案
            message.innerText = '挑战成功！恭喜你解锁线索二十四：峨眉山上 \n 恭喜你完成全部挑战，请按照线索顺序排序，取每个短语的首字母，集成为网址域名，打开浏览器，解密终极挑战。注意：后四位前面有一个小点间隔。\n一年一季一月一日一时一分一秒，终归于二十四时；一颦一笑一嗔一怒一喜一念一爱，集结于二十四时';
            message.style.color = 'green';
        } else {
            message.innerText = '这都能错？是不是又是半角全角没区分？';
            message.style.color = 'red';
        }
    });
};