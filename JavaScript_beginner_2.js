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

// 演習課題「飲酒可能な年齢か判定する！」
// if文による条件分岐　比較演算子
process.stdin.resume();
process.stdin.setEncoding('utf8');
var age = parseInt(Math.random() * 5) + 18;
// ここにif文を追加
if (age < 20) {
    console.log(age + "才は飲酒不可");
} else if (age >= 20) {
    console.log(age + "才は飲酒可能");
}

// 演習課題「入賞圏内か判別する」
// if文による条件分岐　比較演算子
process.stdin.resume();
process.stdin.setEncoding('utf8');
var place = parseInt(Math.random() * 12) + 1;
// ここにif文を追加する
if (place <= 6) {
    console.log(place + "位入賞");
} else if (place >= 7) {
    console.log(place + "位入賞圏外");
}

// 演習課題「大吉が出る確率を上げてみよう」
// おみくじを作る
process.stdin.resume();
process.stdin.setEncoding('utf8');
var omikuji = parseInt(Math.random() * 100) + 1;
if (omikuji >= 30 && omikuji <= 100) {
  console.log("omikujiの中身は" + omikuji  + "なので大吉");
} else if (omikuji <= 29) {
  console.log("omikujiの中身は" + omikuji  + "なので大凶");
}

// 演習課題「攻撃を回避させてみよう」
process.stdin.resume();
process.stdin.setEncoding('utf8');
var dice = parseInt(Math.random() * 6) + 1;
console.log("サイコロは" + dice);
if (dice >= 4 && dice <= 6) {
    console.log("スライムの攻撃をかわした");
} else {
    console.log("スライムから10のダメージを受けた");
}

// 演習課題「西暦年から昭和年を計算する」
// 西暦年から昭和年を求める
process.stdin.resume();
process.stdin.setEncoding('utf8');
var seireki = parseInt(Math.random() * 63) + 1926;
process.stdout.write ("西暦" + seireki + "年は");

// 昭和年を計算
var showa = seireki - 1925;
console.log("昭和" + showa + "年です");