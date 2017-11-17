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
    	
    	
      	
      	//页码
    	// 当前分页
		var pageNo = 1;

		// 每页显示数量
		var qty = 4;

		var pageLen;
		
		//页码点击操作
		$('.mbshop_container').on('click','.page a',function(){
			$('.mbshop_pdList').html('');
			if($(this).html()=='首页'){
				pageNo = 1;
				$(this).hide();
			}else if ($(this).html()=='尾页'){
				pageNo = pageLen;
				$(this).hide();
			}else if($(this).html()=='上一页'){
				pageNo--;
				$('.mbshop_container .pageNos').each(function(idx,ele){
					console.log(ele);
					var i = $(ele).html();
					$(ele).html(i--);
				});
			}else if($(this).html()=='下一页'){
				pageNo++;
			}else{
				pageNo = $(this).html();
			}
			$(this).addClass('currentPage').siblings().removeClass('currentPage');
			$.ajax({
    			type:"get",
    			url:"../api/goodslist.php",
    			async:true,
    			data:{qty:qty,pageNo:pageNo},
   				success: function(data){
   					ajaxData(data);
   				},
   				error:function(e){
   					console.log(e)
   				}
    		
    		});
		})
		//获取内容
    	$.ajax({
    		type:"post",
    		url:"../api/goodslist.php",
    		async:true,
   			success: function(data){
   				ajaxData(data);
    			
   			},
   			error:function(e){
   				console.log(e)
   			}
    		
    	});
    	
    	
    	
    	function ajaxData(data){
    		var data = JSON.parse(data);
     		
     			var ul = $('<ul>');
					ul.html( data.data.map(item=>{
					return `
					<li class="listLi" data-id="${item.id}">
						<a href="#" class="listBigImg"><img src="../${item.url}" alt="" /></a>
						<p class='brand fl'><a href="#">${item.brand}</a><label>${item.discount}</label></p>
						<p class='produceName fl'><a href="#">${item.name}</a></p>
						<p class="producePrice fl"><b>${item.price}</b><i>${item.originprice}</i></p>
						<div class="listSmallImg fl">
							<span title="向左" class="btnLeft"></span>
							<div class="shortWidth"></div>
							<span title="向右" class="btnRight"></span>
						</div>
					</li>
					`
				}).join(''));
				$('.mbshop_pdList').append(ul);
				
				//生成小图
				
				var arr = [];
				for(i=0;i<data.data.length;i++){
					var ol = $('<ol>');
					arr[i] = data.data[i].url1.split(',');
					ol.html(arr[i].map(item=>{
						return	`
							<li><img src="../${item}"/></li>
						`
					}).join(''));
					$('.shortWidth').eq(i).append(ol);
				}
				
				pageLen = Math.ceil(data.total/data.qty);
				
				
				
				//列表样式操作
    			$('.listSmallImg').find('.btnLeft,.btnRight').hide();
    			$('.shortWidth').each(function(idx,ele){
  					if($(ele).find('li').length >= 6){
 						$(this).siblings('span').show();
  					}	
  				})
    			var smallPage = parseInt((($('.shortWidth ol').find('li').length)/5));
    			//初始化
    			var index = 0;$('.listSmallImg .btnLeft').addClass('btn_disable');
    			//左按钮
    			$('.listSmallImg').on('click','.btnLeft',function(){
    				var smallPage = parseInt((($(this).siblings('.shortWidth').find('ol li').length)/5));
    				console.log(index);
    				if(index <= 0){
						$(this).addClass('btn_disable');
						return false;
    				}else{
    					index--;
    					$('.listSmallImg span').removeClass('btn_disable');
    					$(this).siblings('.shortWidth').find('ol').animate({left:0});
    				}
    			})
    			
    			//右按钮
    			$('.listSmallImg').on('click','.btnRight',function(){
    				var smallPage = parseInt((($(this).siblings('.shortWidth').find('ol li').length)/5));
    				if(index >= smallPage-1){
    					$(this).addClass('btn_disable');
						return false;
    				}else{
    					index++;
    					$('.listSmallImg span').removeClass('btn_disable');
    					$(this).siblings('.shortWidth').find('ol').animate({left:-185*index});
    				}
    			})
    	}
    	
    	
    	
})
})