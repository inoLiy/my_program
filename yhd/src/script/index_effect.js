require(['config'], function () {
    require(['jquery'], function () {
        class index_effect {
            constructor() {
                this.$shangpinlou = $('.shangpinlou');
                this.$louceng = $('.louceng');
                this.$loutiul = $('.louti');
                this.$loutili = $('.louti li').not('.louti .first').not('.louti .last');
                this.$last = $('.last');
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

                //轮播图
                
            }
        }

        new index_effect().init();
    });
});





