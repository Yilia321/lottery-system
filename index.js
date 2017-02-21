window.onload= function () {
    var arr = ['苹果', '水蜜桃', '西瓜', '火龙果', '葡萄', '榴莲', '橙子', '芒果', '香蕉', '梨', '柑橘', '西瓜', '火龙果', '葡萄', '榴莲', '橙子'];
    var title = document.getElementById('title'),
        startBtn = document.getElementById('start'),
        endBtn = document.getElementById('end'),
        resBtn = document.getElementById('res'),
        flag = true,    //为按键盘开始与停止设定参数标准
        timer;
//鼠标点击抽奖
    startBtn.onclick = run;
    endBtn.onclick = stop;
    resBtn.onclick = reset;

//按空格键抽奖
    document.onkeyup = function (e) {
//        console.log(e.keyCode)
        if (e.keyCode == 32) {
            if (flag == true) {
                run();
            } else {
                stop();
            }
        } else if (e.keyCode == 27) {
            reset()
        }
    };


    function run() {
        clearInterval(timer);   //为了解决多次点击停不下来的bug，每次点击都先清除定时器，再加上定时器
        timer = setInterval(function () {
            var i = Math.floor(Math.random() * arr.length);
            title.innerHTML = arr[i];
        }, 50);
        startBtn.disabled = 'disabled';   //设置开始按钮为不能点击状态
        flag = false;     //解决鼠标和键盘混用时的bug
    }
    function stop() {
        clearInterval(timer);
        startBtn.disabled = '';
        flag = true;
    }
    function reset() {
        clearInterval(timer);
        startBtn.disabled = '';
        title.innerHTML = '开始抽奖啦！';
        flag = true;
    }
}