require.config({
    
    // 配置短路径（别名）
    paths:{
        jquery:'../lib/jquery-3.1.1'
    },

    // 配置依赖
    shim:{

    }
});
require(['jquery'],function(a){
    jQuery(function($){
        /*--------header-----------*/
        $('header li').on('mouseover','.load',function(){
                $(this).addClass('hover');
                $(this).next().show();
                    }).on('mouseleave',['.load','.loads'],function(){
                $('.load').removeClass('hover');
                $('.loads').hide();
                    }).on('mouseover','.wdbg',function(){
                $(this).addClass('hover');
                $(this).next().show();
                    }).on('mouseleave',['.wdbg','.wdbgs'],function(){
                $('.wdbg').removeClass('hover');
                $('.wdbgs').hide();
                    }).on('mouseover','.app',function(){
                $(this).addClass('hover');
                $(this).next().show();
                    }).on('mouseleave',['.app','.apps'],function(){
                $('.app').removeClass('hover');
                $('.apps').hide();
                    }).on('mouseover','.weixin',function(){
                        $(this).next().show();
                    }).on('mouseleave',['.weixin','.wechat'],function(){
                        $('.wechat').hide();
                    })
        /*--------content-top---------*/
        $('#logo').hover(function(){
                $(this).animate({opacity:'0.8'}, 300);
            },function(){
                $(this).animate({opacity:'1'}, 300);
            });
        
        $('#quicksearch').on('focus',function(){
                this.value = '';
        })
        /*----------nav---------*/
        $('.nav li').hover(function(){
            $(this).animate({opacity:'0.8'}, 300);
        },function(){
            $(this).animate({opacity:'1'}, 300);
        });
        /*-------二级导航显示隐藏-----------*/
        $('.rexiao').hide();
        $('.device,.rexiao').hover(function(){
            $('.rexiao').show();
        },function(){
            $('.rexiao').hide();
        })
        /*-------二三级导航--------*/
        $('.rexiao .rexiaoli').hover(function(){
            $(this).find('span').toggle();
            $(this).find('.thirdNav').show();
            $('.rexiao').css('border-right',0);

        },function(){
            $(this).find('span').toggle();
            $(this).find('.thirdNav').hide();
            $('.rexiao').css('border-right','1px solid #d51819');
        })
        
       

        /*--------图片遮罩-------------*/
        $('.common,.footerimg,.thirdNav').find('img').hover(function(){
            $(this).animate({opacity:0.7}, 300)
            },function(){
            $(this).animate({opacity:1}, 300)
            })

        /*---------返回顶部------------*/
         $('#toTop').hide();
        window.onscroll = ()=>{
                let scrollTop = window.scrollY;
                if(scrollTop > 1000){
                   $('#toTop').show();
                }else{
                    $('#toTop').hide();
                }
            }
            // 点击按钮返回顶部
            $('#toTop').on('click',function(){             
                let timer = setInterval(()=>{
                    let scrollTop = window.scrollY;
                    speed = Math.ceil(scrollTop/10);
                    scrollTop -= speed;
    
                    // 当滚动到
                    if(scrollTop <= 0){
                        clearInterval(timer);
                    }
                    window.scrollTo(0,scrollTop);
                },30);
            })





    
    })
})

