// jQueryだけならjavascriptはこれくらいでいい？javascriptって結局jQuery以外まったくイメージできんのよね。

// オブジェクトは再利用できないので変数はそんなときのために

// 例えば

// .css({
// 	'font-size': '50px',
// 	'background-color': 'black',
// 	'color': 'white'
// });

// は#typoと#headerで使うならいちいち書く必要がある。

// var arg = {
// 	'font-size': '120px',
// 	'background-color': 'green',
// 	'color': 'ebc000'
// };

// // 受け渡し

// $('#typo').css(arg);
// $('#header').css(arg);

// objectにはデータ名が、Arrayには順番が割り当てられるという違い

// thisとは
// データ取得専用の変数のようなもの

//thisで書き換える

// $(function () {
// 	// body...
// 	$('#typo').on('mouseover', function(){
// 		$(this).css({
// 			color: '#ebc000',
// 			backgroundColor: '#ae5e9b'
// 		});
// 	})
// 	.on('mouseout', function(){
// 		$(this).css({
// 			color: '',
// 			backgroundColor: ''
// 		});
// 	});
// });

// thisは便利。関数に複数のヘッダーとtypoとフッターと複数置いても上手いことやってくれる

$(function () {
	// body...
	$('header, #typo, footer').on('mouseover', function(){
		$(this).css(
			'background-color', '#ae5e9b'
		);
	})
	.on('mouseout', function(){
		$(this).css({
			backgroundColor: ''
		});
	});
});


// 関数の基本形
var added1 = add(1, 2);
var added2 = add(4, 5);
var added3 = added1 + added2;

function add(num1, num2) {
	// body...
	return num1 + num2;
}


console.log(added1);
console.log(added2);
console.log(added3);

// javascriptのswitch文

var a = 100;
var b = 200;
var c;

// switch (200){
	// case a:

		// c = a;
// 		break;
// 	case b:
// 		c = b;
// 		break;
// 	default:
// 		c = 300;
// 		break;
// }

// console.log(b);

var array = [1, 2, 3, 4, 5, 6]
var num = 0

// for (var i = 0, len = array.length; i < len; i++) {
// 	num += array[i];
// }

// console.log(num);

// 5の倍数なら終了、偶数なら継続

for (var i = 0; i < array.length; i++) {
	var number = array[i];

	if (number % 5 === 0) {
		break;
	}else if (number % 2 === 1) {
		continue;
	}
	console.log(num += number);
}
