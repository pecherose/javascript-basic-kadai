// 変数numに1以上の正数を代入する
let num = Math.floor(Math.random() * 15) + 1;

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numが3と5の倍数の場合、“3と5の倍数です”と出力される
if (num % 15 === 0) {
  console.log('3と5の倍数です');
}
// 変数numが3の倍数の場合、“3の倍数です”と出力される
else if (num % 3 === 0) {
  console.log('3の倍数です');
 }
// 変数numが5の倍数の場合、“5の倍数です”と出力される
else if (num % 5 === 0) {
  console.log('5の倍数です');
 }
 // 上記のいずれでもない場合、変数を出力する
else {
  console.log(num);
}

