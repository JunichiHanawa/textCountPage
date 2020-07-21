//カウント
function textLengthShow(str){

    //文字数のみ
    var count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == '\n'){
            count += 1;
        }
    }

    document.getElementById('text-size').innerHTML = "字数："　+ (str.length - count) + "文字";

}


//リセットボタン処理
var resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', function(){
    document.getElementById('text-area').value = '';

    document.getElementById('text-size').innerHTML = "字数："　+ 0 + "文字";
}, false)

//コピー処理
var copyBtn = document.getElementById('copy-btn');

copyBtn.addEventListener('click', function(){
    var text = document.getElementsByTagName('textarea')[0];
    text.select();
    document.execCommand("copy");
}, false)