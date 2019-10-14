require(['config'], function () {
    require(['jquery'], function () {

        class regiset {
            //注册
            constructor() {

                this.$same_item = $('.same_item');
                this.$same_input = $('.same_input');
                this.$same_label = $('.same_label');

                this.$regist_tips = $('.regist_tips');
                this.$regtip_rel = $('.regtip_rel');
                this.$i = $('.regtip_rel i');
                this.$tips_words = $('.tips_words');

                this.$regist_right = $('.regist_right');

                this.$submit = $('.agreement_btn');

               
            }

            init() {
                //字体移动
                let _this = this;

                this.$same_input.on('focus', function () {
                    let len = _this.$same_label.eq($(this).index('.same_input')).html().length;
                    _this.$same_label.eq($(this).index('.same_input')).animate({
                        left: -100 + 14 * (5 - len)
                    });
                });

                //用户名
                this.$same_input.eq(0).on('focus', function () {
                    $(_this.$regist_right.eq(0)).css({
                        "display": "none"
                    });
                    $(_this.$same_item.eq($(this).index('.same_input'))).css({
                        "border-color": "#dedede"
                    });

                    $(_this.$regtip_rel.eq(0)).css({
                        "background": "#e4e4e4"
                    });
                    $(_this.$i.eq(0)).css({
                        "border-right-color": "#e4e4e4"
                    })
                    $(_this.$tips_words.eq(0)).html(`由4-20位字符，可由中文、英文、数字或符号“_”组成`);
                    $(_this.$regist_tips.eq(0)).css({
                        "opacity": "1"
                    }).animate({
                        top:-5
                    });
                });
                this.$same_input.eq(0).on('blur', function () {
                    let reg1 = /[\s]/g;
                    let reg2 = /^[\u4e00-\u9fa5\w]{4,20}$/g;
                    $(_this.$regtip_rel.eq(0)).css({
                        "background": "#fff4d7"
                    });//框背景色
                    $(_this.$i.eq(0)).css({
                        "border-right-color": "#fff4d7"
                    })//小三角颜色


                    if ($(this).val() == '') {
                        $(_this.$same_item.eq(0)).css({
                            "border-color": "red"
                        });
                        $(_this.$tips_words.eq(0)).html(`请输入用户名`);
                        $(_this.$regist_tips.eq(0)).animate({
                            top:6
                        });
                    } else if (reg1.test($(this).val())) {
                        $(_this.$same_item.eq(0)).css({
                            "border-color": "red"
                        });
                        $(_this.$tips_words.eq(0)).html('用户名格式错误，请输入正确的用户名');
                        $(_this.$regist_tips.eq(0)).animate({
                            top:-5
                        });
                    } else {
                        if (reg2.test($(this).val())) {
                            $.ajax({
                                type: 'post',
                                url: 'http://10.31.155.77/work/yhd/php/registe.php',
                                async: 'true',
                                data: {
                                    name: $(this).val()
                                }
                            }).done(function (value) {
                                if (value) {
                                    $(_this.$same_item.eq(0)).css({
                                        "border-color": "red"
                                    });

                                    $(_this.$tips_words.eq(0)).html('用户名已存在，请重新输入');
                                    $(_this.$regist_tips.eq(0)).animate({
                                        top:6
                                    });
                                } else {
                                    $(_this.$regist_tips.eq(0)).css({
                                        "opacity": "0"
                                    });
                                    $(_this.$regist_right.eq(0)).css({
                                        "display": "block"
                                    });
                                }
                            })
                        } else {
                            $(_this.$same_item.eq(0)).css({
                                "border-color": "red"
                            });

                            $(_this.$tips_words.eq(0)).html('用户名格式错误，请输入正确的用户名');
                            $(_this.$regist_tips.eq(0)).animate({
                                top:-5
                            });
                        }
                    }

                });

                //手机号
                this.$same_input.eq(1).on('focus', function () {
                    $(_this.$regist_right.eq(1)).css({
                        "display": "none"
                    });
                    $(_this.$same_item.eq($(this).index('.same_input'))).css({
                        "border-color": "#dedede"
                    });

                    $(_this.$regtip_rel.eq(1)).css({
                        "background": "#e4e4e4"
                    });
                    $(_this.$i.eq(1)).css({
                        "border-right-color": "#e4e4e4"
                    })
                    $(_this.$tips_words.eq(1)).html(`请填写正确的手机号码，以便接受订单通知，找回密码等`);
                    $(_this.$regist_tips.eq(1)).css({
                        "opacity": "1"
                    }).animate({
                        top:-5
                    });
                }); 
                this.$same_input.eq(1).on('input', function () {
                    let reg = /^1[23456789]\d{9}$/g;
                    if(reg.test($(this).val())){
                        $(_this.$regist_tips.eq(1)).css({
                            "opacity": "0"
                        })
                    }else{
                        $(_this.$regist_tips.eq(1)).css({
                            "opacity": "1"
                        })
                    }
                }); 
                this.$same_input.eq(1).on('blur', function () {
                    let reg = /^1[23456789]\d{9}$/g;
                    $(_this.$regtip_rel.eq(1)).css({
                        "background": "#fff4d7"
                    });//框背景色
                    $(_this.$i.eq(1)).css({
                        "border-right-color": "#fff4d7"
                    })//小三角颜色
                

                    if ($(this).val() == '') {
                        $(_this.$same_item.eq(1)).css({
                            "border-color": "red"
                        });
                        $(_this.$tips_words.eq(1)).html(`请输入手机号`);
                        $(_this.$regist_tips.eq(1)).animate({
                            top:6
                        });
                    } else if (reg.test($(this).val())) {
                        


                        $.ajax({
                            type: 'post',
                            url: 'http://10.31.155.77/work/yhd/php/registe.php',
                            async: 'true',
                            data: {
                                phone: $(this).val()
                            }
                        }).done(function (value) {
                            if (value) {
                                $(_this.$same_item.eq(1)).css({
                                    "border-color": "red"
                                });
                                $(_this.$regist_tips.eq(1)).css({
                                    "opacity": "1"
                                });
                                $(_this.$tips_words.eq(1)).html('手机号已存在');
                                $(_this.$regist_tips.eq(1)).animate({
                                    top:6
                                });
                            } else {
                                $(_this.$regist_tips.eq(1)).css({
                                    "opacity": "0"
                                });
                                $(_this.$same_item.eq(1)).css({
                                    "border-color": "e4e4e4"
                                });
                                $(_this.$regist_right.eq(1)).css({
                                    "display": "block"
                                });  
                            }
                        })
                    
                        
                    } else {
                        $(_this.$same_item.eq(1)).css({
                            "border-color": "red"
                        });
                        $(_this.$tips_words.eq(1)).html('手机号格式错误，请输入正确的手机号');
                        $(_this.$regist_tips.eq(1)).animate({
                            top:-5
                        });
                            
                    }

                });



            }
        }
        class login {
            //登录
            constructor() {


            }
            init() {


            }
        }
        new regiset().init();
        new login().init();
    });
});
