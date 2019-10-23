//主文件入口
//第三方地址
require.config({
    paths:{
        'jquery':'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min',
        'jquery.color':'https://cdnjs.cloudflare.com/ajax/libs/jquery-color/2.1.2/jquery.color.min',
        'jquery.lazyload' : 'https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min',
        'jquery.cookie' : 'https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min'
    }
})

//加载模块
require(["jquery"], function ($) {
    var targetModule = $("#current-page").attr("target-module");
    var renderModule = $("#current-page").attr("render-module");

    if(renderModule){
        require([renderModule], function (renderModule) {//加载目标模块
    
          });
    }
    if (targetModule) {//判断是否存在目标模块

        require([targetModule], function (targetModule) {//加载目标模块
          //全部统一调用init方法
          //也就是每个模块都暴露一个init方法用于事件监听，页面内容加载等
        //   targetModule.init();
        });
    }
});