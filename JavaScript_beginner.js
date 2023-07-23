// 演習課題「指定された文字を出力しよう」
process.stdin.resume();
process.stdin.setEncoding('utf8');
console.log("ハロー、paizaラーニング");

// 演習課題「HTMLとして出力してみよう」
// HTMLを表示する
process.stdin.resume();
process.stdin.setEncoding('utf8');
console.log("<p>勇者は、荒野を歩いていた</p>");

// 演習課題「モンスターを太字にしてみよう」
// HTMLを表示する
process.stdin.resume();
process.stdin.setEncoding('utf8');
console.log("勇者は、荒野を歩いていた");
console.log("<b>モンスター</b>があらわれた");

// 演習課題「変数を表示してみよう」
// 変数を使う
process.stdin.resume();
process.stdin.setEncoding('utf8');
var player = "勇者";
console.log(player + "は、レベルアップした");

// 演習課題「変数の文字を出力する」
// 変数を使う
process.stdin.resume();
process.stdin.setEncoding('utf8');
var player = "勇者";

console.log(player + "は、荒野を歩いていた");
console.log(player + "は、モンスターと戦った");
console.log(player + "は、モンスターをたおした");

// 演習課題「1から6のサイコロ」
// 数の表示とサイコロ
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 6) + 1;
console.log("サイコロの目は" + number + "です");