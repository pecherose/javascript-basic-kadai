const today = new Date();

 // 年の取得
const year = today.getFullYear();
// 月の取得、date関数は、1月を0としているため+1
const month = today.getMonth() + 1; 
// 日付（日）の取得
const day = today.getDate(); 
// year+month+dayを出力する
console.log(year + '年' + month + '月' + day + '日');