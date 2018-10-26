
/* -----------公共函数------------ */
	/* 返回中奖弹框信息 */
	function getPrizeInfo(num){
		if(num == 1){
			return '恭喜您，获得佳能G7X相机！';
		}
		if(num == 2){
			return '恭喜您，获得贝西焖烧罐！';
		}
		if(num == 3){
			return '恭喜您，获得300积分！请前往“我的安视优”会员帐户查看详情。';
		}
		return '恭喜您，获得一次预约进店体验的机会，点击确定立即前往！';
	}

	/*返回中奖结果*/
	function getPrizeResult(num){
		if(num == 1){
			return '佳能G7X相机';
		}
		if(num == 2){
			return '贝西焖烧罐';
		}
		if(num == 3){
			return '300积分';
		}
	}

	/*  请求出错 全局函数 */
	// $( document ).ajaxError(function() {
	// 	msg('当前访问人数过多，请稍后再试');
	// 	$('.loading').hide();
	// 	$('.closeModal').text('关闭');
	// 	$('.closeModal').click(function(event) {
	//     	wx.closeWindow();
	//     	closeMsg();
	// 	});
	// });

	/* 提示信息的显示和关闭 */
	function msg(txt){
		$('.mui-active').show();
		$('.mui-popup-in').show();
		$('.mui-popup-text').html(txt);
	}
	function closeMsg(){
		$('.mui-active').hide();
		$('.mui-popup-in').hide();
	}



	/* 点击后显示活动细则 */
	$('.r5').click(function(event) {
		$('.r8').addClass('cover');
		$('.close').show();
	});

	/* 点击后关闭活动细则 */
	$('.closebtn').click(function(event) {
		$('.r8').removeClass('cover');
		$('.close').hide();
	});

	/* 分享后增加一次抽奖次数 */
	// $('.r6').click(function(event) {
	// 	$('.share').show();
	// });


		// if(Date.now() > new Date(2018,8,25,23,59,59)){
 //        msg('【该活动已经结束】<br>后续活动，敬请期待');
 //        // $('.mui-popup-inner:afters').css('height',0);
 //        $('.closeModal').text('确定');
	// 	$('.closeModal').click(function(event) {
 //        	// closeMsg();
 //        	return false;
 //        });
	// }else{
	// 	/* 点击关闭信息弹出框 */
 //        $('.closeModal').click(function(event) {
 //        	closeMsg();
 //        });
	// }
		
	


