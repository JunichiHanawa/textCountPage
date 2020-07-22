//初期設定
var linefeed = 0 //改行
var space = 1 //スペース
var harf = 1 //半角

//カウント
function textLengthShow(str) {

    //改行の設定
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '\n') {
            if(linefeed == 0){
                //改行なしで文字だけの時
                count -= 1;
            }else{
                count += linefeed - 1;
            }
        }
    }

    console.log(typeof linefeed);
    document.getElementById('text-size').innerHTML = "字数：" + (str.length + count) + "文字";

}



//字数カウント設定ボタン処理
var countSetBtn = document.getElementById('count-set-btn');

countSetBtn.addEventListener('click', function () {
    //改行
    linefeed = parseInt(document.getElementById('input-linefeed').value);
    //スペース
    space = parseInt(document.getElementById('input-space').value);
    //半角
    harf = parseInt(document.getElementById('input-harf').value);

}, false)

//色設定ボタン処理
var countSetBtn = document.getElementById('color-btn');

countSetBtn.addEventListener('click', function () {
    //textareaのスタイル情報
    var textareaStyle = document.getElementById('text-area').style;
    //背景色
    var backgroundColor = document.getElementById('input-back-color').value;
    //文字色
    var textColor = document.getElementById('input-text-color').value;
    //カーソル色
    var cursorColor = document.getElementById('input-cursor-color').value;

    textareaStyle.background = backgroundColor;
    textareaStyle.color = textColor;
    textareaStyle.caretColor = cursorColor;
}, false)

//リセットボタン処理
var resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', function () {
    document.getElementById('text-area').value = '';

    document.getElementById('text-size').innerHTML = "字数：" + 0 + "文字";
}, false)

//コピー処理
var copyBtn = document.getElementById('copy-btn');

copyBtn.addEventListener('click', function () {
    var text = document.getElementsByTagName('textarea')[0];
    text.select();
    document.execCommand("copy");
}, false)