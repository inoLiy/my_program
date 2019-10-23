require(['config'], function () {
    require(['jquery','jquery.cookie'], function () {
        class index_effect {
            constructor() {
                this.$shangpinlou = $('.shangpinlou');
                this.$louceng = $('.louceng');
                this.$loutiul = $('.louti');
                this.$loutili = $('.louti li').not('.louti .first').not('.louti .last');
                this.$last = $('.last');

                this.$lunbo_pic = $('.lunbo-ul');
                this.$lunbo_btn = $('.lunbo-tab-ul');
                this.$list = $('.under_sp_list');

                this.$log = $('.log');
                this.$reg = $('.reg');


            }
            init() {
                //楼梯效果
                // 加载页面后判断楼梯是否显现
                let $top = $(window).scrollTop();
                let _this = this;//指向实例对象

                



                if ($top >= 400) {
                    this.$loutiul.show();
                } else {
                    this.$loutiul.hide();
                };
                // 滑动滚轮到达一定程度楼梯显现
                $(window).on('scroll', function () {
                    let $top = $(this).scrollTop();
                    if ($top >= 400) {
                        _this.$loutiul.show();
                    } else {
                        _this.$loutiul.hide();
                    }

                    //滑动滚轮根据top值进行判断，显示对应楼层
                    _this.$louceng.each(function (index, element) {
                        let $loucengtop = _this.$louceng.eq(index).offset().top - 100;
                        if ($loucengtop > $top) {
                            _this.$loutili.removeClass('activecolor');
                            _this.$loutili.eq(index).addClass('activecolor');

                            return false;
                        }

                    });

                });
                // 点击楼梯到达相应楼层，显示对应楼层
                this.$loutili.on('click', function () {
                    $(this).addClass('activecolor').siblings('li').removeClass('activecolor');
                    let $loucengtop = _this.$louceng.eq($(this).index() - 1).offset().top - 100;
                    $('html,body').animate({
                        scrollTop: $loucengtop
                    });
                });
                //点击返回顶部，回到顶部
                this.$last.on('click', function () {
                    $('html,body').animate({
                        scrollTop: 0
                    })
                })



                // 懒加载
                // $(document).ready(function ($) { //页面加载完成
                //     $('img.lazy').lazyload({
                //         effect: "fadeIn" //效果方式
                //     });
                // });






                //轮播图
                var index=0;
                _this.$lunbo_btn.on('click', function (ev) {
                    
                    if (ev.target.nodeName == 'LI') {
                         index = $(ev.target).index();
                        $(ev.target).addClass('colorblack').siblings().removeClass('colorblack');
                        
                        $('.lunbo-ul li').eq($(ev.target).index()).stop(true,true).animate({
                            opacity: 1
                        },200).siblings().stop(true,true).animate({
                            opacity: 0
                        },200)
                    }
                    
                })              
                setInterval(function(){
                    if(index>3){
                        index = 0;
                    }
                    $('.lunbo-tab-ul li').eq(index).addClass('colorblack').siblings().removeClass('colorblack');
                        
                        $('.lunbo-ul li').eq(index).stop(true).animate({
                            opacity: 1
                        },200).siblings().stop(true).animate({
                            opacity: 0
                        },200)
                    index++;
                },1500)
                this.$list.on('click',function(ev){
                    if($(ev.target).nodeName=='LI'){
                        let index = $(ev.target)
                    }
                })

                

                //登录
                if($.cookie('name')){
                    this.$log.html($.cookie('name'));
                    this.$log.attr('href','javascript:;');
                    this.$reg.html('|&nbsp;退出');
                    this.$reg.attr('href','javascript:;');
                }else{
                    this.$log.html($.cookie('登录&nbsp;'));
                    this.$reg.html('&nbsp;注册');
                    this.$log.attr('href','http://10.31.155.77/work/my_program/yhd/src/login.html');
                    this.$reg.attr('href','http://10.31.155.77/work/my_program/yhd/src/registe.html');
                }
                this.$reg.on('click',function(){
                    if(_this.$reg.html()=='|&nbsp;退出'){

                        $.cookie('name','a',{expires: -1});
                        window.location.href='http://10.31.155.77/work/my_program/yhd/src/index1.html'
                        this.$reg.attr('href','http://10.31.155.77/work/my_program/yhd/src/resigte.html');
                    }
                })
            }
        }
new index_effect().init();
    });
});





