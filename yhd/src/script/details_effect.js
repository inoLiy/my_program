require(['config'], function () {
    require(['jquery', 'jquery.cookie'], function () {
        let sid = location.search.slice(1).split('=')[1];
        const phpurl = 'http://10.31.155.77/work/my_program/yhd/php/'
        $.ajax({
            url: phpurl + 'details.php',
            dataType: 'json',
            data: {
                id: sid
            }
        }).done(function (details) {

            const $mBox = $('.mBox');
            const $price = $('.number');
            const $proImg = $('.proImg');


            let dt = '';
            let ft = '';
            let sum = '';
            let prc = '';
            let img = '';

            img = `
                    <img id="J_prodImg" width="360" height="360" alt="${details.title}" src="${details.sp.split(',')[0]}"> 
                    `
            $proImg.append(img);
            dt = `
                        <b class="">
                            <img width="50" height="50" class="detail_main_pic_class"
                                alt="${details.title}"
                        `
            ft = `</b>`
            for (let i = 0; i < details.sp.split(',').length; i++) {
                sum += dt + `
                            src="${details.sp.split(',')[i]}">
                        `+ ft;


            }

            $mBox.html(sum);
            prc = `<span id="current_price">￥${details.price}</span>`
            $price.html(prc);
        })











        //放大镜
        const $mBox = $('.mBox');
        const $mask = $('.mask');
        const $J_zoom = $('#J_zoom');
        const $bp = $('#J_zoom img');
        const $xf = $('.zoomCursor');

        //购物车
        const $num = $('.numwrap .num');
        const $add = $('.act .add');
        const $reduce = $('.act .reduce');

        const $buy = $('.buy_btn');
        
        let id =[];
        let value = [];


        //放大镜
        $mBox.on('click', function (ev) {
            if (ev.target.nodeName == 'IMG') {
                let sr = $(ev.target).attr("src");

                $('#J_prodImg').attr({
                    "src": sr
                });
                $bp.attr({
                    "src": sr
                });
            }
        })
        $mask.on('mouseover', function () {
            let sr = $('.mBox img').attr("src")
            $bp.attr({
                "src": sr
            });
            $xf.show();
            $J_zoom.show()


            $(document).on('mousemove', function (ev) {

                let shortleft = ev.pageX - $mask.offset().left - $xf.width() / 2;
                let shorttop = ev.pageY - $mask.offset().top - $xf.height() / 2;
                let bili = 500 / 360;
                if (shortleft <= 0) {
                    shortleft = 0
                } else if (shortleft >= $mask.width() - $xf.width()) {
                    shortleft = $mask.width() - $xf.width();
                }
                if (shorttop <= 0) {
                    shorttop = 0
                } else if (shorttop >= $mask.height() - $xf.height()) {
                    shorttop = $mask.height() - $xf.height();
                }
                $xf.css({
                    left: shortleft,
                    top: shorttop
                })
                $bp.css({
                    left: -bili * shortleft,
                    top: -bili * shorttop
                })
                $mask.on('mouseout', function () {
                    $xf.hide();
                    $J_zoom.hide();
                })

            })

        })


        //数量限制
        $num.on('input', function () {
            let num = $num.val();
            if (num >= 99) {
                $num.val(99);
                $add.css({
                    backgroundPosition: "-148px -49px",
                    cursor: "default"
                })
                $reduce.css({
                    backgroundPosition: "-124px -73px",
                    cursor: "point"
                })
            } else if (num > 1 && num < 99) {
                $add.css({
                    backgroundPosition: "-124px -49px",
                    cursor: "point"
                })
                $reduce.css({
                    backgroundPosition: "-124px -73px",
                    cursor: "point"
                })
            } else if (num <= 1) {
                $num.val(1);
                $add.css({
                    backgroundPosition: "-124px -49px",
                    cursor: "point"
                })
                $reduce.css({
                    backgroundPosition: "-148px -73px",
                    cursor: "default"
                })
            }


        })
        //点击增加
        $add.on('click', function () {
            let num = $num.val();
            if (num >= 99) {
                $num.val(99);

            } else {
                num++;
                $num.val(num);


            }

            if ($num.val() == 99) {
                $add.css({
                    backgroundPosition: "-148px -49px",
                    cursor: "default"
                })
                $reduce.css({
                    backgroundPosition: "-124px -73px",
                    cursor: "point"
                })
            } else {
                $add.css({
                    backgroundPosition: "-124px -49px",
                    cursor: "point"
                })
                $reduce.css({
                    backgroundPosition: "-124px -73px",
                    cursor: "point"
                })
            }

        })
        //点击减少
        $reduce.on('click', function () {
            let num = $num.val();



            if (num <= 1) {
                $num.val(1);
            } else {
                num--;
                $num.val(num);
            }

            if ($num.val() == 1) {
                $add.css({
                    backgroundPosition: "-124px -49px",
                    cursor: "point"
                })
                $reduce.css({
                    backgroundPosition: "-148px -73px",
                    cursor: "default"
                })
            } else {
                $add.css({
                    backgroundPosition: "-124px -49px",
                    cursor: "point"
                })
                $reduce.css({
                    backgroundPosition: "-124px -73px",
                    cursor: "point"
                })
            }

        })
        //加入购物车
        $buy.on('click', function () {
            if ($.cookie('sid')) {
                id = $.cookie('sid').split(',');
                value = $.cookie('value').split(',');
                if(id.indexOf(sid)>=0){
                    value[id.indexOf(sid)]  = Number(value[id.indexOf(sid)])+Number($num.val());

                    $.cookie('sid',id,{ expires: 7 });
                    $.cookie('value',value,{ expires: 7 });
                    alert('加入成功');
                }else{
                    id = $.cookie('sid').split(',');
                    value = $.cookie('value').split(',');
                    id.push(sid);
                    value.push($num.val());

                    $.cookie('sid',id,{ expires: 7 });
                    $.cookie('value',value,{ expires: 7 });
                    alert('加入成功');
                }
                
            } else {
                id.push(sid);
                value.push($num.val());
                $.cookie('sid',id,{ expires: 7 });
                $.cookie('value',value,{ expires: 7 });
                alert('加入成功');
                
            }
        })


    });
});
