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

// 演習課題「計算してみよう」
// 計算する
process.stdin.resume();
process.stdin.setEncoding('utf8');
// ここに計算式を書いて、出力する
console.log(1234 * 5678 / 2);

// 演習課題「変数で計算してみよう」
// 計算する
process.stdin.resume();
process.stdin.setEncoding('utf8');
var a = 31;
var b = 17;
// 以下に、aとbをかけ算し、結果を出力するコードを書く
console.log(a * b);

// 演習課題「余りを計算してみよう」
// 計算する
process.stdin.resume();
process.stdin.setEncoding('utf8');
var x = 8;
var y = 5;
// 以下に、xをyで割ったときの余りを計算し、結果を出力するコードを書く
console.log(x % y);

// 演習課題「カッコを付けて計算してみよう」
// 計算する
process.stdin.resume();
process.stdin.setEncoding('utf8');
// ここに計算式を書いて、出力する
var number = (1234 + 5678) * 3;
console.log(number);

// 演習課題「スライムの合計体重を出力！」
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 10) + 1;// 匹数 1 ～ 10
console.log("体重100キロのスライムが" + number + "匹あらわれた。");
// 合計体重 = 匹数 × 100
total = number * 100;
console.log("スライムの合計体重は" + total + "キロです。");

// 演習課題「順位が1位だったら「おめでとう！」と表示しよう」
// if文による条件分岐
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 3) + 1;
console.log("あなたの順位は" + number + "位です");
// ここにif文を追加する
if (number == 1) {
    console.log("あなたの順位は" + number + "位です");
    console.log("おめでとう！");
}

// 演習課題「順位が2位以下だったら「あと少し！」と表示する」
// if文による条件分岐
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 3) + 1;
// ここにif文を追加する
if (number >= 2) {
    console.log("あなたの順位は" + number + "位です");
    console.log("あと少し！");
}

// 演習課題「順位に合わせてメッセージを表示する」
// if文による条件分岐　else if文
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 5) + 1;
console.log("あなたの順位は" + number + "位です");
// ここにif文を追加する
if (number == 1) {
    console.log("おめでとう！");
} else if (number == 2) {
    console.log("あと少し！");
} else {
    console.log("よくがんばったね");
}
