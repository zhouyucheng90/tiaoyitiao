const Game = require('./game')


function init() {
    window.onload = function () {
        var game = new Game();

        var startpage = document.querySelector('.startPage');
        var restartpage = document.querySelector('.restartPage');
        var startBtn = document.querySelector('.start-btn');
        var restartBtn = document.querySelector('.restart-btn');
        var scoreEl = document.querySelector('.score');
        var login = document.querySelector('.login');
        var navMenu = document.querySelector('.navMenu');
        var blindBox = document.querySelector('.blindBox');
        var goGame = document.querySelector('.goGame');
        
        startpage.style.display = 'flex';
        restartpage.style.display = 'none';

        startBtn.addEventListener('click', function () {
            startpage.style.display = 'none';
            // navMenu.style.display = 'none';
            navMenu.classList.remove('showNavMenu');
            game.start();
        });

        restartBtn.addEventListener('click', function () {
            restartpage.style.display = 'none';
            // navMenu.style.display = 'none';
            navMenu.classList.remove('showNavMenu');
            game.restart();
        });

        //游戏失败回调函数
        game.failCallback = function (score) {
            restartpage.style.display = 'flex';
            blindBox.style.display = 'none';
            scoreEl.innerHTML = score;
        };

        //登录
        login.addEventListener('click', function () {
            console.log('login')
            const intentUrl = `https://telegram.me/share/url?url=${encodeURIComponent(`https://zhouyucheng90.github.io/jumpindex/index.html?user_id=5612649869`)}`;
			window.open(intentUrl, "_blank");
        });

        navMenu.addEventListener('click', function () {
            navMenu.classList.add('showNavMenu');
        });

        goGame.addEventListener('click', function () {
            console.log(11111111)
            // sendMessage(5612649869, '0x12345678901234567890', 'test')
            const intentUrl = `https://telegram.me/share/url?url=${encodeURIComponent(`https://zhouyucheng90.github.io/jumpindex/index.html?user_id=5612649869`)}`;
            window.location.href = intentUrl;
            
        });

        
    };

    async function sendMessage(ChatId ,wallet, screenName) {
        const token = '6951172037:AAEkB64F9pvyja0mbUtyxCMUgyv8YNYXRJ4';
        let message = '123';
        
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: ChatId, text: message , parse_mode: 'HTML', 
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '🎊开始抽奖',
                    switch_inline_query: "Enter your custom share message here"
                  }
                ]
              ]
            }
          }),
        };
    
        try {
          const response = await fetch(url, options);
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
}

module.exports = {
    init
}