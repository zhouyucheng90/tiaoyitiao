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
        
        startpage.style.display = 'flex';
        restartpage.style.display = 'none';

        startBtn.addEventListener('click', function () {
            startpage.style.display = 'none';
            navMenu.style.display = 'none';
            game.start();
        });

        restartBtn.addEventListener('click', function () {
            restartpage.style.display = 'none';
            navMenu.style.display = 'none';
            game.restart();
        });

        //游戏失败回调函数
        game.failCallback = function (score) {
            restartpage.style.display = 'flex';
            blindBox.style.display = 'none';
            navMenu.style.display = 'block';
            scoreEl.innerHTML = score;
        };

        //登录
        login.addEventListener('click', function () {
            console.log('login')
        });
    };
}

module.exports = {
    init
}