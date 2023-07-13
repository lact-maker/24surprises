// 这是一个包含24个挑战的数组，每个挑战都有一个问题和一个答案
let challenges = [
    { //1
        question: "一年伊始，佳期如许，一起在春风中相遇，从此草木皆知。\n \n首先让我们来玩一个简单的数字游戏吧。假设你在周一早上有3个苹果，然后你去超市买了4个苹果。当你在超市时，你又捡到了十块钱，于是你又买了2个苹果。然后你的好朋友张雨露看你苹果不多，所以给你了5个苹果。后来，张老师也看你苹果不多，于是她又给你了3个苹果。但是你午饭吃的很饱，所以你下午只吃掉了1个苹果。然后，你又收到了田老师送你的8个苹果。当你回家的时候，绝世好男人看见你手上的苹果，觉得很馋，你就给了他2个。晚上，你又吃掉了4个苹果。而在你睡觉之前，你的好崽崽又偷偷从超市给你买回来了10个苹果。那么请问现在你一共有多少个苹果？", 
        checkAnswer: function(answer) {
        return ["28", "28个", "28个苹果"].includes(answer.trim());
        },
        surprise: '回答正确,恭喜你解锁线索一：明天的太阳' ,
        hint1: '不会吧，不会吧，这么简单都有人能答错呀？？？',
        hint2:'就是简单的加减乘除，有耐心一点。再想想吧，你可以的!',
        hint3:'不要灰心。答案只需要输入数字就可以了噢',
        hint4:'噢，虽然你还是没有答对，但我仍然会一直爱我们家的傻猪的。这是正确答案：28'
    },
    { //2
        question: '春雨如酒，醉了青山，入了芳菲。\n \n接下来是“昵称指南”，请给出六个以上小婷猪对小澳猪的亲密昵称以及六个以上小澳猪对小婷猪的亲密昵称', 
        checkAnswer: function(answer) {
            let nicknames = ["小学生","小学生崽","小澳猪","澳神猪","崽崽猪","奋斗逼","猪猪","崽崽","绝世好男人","小婷猪","么么猪","臭卷宝","臭老师","小咪","陆崽崽","陆贴贴","陆啵啵","仔仔","仔仔猪","阿巴猪","老公","老婆","陆颜狗","老公大人","老婆大人","宝贝猪","崔美美","陆老师","大帅逼"];
            // 将答案分割为数组，然后检查每个昵称是否在答案中出现
            let answerArray = answer.split(',');
            // // 打印用户输入和昵称列表，以便进行调试
            console.log('用户输入：', answerArray);
            console.log('昵称列表：', nicknames);
            let count = 0;
            for (let nickname of nicknames) {
                if (answerArray.includes(nickname)) {
                    count++;
                }
            }
            // 如果至少 12 个昵称都在答案中出现，那么答案就是正确的
            return count >= 12;
        },
        surprise: '回答正确,恭喜你解锁线索二：阿卡贝拉的眼泪' ,
        hint1:'请用逗号隔开噢，逗号要用半角不能用全角噢',
        hint2:'尽可能地输入的多一些噢，输入的越多，成功的概率越高',
        hint3:'不会吧，不会吧，这都还答不上来吗，是我不配了，呜呜呜',
        hint4:'默契没了，诶，真是拿你没办法，你还是直接联系我来讨答案吧，呜呜呜'
    },
    { //3
        question: '万物野蛮生长，你我同游观赏。\n \n接下来请观看一段视频，输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('video_memory6/video_memory6.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //4
        question: '十里春风，向光而行。三里桃花，为你而来。\n \n前面的关卡是不是太简单了呢，接下来我们要上点强度了噢，请输入姓名，点击确定进入游戏：美女来找茬！', 
        checkAnswer: function() {
                window.open('find-different/find-different.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //5
        question: '昨日过往，未来光明。四月，带着满身诗意，翩然而来。\n \n接下来是视频问答，请输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('video_memory7/video_memory7.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //6
        question: '陪你晴天雨天，知你冷暖阴晴。\n \n接下来是图像识别，请输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('image_guess1/image_guess1.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //7
        question: '草长莺飞日，蛙声蝉鸣时。落花随春去，余香伴夏来。\n \n接下来是视频问答，请输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('video_memory5/video_memory5.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //8
        question: '万物小得盈满，美好恰逢其时。\n \n谜语总是充满了未知，解开这个谜语，你将会得到新的线索。猜谜语：没有眼睛却能看见，没有耳朵却能听见，它不能随你走到荷兰，没有生命却能慢慢成长，无声无息，你会一直感受到它的强大，它是什么？', 
        checkAnswer: function(answer) {
            return ["爱情"].includes(answer.trim());
        },
        surprise: '回答正确,恭喜你解锁线索八：体能的极限' ,
        hint1:'回答错误，再好好想想吧~',
        hint2:'回答错误，再好好想想吧~',
        hint3:'回答错误，再好好想想吧~',
        hint4:'回答错误，再好好想想吧~'
    },
    { //9
        question: '仲夏伊始好风光，青春作伴不散场。\n \n接下来请观看一段视频，输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('video_memory1/video_memory1.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //10
        question: '在最长的白昼里，与所有美好相遇相知。\n \n请回答问题：你的对象,小澳猪身高是多少？A:170cm,B:172cm,C:175,D:180cm,E:182cm', 
        checkAnswer: function(answer) {
            return ["E"].includes(answer.trim());
        },
        surprise: '回答正确,恭喜你解锁线索十：v小姐' ,
        hint1:'回答错误，再好好想想吧~',
        hint2:'回答错误，再好好想想吧~',
        hint3:'回答错误，再好好想想吧~',
        hint4:'回答错误，再好好想想吧~'
    },
    { //11
        question: '暑于你的夏天，有风清扬，枕湖纳微凉。\n \n哈哈哈，皮一下我就是很开心！接下来让我们含情脉脉一点，慢慢回忆。请输入姓名，点击确定进入游戏：记忆印痕！', 
        checkAnswer: function() {
                window.open('8-puzzle/8-puzzle.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'  
    },
    { //12
        question: '穿越人海，跨过热浪，全世界都想去看看。\n \n接下来是英文翻译挑战：听我说，谢谢你，因为有你，温暖了四季！', 
        checkAnswer: function(answer) {
            return ["Listen to me, thank you. Because of you, it has warmed the four seasons!"].includes(answer.trim());
        },
        surprise: '回答正确,恭喜你解锁线索十二：rua猪' ,
        hint1:'回答错误，温暖了四季用主动语态噢！',
        hint2:'回答错误，注意全角和半角的区别噢！',
        hint3:'回答错误，注意英文表述中每一个标点后都有一个小空格噢！',
        hint4:'回答错误，再好好想想吧~'
    },
    { //13
        question: '窗外流动的光，用风染红的叶，被我喜欢的你。\n \n接下来请观看一段视频，输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('video_memory3/video_memory3.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //14
        question: '天气不冷不热，日子不紧不慢，温柔不偏不倚。\n \n请输入姓名，点击确定进入游戏：钓鱼行动！', 
        checkAnswer: function() {
                window.open('fish game/fish game.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //15
        question: '秋风渐起，白露上线，对你开始依恋。\n \n请回答问题：衢州和恩施的宣传标语分别是什么？', 
        checkAnswer: function(answer) {
            return ["南孔圣地,衢州有礼! 世界硒都,仙居恩施!"].includes(answer.trim());
        },
        surprise: '回答正确,恭喜你解锁线索十五：阿拉伯的项链' ,
        hint1:'格式参考：四字,四字! 四字,四字!',
        hint2:'回答错误，再好好想想吧！',
        hint3:'格式参考：四字,四字! 四字,四字!',
        hint4:'回答错误，再好好想想吧！'
    },
    { //16
        question: '日光与月色打成平手，陷入秋日温柔。\n \n接下来是图像识别，请输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('image_guess2/image_guess2.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //17
        question: '小院落叶初凝露，轻寒正是可人天。\n \n接下来请观看一段视频，输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('video_memory2/video_memory2.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //18
        question: '秋将尽，露结为霜；冬欲来，情结为爱。\n \n接下来是默契考验：请输入0~9之间的任一数字，考验一下我俩的默契', 
        checkAnswer: function(answer) {
            return ["6"].includes(answer.trim());
        },
        surprise: '回答正确,恭喜你解锁线索十八：i老师' ,
        hint1:'回答错误，哎呀，还是再试一次吧',
        hint2:'回答错误，哦豁，好好想想后再试一次吧',
        hint3:'回答错误，还没答对吗，我快哭了',
        hint4:'回答错误，呜呜呜'
    },
    { //19
        question: '暖阳待雪，灯火可亲；冬日漫长，与你身旁。\n \n请输入姓名，点击确定进入游戏：恋爱拼图！', 
        checkAnswer: function() {
                window.open('picture puzzle/picture puzzle.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'  
    },
    { //20
        question: '寒风阵阵，清香缕缕，牵起手，一起到白头。\n \n接下来请观看一段视频，输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('video_memory4/video_memory4.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //21
        question: '岁暮清欢，流年安暖，执笔问安，落雪为念。\n \n请输入姓名，点击确定进入游戏：小咪快跑！', 
        checkAnswer: function() {
                window.open('Jump-RunGame/Jump-RunGame.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //22
        question: '一念风起，一念冬至。愿你浅喜暖望，岁岁无忧。\n \n接下来是判断对错：\n1.有研究显示，人的大脑在恋爱时会产生相同的化学反应，就像吸食可卡因一样。\n2.恋人之间的眼神接触可以增强彼此的感情。\n3.爱情是必需品，没有它，就无法生活。', 
        checkAnswer: function(answer) {
            return ["对对对"].includes(answer.trim());
        },
        surprise: '回答正确,恭喜你解锁线索二十二：哦哦' ,
        hint1:'回答对或错即可',
        hint2:'没有标点符号',
        hint3:'回答错误，再好好想想吧~',
        hint4:'回答错误，再好好想想吧~'
    },
    { //23
        question: '小寒日初长，风吹腊梅香。围炉浅品茶，静待人间暖。\n \n接下来请观看一段视频，输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('video_memory8/video_memory8.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
    { //24
        question: '春有百花秋有月，夏有凉风冬有雪。若有伊人长相守，便是人间好时节。\n \n接下来请观看一段视频，输入姓名，点击确定开始！', 
        checkAnswer: function() {
                window.open('video_memory9/video_memory9.html', '_blank');
            return true;  // 因为游戏本身没有一个特定的"答案"，所以我们返回true表示挑战完成
        },
        surprise: '恭喜你完成挑战，可不要偷懒噢，挑战完成后才能解锁重要线索'
    },
];

// 获取challenges容器
const container = document.getElementById('challenges');

    // 建立一个挑战名称数组
const challengeNames = [
        "立春：爱情缘起", "雨水：心灵指南针", "惊蛰：什刹海的涟漪", "春分：美女来找茬", "清明：北海往事",
        "谷雨：追觅小西天", "立夏：解读乐高", "小满：以爱为谜", "芒种：乐园交响", "夏至：爱的另一半",
        "小暑：记忆印痕", "大暑：语言诗篇", "立秋：勇敢探险", "处暑：钓鱼行动", "白露：城市旅程",
        "秋分：清华园的约定", "寒露：向上攀登", "霜降：默契考验", "立冬：恋爱拼图", "小雪：爱的馈赠",
        "大雪：小咪快跑", "冬至：认知阵列", "小寒：恋爱瞬间", "大寒：爱情终章"
    ];

// 用来跟踪每个问题的错误尝试次数的对象
const attempts = {};

// 为每个挑战创建一个按钮和一个问题
challenges.forEach((challenge, index) => {
    // 初始化尝试次数
    attempts[index] = 0;
        
    // 创建一个按钮
    const button = document.createElement('button');
    button.textContent = challengeNames[index];
    button.classList.add('locked');

    // 每个小时解锁一个新的挑战
    const now = new Date();
    const hoursSinceMidnight = now.getHours();
   //const hoursSinceMidnight = 24;
    if (hoursSinceMidnight >= index) {
        button.classList.remove('locked');
        button.addEventListener('click', () => {
            // 当用户点击按钮时，显示问题并提示用户输入答案
            let answer = prompt(challenge.question);
            // 使用挑战的 checkAnswer 函数检查答案
            let isAnswerCorrect = challenge.checkAnswer(answer);
            // 如果用户的答案正确，显示惊喜，并保存进度
            if (isAnswerCorrect) {
                alert(challenge.surprise);
                button.classList.add('solved');
                localStorage.setItem('progress', index + 1);
                // 更新进度条
                let completedChallenges = localStorage.getItem('progress') || 0;
                let totalChallenges = challenges.length;
                let progress = (completedChallenges / totalChallenges) * 100;
            
                // 更新进度条
                document.getElementById('progress-bar').style.width = progress + '%';
            
                // 更新进度文本
                document.getElementById('progress-text').textContent = `${completedChallenges}/${totalChallenges}`;         
            } else {
                // 如果用户的答案错误，显示错误反馈并给出提示
                button.classList.add('wrong');
                setTimeout(() => button.classList.remove('wrong'), 1000);
                attempts[index]++; // 增加尝试次数
                switch (attempts[index]) {
                    case 1:
                        alert(challenge.hint1);
                        break;
                    case 2:
                        alert(challenge.hint2);
                        break;
                    case 3:
                        alert(challenge.hint3 );
                        break;
                    default:
                        alert(challenge.hint4);
           }
        }
        });
        
    }

    // 如果用户之前已经解决了这个挑战，恢复进度
    if (index < localStorage.getItem('progress')) {
        button.classList.remove('locked');
        button.classList.add('solved');
        // 更新进度条
        let completedChallenges = localStorage.getItem('progress') || 0;
        let totalChallenges = challenges.length;
        let progress = (completedChallenges / totalChallenges) * 100;
    
        // 更新进度条
        document.getElementById('progress-bar').style.width = progress + '%';
    
        // 更新进度文本
        document.getElementById('progress-text').textContent = `${completedChallenges}/${totalChallenges}`;  
    }

    // 将按钮添加到容器中
    container.appendChild(button);
});

// 替换成你女朋友的生日日期，格式为'YYYY-MM-DD'，比如2023年7月30日就是'2023-07-30'
let birthday = '2023-07-22';

let countDownDate = new Date(birthday + " 00:00:00").getTime();

let x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "天 " + hours + "小时 "
    + minutes + "分钟 " + seconds + "秒 ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "HAPPY BIRTHDAY!";
    }
}, 1000);


