// オブジェクトのプロパティを定義

var obj = {
    width: 160,
    height: 120
};
console.log(obj)
console.log(obj.width)
console.log(obj.height)


// 親オブジェクトを作成する
function parentObj() { };
parentObj.prototype = Object.create(parentObj.prototype);
console.log(parentObj.prototype)

// 子オブジェクトを作成する
function childObj() { };
childObj.prototype = Object.create(parentObj.prototype);
console.log(childObj.prototype);

// なにも継承しない純粋なオブジェクトを作成する
var obj = Object.create(null);


////////////////////////////////////////////////////////////////////////////

// プロトタイプ

// プロパティを追加する
Date.prototype.tzname = "(unknown)";
var date1 = new Date();
console.log(date1.tzname);

// メソッドをオーバーライドする
Date.prototype.toString = function() {
  return(this.getFullYear() + "年" + (this.getMonth() + 1) + "月" + this.getDate() + "日"
       + this.getHours() + "時" + this.getMinutes() + "分" + this.getSeconds() + "秒");
}
var date2 = new Date();
console.log(date2.toString());
// プロトタイプを継承するオブジェクトを作成する
var date3 = Object.create(Date.prototype);

/////////////////////////////////////////////////////////////////////////////////////
//指定したオブジェクトの、プロトタイプを返します。

var proto = {x:100, y:200};
var obj = Object.create(proto);
var proto2 = Object.getPrototypeOf(obj);
console.log(proto2);           // => {x:100, y:200}
console.log(proto2.x);
console.log(proto2.y);
///////////////////////////////////////////////////////////////////////////////////////

// オブジェクトのプロトタイプを設定します。


var proto = {
    hello: function () {
        console.log("Hello!!");
    }
}
var obj = { x: 100, y: 200 };
Object.setPrototypeOf(obj, proto);
console.log(obj);
console.log(obj.x);
console.log(obj.y);
obj.hello();

//////////////////////////////////////////////////////////////////////////////////////////
// obj2 のプロトタイプが、obj1 のプロトタイプに由来しているものか否かを調べます。
function obj1() {}
const obj2 = new obj1();
console.log(obj1.prototype.isPrototypeOf(obj2));
///////////////////////////////////////////////////////////////////////////////////////////
// プロパティ
// Object.keys(obj)

// オブジェクトが持つ、列挙可能なプロパティの名前の配列を返します。
// 列挙不可のものも併せて取得するには getOwnPropertyNames() を用います。
//_______________________________↓＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
var obj = {
    x: 100, y: 200
};
console.log(Object.keys(obj));

//_____________________________________________________________________________
// 指定したオブジェクトの、列挙可能なプロパティ名のリストを返します。
// Object.getOwnPropertyNames(obj)

var obj = {
    x: 100, y: 200, z: 300
};
var names = Object.getOwnPropertyNames(obj);
console.log(names);           // => ["x", "y", "z"]

//////////////////////////////////////////////////////////////////////////////////

// プロパティ記述子

var obj = {};
Object.defineProperty(obj, 'a', { value: 100 });
console.log(obj.a);

//////////////////////////////////////////////////////////////////////////////////

// Object.defineProperties(obj, properties)

var obj = {};
Object.defineProperties(obj, {
  a: { value: 100, writable: true },
  b: { value: 200, writable: true },
});

//////////////////////////////////////////////////////////////////////////////////////
//Object.getOwnPropertyDescriptor(obj, prop)

var obj = { a: 100 };
var desc = Object.getOwnPropertyDescriptor(obj, 'a');
console.log(desc.value);
console.log(desc.writable);
console.log(desc.configurable);
console.log(desc.enumerable);

//////////////////////////////////////////////////////////////////////////////////////

// 文字列への変換

////////////////object.toString()////////////////////////////////////////////////////
// オブジェクトを文字列に変換する際に用いられます。
// オブジェクトの種類や JavaScript のバージョンによって文字列のフォーマットは異なります。
// このメソッドは、オブジェクトを文字列に変換する必要がある時に暗黙的に呼ばれます

var date = new Date();
console.log(date.toString());

/////////////////////////////////////////////////////////////////////////////////////
// obj.toLocaleString()
// オブジェクトを文字列に変換します。
// Object では toLocaleString() は toString() と同等ですが、
// Date などのサブクラスでは、toLocaleString() をオーバーライドすることで、
// 言語依存の文字列に変換することができます。

var date = new Date();
console.log(date.toLocaleString());

//////////////////////////////////////////////////////////////////////////////////////
// obj.constructor
// オブジェクトのコンストラクタへの参照を返します。

var obj = {x:100, y:200};
console.log(obj.constructor);
///////////////////////////////////////////////////////////////////////////////////////
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.toString = function() {
    return (this.name + "(" + this.age + ")");
  }
}
var p1 = new Person("Suzuki", 26);
console.log(p1.name);         // => Suzuki
console.log(p1.toString());   // => Suzuki(26)
////////////////////////////////////////////////////////////////////////////////////////
//クラスの継承

function Person2(name, age, email) {
  this.email = email;
  Person.call(this, name, age);
}
var p2 = new Person2("Suzuki", 26, "suzuki@example.com");
console.log(p2.name);
console.log(p2.age);
console.log(p2.email);

function Person3(/* ..., email */) {
  var args = [].slice.call(arguments);
  this.email = args.pop();
  Person.apply(this, args);
}
var p3 = new Person3("Suzuki", 26, "suzuki@example.com");
console.log(p3.email);