// 文字色変化ボタンがクリックされた場合、色が変わる
$(function() {
$('#change-color').on('click',function(){
  $('#target').css('color','red');
});
});

// 文字内容変化ボタンがクリックされた場合、文字が切り替わる
$(function() {
$('#change-text').on('click',function(){
  $('#target').text('Hello!');
});
});

// フェードアウトボタンがクリックされた場合、フェードアウトする
$(function() {
$('#fade-out').on('click',function(){
  $('#target').fadeOut();
});
});

// フェードアウトボタンがクリックされた場合、フェードアウトする
$(function() {
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});
