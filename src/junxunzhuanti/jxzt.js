// 大按钮移动效果
var transList = [75, 280, 485, 690];
$('.mt-t').click(function() {
	$('.mt-t').removeClass('ACTIVE');
	$(this).addClass('ACTIVE');
	$('#zhibiao').css('transform', 'translate(' + transList[$(this).attr('a')] + 'px, 103px)');
	$('#zhibiao').css({
		'background': 'url(./images/zhibiao' + (($(this).attr('a')=='2') ? '-G' : '') + '-min.png) no-repeat',
		'background-size': 'contain'
	});

	var _this = this;
	$('.mm').removeClass('SHOW');
	$($('.mm')[$(this).attr('a')]).addClass('SHOW');
	setTimeout(function() {
		$('.mm').css('opacity', 0);
		setTimeout(function() {
			$('.mm').hide();
			$($('.mm')[$(_this).attr('a')]).show().css('opacity', 0);
			setTimeout(function() {
				$($('.mm')[$(_this).attr('a')]).css('opacity', 1)
			}, 1)
		}, 200)
	}, 0)
});
$('.mt-t').get(3).click();



// 视频
var VideoLunboFlag = false;
$('.lun-z, .lun-y').click(function() {
	$('.list').css('transform', 'translate(' + (VideoLunboFlag ? '0' : '-220px') + ', 0)');
	VideoLunboFlag = !VideoLunboFlag;
});




var transList2 = [88, 348, 610];
$('.m3t-li').click(function() {
	$('.m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
	$('.m3t-biao').css('transform', 'translate(' + transList2[$(this).attr('a')] + 'px, 65px)');
});





// 音乐lrc
var musicLrc = [],
	musicLrcTime = [],
	musicLrcArt = [];
$.ajax({
	url: './music/强军战歌.lrc',
	success: function(e) {
		musicLrc = e.match(/(\[.*?\])([^\n]+)/g);
		musicLrcTime = musicLrc.map(function(item) {
			return item.replace(/\[(.*?)\]([^\n]+)/, '$1')
					   .split(/:(?=\d\d.\d\d)/)
					   .map(function(a) {
					   		return parseFloat(a);
					   });
		});
		musicLrcArt = musicLrc.map(function(item) {
			return item.replace(/(\[.*?\])(?=[^\n]+)/, '').trim();
		});

		console.log(musicLrc, musicLrcArt, musicLrcTime);
		$('#m4-geci').html(function() {
			var list = '';
			musicLrcArt.forEach(function(a, b, c) {
				list += '<p>' + a + '</p>';
			});
			return list;
		})

		// 活动歌词
		musicLrcTime.forEach(function(a, b, c) {
			if (!isUserScrollGeci) {
				+function() {
					setTimeout(function(a, b, c) {
						$('#m4-geci').scrollTop(48 * b);
					}, a[0] * 60000 + a[1] * 1000);
				}(a, b, c);	
			}
		});
	}
})


	console.log('12');
	
$('#m4-geci').on('sroll', function() {
	console.log('12');
	isUserScrollGeci = true;
})
$('#m4-geci').mouseout(function() {
	isUserScrollGeci = false;
})

// 音乐
var  isUserScrollGeci = false;
var  musicMouseDownFlag = false;
var  isPused = true;
$('#m4-b')
.on('mouseup', function(e) {
	$('#m4b-r').width(e.offsetX);
	musicMouseDownFlag = false;
})
// .on('mousedown', function(e) {
// 	console.log(e.target)
// 	if (e.target.id == 'm4b-l') {
// 		musicMouseDownFlag = true;
// 		$('#m4b-r').width(e.offsetX);
// 	}
// })
// .on('mousemove', function(e) {
// 	if (musicMouseDownFlag && e.target.id == 'm4b-l') {
// 		$('#m4b-r').width(e.offsetX);
// 	}
// })

$('#m4-yinliang')
.on('mouseup', function(e) {
	$('#m4y-jindu').width(e.offsetX);
	musicMouseDownFlag = false;
})

$('#m4k-5').click(function(e) {
	console.log(e);
	if (e.target.id == 'm4k-5') {
		$('#m4-yinliang').toggle(200);
	}
})

$('#m4k-3').click(function() {
	isPused = !isPused;
	if (isPused) {
		$('#m4k-3').css('background-image', 'url(images/bofang.png)');
		$('#music')[0].pause(); 
	}else {
		$('#m4k-3').css('background-image', 'url(images/zanting.png)');
		$('#music')[0].play();
	}
});




















