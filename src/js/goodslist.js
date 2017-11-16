require.config({
    
    // 配置短路径（别名）
    paths:{
        'jquery':'../lib/jquery-3.1.1',
        'headfoot':'couponCenter'
    },

    // 配置依赖
    shim:{
		headfoot:['jquery']
    }
});
require(['jquery','headfoot'],function(a){
    jQuery(function($){
    	//左侧导航
    	$('.updown').on('click',function(){
    		$(this).toggleClass('rightdown')
    			.next('a').toggleClass('under')
    			.siblings('dl').toggle();
    		
    	})
    	$('.more').on('click',function(){
    		$(this).toggleClass('less')
    			.next('a').toggleClass('under');
    		
    	})
    	
    	
    	//右侧导航搜索
    	$('.mbshop_searchMore').on('click',function(){
    		
    		$(this).siblings('.mbshop_searchItemContent').toggleClass('visi');
    	})
    	$('.mbshop_new_searchItemOption_menu i').hover(function(){
    		$(this).parent().addClass('write')
    		.next('.mbshop_new_searchItemOption_box').show();
    	})
    	$('.mbshop_searchItemshuxing').on('mouseleave',function(){
    		$('.mbshop_new_searchItemOption_box').hide();
    		$('.mbshop_new_searchItemOption_menu').removeClass('write');
    		
    	})
    	
    	//列表页开始
    	//头部
    	$('.mbshop_pdFilterItem a').on('click',function(){
    		$(this).addClass('mbshop_pdFilterHover').siblings().removeClass('mbshop_pdFilterHover');
    	})
    	$('.mbshop_pdFilterItem').find('.mbshop_pdFilterUp1').on('click',function(){
    		$(this).toggleClass('mbshop_pdFilterDown1');
    	})
    	$('.mbshop_pdFilterItem').find('.mbshop_pdFilterUp2').on('click',function(){
    		$(this).toggleClass('mbshop_pdFilterDown2');
    	})
    	//列表
    	$('.listSmallImg').find('.btnLeft,.btnRight').hide();
    	if($('.shortWidth li').length >= 5){
    		$('.listSmallImg').find('.btnLeft,.btnRight').show();
    	}
})
})