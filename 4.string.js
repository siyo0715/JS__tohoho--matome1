// alert("ざんねんでした。\nまたきてね。");


// テンプレート文字列
var name = "Yamada";
var str = `ようこそ ${name} さん`;
console.log(str);  // ようこそ Yamada さん

var a = 3;
var b = 5;
var str = `Answer is ${a + b}`;   // Answer is 8
console.log(str)


//タグ付きテンプレート

var width = '30px';
var height = '40px';
function tag(strings, ...values) {
  console.log(strings);   // ["Heightは ", " Widthは ", " です"]
  console.log(values);    // ["30px", "40px"]
  var str = "";
  for (var i = 0; i < strings.length - 1; i++) {
    str += (strings[i] + values[i]);
  }
  str += strings[i];
  return str;
};
var str = tag`Heightは ${height} Widthは ${width} です`;
document.write(str);     // "Heightは 30px Widthは 40px です"