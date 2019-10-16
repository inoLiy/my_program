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

                this.$a_btn = $('.a_btn');

                this.$submit = $('.agreement_btn');

                this.$em = $('.strong em');
                this.$regist_tips_keywords = $('.regist_tips_keywords');

            }

            init() {
                //字体移动
                let _this = this;
                let phone_yz = false;
                let s1 = 0, s2 = 0, s3 = 0, sum = 0;
               
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
                        top: -5
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
                            top: 6
                        });
                    } else if (reg1.test($(this).val())) {
                        $(_this.$same_item.eq(0)).css({
                            "border-color": "red"
                        });
                        $(_this.$tips_words.eq(0)).html('用户名格式错误，请输入正确的用户名');
                        $(_this.$regist_tips.eq(0)).animate({
                            top: -5
                        });
                    } else {
                        if (reg2.test($(this).val())) {
                            $.ajax({
                                type: 'post',
                                url: 'http://10.31.155.77/work/my_program/yhd/php/registe.php',
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
                                        top: 6
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
                                top: -5
                            });
                        }
                    }

                });

                //手机号和验证码
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
                        top: -5
                    });
                });
                this.$same_input.eq(1).on('input', function () {
                    let reg = /^1[23456789]\d{9}$/g;
                    if (reg.test($(this).val())) {
                        $(_this.$regist_tips.eq(1)).css({
                            "opacity": "0"
                        })
                    } else {
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
                            top: 6
                        });
                        phone_yz = false;
                    } else if (reg.test($(this).val())) {
                        $.ajax({
                            type: 'post',
                            url: 'http://10.31.155.77/work/my_program/yhd/php/registe.php',
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
                                    top: 6
                                });
                                phone_yz = false;
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
                                phone_yz = true;

                                //验证码



                            }
                        })


                    } else {
                        $(_this.$same_item.eq(1)).css({
                            "border-color": "red"
                        });
                        $(_this.$tips_words.eq(1)).html('手机号格式错误，请输入正确的手机号');
                        $(_this.$regist_tips.eq(1)).animate({
                            top: -5
                        });
                        phone_yz = false
                    }




                });
                _this.$a_btn.on('click', function () {
                    if(phone_yz){
                        $(this).html(yz());
                    }
                    
                })
                //随机数函数
                function random(min, max) {
                    return parseInt(Math.random() * (max - min + 1)) + min;
                }
                //数字、大小写字母验证码
                function yz() {
                    var arr = [];
                    //1.将验证码的数字和字符放入数组
                    for (var i = 48; i <= 57; i++) {
                        arr.push(String.fromCharCode(i));
                    }

                    for (var i = 97; i <= 122; i++) {
                        arr.push(String.fromCharCode(i));
                    }

                    //2.利用Math.random()随机产生0-35
                    // var index=parseInt(Math.random()*arr.length);//0-35

                    // console.log(arr[index]);

                    var yzmstr = '';
                    for (var i = 1; i <= 6; i++) {
                        //var index = parseInt(Math.random() * arr.length);//索引
                        var index = random(0, arr.length - 1);//索引
                        if (index > 9) {//拼接的字符
                            //公平的判断
                            var bstop = Math.random() > 0.5 ? true : false;

                            if (bstop) {
                                yzmstr += arr[index].toUpperCase();//大写
                            } else {
                                yzmstr += arr[index];
                            }
                        } else {//拼接的是数字
                            yzmstr += arr[index];
                        }
                    }

                    return yzmstr;


                }


                //密码
                this.$same_input.eq(3).on('focus', function () {

                    $(_this.$same_item.eq($(this).index('.same_input'))).css({
                        "border-color": "#dedede"
                    });

                    $(_this.$regtip_rel.eq(3)).css({
                        "background": "#e4e4e4"
                    });
                    $(_this.$i.eq(3)).css({
                        "border-right-color": "#e4e4e4"
                    })
                    $(_this.$tips_words.eq(3)).html(`密码由6-20位数字、大小写字母、特殊符号组成`);
                    $(_this.$regist_tips.eq(3)).css({
                        "opacity": "1"
                    }).animate({
                        top: -5
                    });
                });
                this.$same_input.eq(3).on('input', function () {
                    let reg1 = /[0-9]/g;
                    let reg2 = /[a-zA-Z]/g;
                    let reg3 = /[\W\_]/g;
                    $(_this.$regist_tips.eq(3)).css({
                        "opacity": "0"
                    });
                    $(_this.$regist_tips_keywords).css({
                        "display": "block"
                    });
                    if (reg1.test($(this).val())) {
                        s1 = 1;
                    } else {
                        s1 = 0;
                    }
                    if (reg2.test($(this).val())) {
                        s2 = 1;
                    } else {
                        s2 = 0;
                    }
                    if (reg3.test($(this).val())) {
                        s3 = 1;
                    } else {
                        s3 = 0;
                    }
                    sum = s1 + s2 + s3;
                    console.log(sum)
                    switch (sum) {
                        case 1:
                            $(_this.$em).css({
                                "background-color": "#fff"
                            });
                            $(_this.$em.eq(0)).css({
                                "background-color": "red"
                            });
                            console.log('a')
                            break;
                        case 2:
                            $(_this.$em).css({
                                "background-color": "#fff"
                            });
                            $(_this.$em.eq(0)).css({
                                "background-color": "orange"
                            });
                            $(_this.$em.eq(1)).css({
                                "background-color": "orange"
                            });
                            console.log('b')
                            break;
                        case 3:
                            $(_this.$em).css({
                                "background-color": "green"
                            });
                            console.log('c')
                    }


                });
                this.$same_input.eq(3).on('blur', function () {
                    let reg = /^\s\d{6,20}$/g;
                    $(_this.$regtip_rel.eq(3)).css({
                        "background": "#fff4d7"
                    });//框背景色
                    $(_this.$i.eq(3)).css({
                        "border-right-color": "#fff4d7"
                    })//小三角颜色

                    if ($(this).val() == '') {
                        $(_this.$same_item.eq(3)).css({
                            "border-color": "red"
                        });
                        $(_this.$tips_words.eq(3)).html(`请输入密码`);
                        $(_this.$regist_tips.eq(3)).animate({
                            top: 6
                        });

                    } else if (reg.test($(this).val())) {
                        $.ajax({
                            type: 'post',
                            url: 'http://10.31.155.77/work/my_program/yhd/php/registe.php',
                            async: 'true',
                            data: {
                                phone: $(this).val()
                            }
                        })
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
