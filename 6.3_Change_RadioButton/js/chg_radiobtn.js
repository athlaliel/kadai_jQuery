// 初期処理（画面を開いたとき）
$(function(){
    // change() フォームの値が変更されるとイベントが発生するメソッド
    // ()内に変更されたときの処理を記述していきます。
    $('input[name="display-radio"]').change(function(){
        // text() 要素のテキストを変更するメソッド
        // ()内の文字列を指定します。
        // ↓ここの下に文字列を表示する処理を記述する
        $('#display-value').text($(this).val());
    });
    

});