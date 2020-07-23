//初期設定
var linefeed = 0; //改行
var space = 1; //スペース
var harf = 1.0; //半角

//カウント
function textLengthShow(str) {

    var LFCount = 0; //改行の文字数
    var spaceCount = 0; //スペースの文字数
    var harfCount = 0; //半角の文字数

    //各文字に対しての処理
    for (let i = 0; i < str.length; i++) {

        
        if (str[i] == '\n') {
            //改行の設定
            if (linefeed == 0){
                //改行なしで文字だけの時
                LFCount -= 1;
            }else{
                LFCount += linefeed - 1;
            }
        }else if (str[i] == '　'){
            //全角スペースの設定
            if (space == 0){
                //元々スペースは一文字扱いなのでその分を減らす
                spaceCount -= 1;
            }else{
                spaceCount += space - 1;
            }
        }else if (str[i].match(/^[\x20-\x7e]*$/)){
            //半角英数字の設定
            harfCount += -(1 - harf);
            console.log(harfCount);
        }
    }
    //文字の長さの計算
    var resultTextLength = str.length + LFCount + spaceCount + harfCount;

    console.log(typeof linefeed);
    document.getElementById('text-size').innerHTML = "字数：" + resultTextLength + "文字";

}



//字数カウント設定ボタン処理
var countSetBtn = document.getElementById('count-set-btn');

countSetBtn.addEventListener('click', function () {
    //改行
    linefeed = parseInt(document.getElementById('input-linefeed').value);
    //スペース
    space = parseInt(document.getElementById('input-space').value);
    //半角
    harf = parseFloat(document.getElementById('input-harf').value);

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