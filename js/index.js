$(function(){
	$('.kd-body li').click(function(event){
		var title=$(this).text().trim();
		switch(title){
			case '首页':
				// 加载页面
				$('.content').load('home.html');
				break;
			case '分类管理':
				$('.content').load('news.html');
				break;
			case '资讯管理':
				$('.content').load('info.html');
				break;
			case '用户管理':
				$('.content').load('user.html');
				break;
			default:
				break;
		}
		$('.kd-body li').css({
			'backgroundColor':'#666',
			'color':'#aaa'
		});
		$(this).css({
			'backgroundColor':'#444',
			'color':'#fff'
		});
	});
	$('.kd-body li:first').trigger('click');
});