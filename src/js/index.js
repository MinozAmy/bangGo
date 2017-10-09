require.config({
    
    // 配置短路径（别名）
    paths:{
        jquery:'../lib/jquery-3.1.1',
        xcarousel:'../lib/jquery-xCarousel/jquery.xcarousel'
    },

    // 配置依赖
    shim:{
        xcarousel:['jquery']

    }
});
require(['jquery','xcarousel'],function(a){
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
        /*-------------banner轮播图------------*/
        $('.box').xCarousel({
            imgs:['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg'],
            width:720,
            height:480,
            type:'fade',
            duration:2000
        })
        /*---------滑动轮播图---------*/
        $('.smallbox span').on('click','#lunbogt',function(){
                $('.smallbox ul').animate({left:'-1200px'},1000);
                        }).on('click','#lunbolt',function(){
                $('.smallbox ul').animate({left:'0'},1000);
        });

        /*--------倒计时-------------*/
        // 指定结束时间
            var end = '2017-10-20 18:11:00';
            var endTime = Date.parse(end);
            var daojishi = setInterval(function(){
                // 获取当前时间
                var nowTime = Date.now();
                // 计算时间差,得到秒数
                var offset = parseInt((endTime - nowTime)/1000);
                if(offset<=0){ 
                    $('.timeleft').html('倒计时已结束');
                    clearInterval(daojishi);
                    return;
                }

                var secLeft = offset%60;
                var minLeft = parseInt(offset/60)%60;
                var hourLeft = Math.floor(offset/60/60);
                if(secLeft<10){secLeft = '0' +  secLeft;}
                if(minLeft<10){minLeft = '0' +  minLeft;}
                if(hourLeft<10){hourLeft = '0' +  hourLeft;}
                $(".timeleft").html('剩余 '+ hourLeft + ' : '+minLeft + ' : '+secLeft);

            },1000);
            var start = '2017-11-01 18:11:00';
            var startTime = Date.parse(start);
            var daojishi = setInterval(function(){
                // 获取当前时间
                var nowTime = Date.now();
                // 计算时间差,得到秒数
                var offset = parseInt((startTime - nowTime)/1000);
                if(offset<=0){ 
                    $('.timeStart').html('倒计时已结束');
                    clearInterval(daojishi);
                    return;
                }

                var secLeft = offset%60;
                var minLeft = parseInt(offset/60)%60;
                var hourLeft = Math.floor(offset/60/60);
                if(secLeft<10){secLeft = '0' +  secLeft;}
                if(minLeft<10){minLeft = '0' +  minLeft;}
                if(hourLeft<10){hourLeft = '0' +  hourLeft;}
                $(".timeStart").html('距开始'+ hourLeft + ' : '+minLeft + ' : '+secLeft);

            },1000);

        /*--------图片遮罩-------------*/
        $('.common,.guan,.footerimg,.box,.smallbox,aside,.thirdNav').find('img').hover(function(){
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
