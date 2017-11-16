require.config({
    
    // 配置短路径（别名）
    paths:{
        jquery:'../lib/jquery-3.1.1',
        validation:'../lib/jquery.validate',
        cookie:'../lib/jquery.cookie'

    },

    // 配置依赖
    shim:{
         validation:['jquery'],
         cookie:['jquery']

    }
});
require(['jquery','validation','cookie'],function($,b,c){
    jQuery(function($){




    })
})