// $(function(){
	// $('#typo .inner').css('transform', 'rotate(10deg');
// });

// $(function(){
	// $('.page-main > div:nth-child(1) .inner').css('opacity', 0.5);
// });

// $(function () {
	// body...
	// $('#typo').on('mouseover', function(){
		// $('#typo').css('background-color', '#ae5e9b');
		// $('header').css('color', '#ae5e9b');
	// });
// });

// 引数一つ目がイベントタイプ、二つ目の関数がハンドラ、.onの積み重ね

// $(function () {
// 	// body...
// 	$('#typo').on('mouseover', function(){
// 		$('#typo').css({
// 			color: '#ebc000',
// 			backgroundColor: '#ae5e9b'
// 		});
// 	});
// $('#typo').on('mouseout', function(){
// 		$('#typo').css({
// 			color: '',
// 			backgroundColor: ''
// 		});
// 	});
// });

// アニメーション

// $(function(){
//     $('#typo').on('click', function(){
//         $('#typo .inner').animate({
//                 opacity: 0,
//                 fontSize: '0px'
//             },
//             1500
//         );
//     });
// });
// animateメソッドの一つ目に完了時の姿を

// イージングの例　下からtop: '100px'の位置に徐々に戻す

// $(function () {
// 	// body...
// 	$('#typo .inner')
// 		.css('top', '-100px')
// 		.on('click', function(){
// 			$('#typo .inner').animate({
// 				top: '100px'
// 			},
// 				1500,
// 				'linear'
// 			);
// 		});
// });

// animate()で終了時に実行する処理も記述する

$(function () {
	// body...
	$('#typo .inner')
		.css('top', '-100px')
		.on('click', function(){
			$('#typo .inner').animate({
				top: '100px'
			},
				1500,
				'easeInOutCirc',
				function(){
					$('#typo .inner').animate({top: '0px'}, 500);
				}
			);
		});
});