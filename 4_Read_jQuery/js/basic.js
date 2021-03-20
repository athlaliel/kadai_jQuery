// Click Hereを押すと背景色と文字色が変わる
$('#chgEle').click(function(){
    // 背景色
    $('body').css('background', '#006699');
    // 文字色
    $('body').css('color', '#fbfbfb');
});
// Returnを押すと背景色と文字色が元に戻る
$('#retEle').click(function(){
    // 背景色
    $('body').css('background', '#ffffff');
    // 文字色
    $('body').css('color', '#000000');
});