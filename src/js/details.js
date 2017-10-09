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
        $('.header').load('fashion.html header',function(){
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
        });
        $(".content_top").load("fashion.html .content_top",function(){
             /*--------content-top---------*/
            $('#logo').hover(function(){
                    $(this).animate({opacity:'0.8'}, 300);
                },function(){
                    $(this).animate({opacity:'1'}, 300);
                });
            
            $('#quicksearch').on('focus',function(){
                    this.value = '';
            })
            /*--------图片遮罩-------------*/
            $('.common').find('img').hover(function(){
                $(this).animate({opacity:0.7}, 300)
                },function(){
                $(this).animate({opacity:1}, 300)
                })
        })

        $(".content_nav").load("fashion.html .content_nav",function(){
                /*----------nav---------*/
                $('.nav li').hover(function(){
                    $(this).animate({opacity:'0.8'}, 300);
                },function(){
                    $(this).animate({opacity:'1'}, 300);
                });
                $('.device').hover(function(){
                    $('.rexiao').show();
                },function(){
                    $('.rexiao').hide();
                })
                /*--------图片遮罩-------------*/
                $('.common').find('img').hover(function(){
                    $(this).animate({opacity:0.7}, 300)
                    },function(){
                    $(this).animate({opacity:1}, 300)
                    })
        })
        $(".content_container").load("fashion.html .rexiao",function(){
            /*-------二级导航显示隐藏-----------*/
            $('.rexiao').hide();
            $('.rexiao').hover(function(){
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
            $('.thirdNav').find('img').hover(function(){
                $(this).animate({opacity:0.7}, 300)
                },function(){
                $(this).animate({opacity:1}, 300)
                })
        })
        $('.footer').load('fashion.html footer',function(){
            /*--------图片遮罩-------------*/
            $('.footerimg').find('img').hover(function(){
                $(this).animate({opacity:0.7}, 300)
                },function(){
                $(this).animate({opacity:1}, 300)
                })
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
        /*-------------大图小图tab标签切换------------*/
        // 初始化 
        var bigPics = $('.bigPic div');
        var smallPics = $('.smallPic li');
        bigPics.eq(0).show().siblings().hide();
        smallPics.eq(0).addClass('active').siblings().removeClass('active');
        //点击切换
        $('.smallPic li').each(function(i){
            smallPics.eq(i).on('click',function(){
                 bigPics.eq(i).show().siblings().hide();
                smallPics.eq(i).addClass('active').siblings().removeClass('active');
            })
        })
       /*-------分享----------*/
       $('.share1').hover(function(){
            $('.share2').show();
       },function(){
            $('.share2').hide();
       })


    
    })
})
