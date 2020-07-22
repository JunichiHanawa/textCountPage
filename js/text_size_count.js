//カウント
function textLengthShow(str) {

    //文字数のみ
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '\n') {
            count += 1;
        }
    }

    document.getElementById('text-size').innerHTML = "字数：" + (str.length - count) + "文字";

}


//色設定ボタン処理
// $(function () {
//     $("color-btn").click(
//         function () {
//             //キーボード操作などにより、オーバーレイが多重起動するのを防止する
//             $(this).blur();	//ボタンからフォーカスを外す
//             if ($("#modal-overlay")[0]) return false;		//新しくモーダルウィンドウを起動しない [下とどちらか選択]
//             //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する [上とどちらか選択]

//             //オーバーレイ用のHTMLコードを、[body]内の最後に生成する
//             $("body").append('<div id="modal-overlay"></div>');

//             //[$modal-overlay]をフェードインさせる
//             $("#modal-overlay").fadeIn("slow");

//             //[$modal-content]をフェードインさせる
//             $("#modal-content").fadeIn("slow");

//             //[#modal-overlay]、または[#modal-close]をクリックしたら…
//             $("#modal-overlay,#modal-close").unbind().click(function () {

//                 //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
//                 $("#modal-content,#modal-overlay").fadeOut("slow", function () {

//                     //[#modal-overlay]を削除する
//                     $('#modal-overlay').remove();

//                 });

//             });
//         });
// });

// //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
// $(window).resize(centeringModalSyncer);

// //センタリングを実行する関数
// function centeringModalSyncer() {

//     //画面(ウィンドウ)の幅、高さを取得
//     var w = $(window).width();
//     var h = $(window).height();

//     // コンテンツ(#modal-content)の幅、高さを取得
//     // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//     //		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
//     //		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
//     var cw = $("#modal-content").outerWidth();
//     var ch = $("#modal-content").outerHeight();

//     //センタリングを実行する
//     $("#modal-content").css({ "left": ((w - cw) / 2) + "px", "top": ((h - ch) / 2) + "px" });

// }


//字数カウント設定ボタン処理
var countSetBtn = document.getElementById('count-set-btn');

countSetBtn.addEventListener('click', function () {
    console.log('count-set')
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