require(['config'], function () {
    require(['jquery', 'jquery.cookie'], function () {
        const phpurl = 'http://10.31.155.77/work/my_program/yhd/php/'
        const $zongjia = $('.amount span');
        const $ul = $('.cart_item');
        let id;
        let value;
        let num = 0;
        let sum = 0;

        if ($.cookie('sid')) {
            id = $.cookie('sid').split(',');
            value = $.cookie('value').split(',');
            $.ajax({
                url: phpurl + 'cart.php',
                dataType: 'json',
                data: {
                    id: id,
                }
            }).done(function (cart) {
                let sp = '';
                let ck='';
                for (let val of cart) {


                    //渲染打钩与未打钩,总价渲染
                    if($.cookie('bx')){
                        if($.cookie('bx')==''){
                            sum += val.price * value[num];
                           
                            ck =' checked';
                        }else{
                            if($.cookie('bx').split(',').indexOf(val.sid)>=0){
                                
                                 ck = '';
                            }else{
                                sum += val.price * value[num];
                                
                               ck = ' checked';
                            }                 
                        }
                    }else{
                        sum += val.price * value[num];
                        ck = ' checked';
                    }
                    

                    sp += `
                <li class="item">
                <div class="cart_prod">
                  
                    <a href="javascript:;" class="check_all${ck}">
                        <i class="iconfont"></i>
                    </a>
                    <a href="" target="_blank" class="item_pic">
                        <img class="mainCart scrollLoading" src="${val.url}">  
                    </a>
                
                    <a href="" target="_blank" class="item_tit ">
                        <span class="fresh_tag">生鲜</span>
                        ${val.title}
                    </a>

                    <div class="item_price">
                        <p> ${val.price} </p>
                    
                    </div>
                   
                    <div class="item_num">
                        <div class="num_act clearfix">
                            <a href="javascript:;" class="minus">−</a>
                            <input type="text" class="input" value="${value[num]}">
                            <a href="javascript:;" class="add">+</a>
                        </div>
                    </div>
                    
                    <div class="item_amount">
                        <div class="item_a_money"> ${val.price * value[num]} </div>
                        
                    </div>
                    
                    <div class="item_act">
                        <div class="item_act">
                        <a href="javascript:;" class="collect_btn" title="收藏"></a>
                            <i class="iconfont add"></i>
                            </a> 
                            <a href="javascript:;" class="del_btn"></a>
                                <i class="iconfont del"></i>
                            </a>
                        </div>
            
                    </div>
                </div>
                </li>
                `
                    
                   num++;

                }
                num = 0;
                $ul.html(sp);
                $zongjia.html('￥' + sum);

            })

            $ul.on('click', function (ev) {
                let zo = 0;
                //删除，改变总价
                if (ev.target.className == 'iconfont del') {
                    let index = $(ev.target).index('.del');
                    let arr, val
                    $('.item').eq(index).remove();
                    $('.item_a_money').each(function () {
                        zo += Number($(this).html());
                    })
                    $zongjia.html('￥' + zo);

                    arr = $.cookie('sid').split(',');
                    arr.splice(index, 1);
                    $.cookie('sid', arr, { expires: 7 });

                    val = $.cookie('value').split(',');
                    val.splice(index, 1);
                    $.cookie('value', val, { expires: 7 });

                } else if (ev.target.className == 'add') {//点击增加
                    let index = $(ev.target).index('a.add');
                    // console.log($('a.add').length);
                    let sum, val;
                    let zj = 0;
                    sum = $('.input').eq(index).val();

                    if (sum >= 99) {
                        sum = 99;
                    } else {
                        sum++
                    }

                    $('.input').eq(index).val(sum);
                    val = $.cookie('value').split(',');
                    val.splice(index, 1, sum);
                    $.cookie('value', val, { expires: 7 });

                    let bl;
                    bl = $.cookie('value').split(',');
                    bl.splice(index,1,sum);
                    $.cookie('value',bl);

                    $('.item_a_money').eq(index).html(sum*$('.item_price p').eq(index).html());

                    //改变总价
                    
                    $('.item').has('.checked').find('.item_a_money').each(function(){
                        zj += Number($(this).html()); 
                    })
                    $('.amount span').html(`¥ ${zj}`);
                }
                else if (ev.target.className == 'minus') {//点击减少
                    let index = $(ev.target).index('.minus');
                    // console.log($('.minus').length);
                    let sum, val;
                    let zj=0;
                    sum = $('.input').eq(index).val();
                    if (sum <= 1) {
                        sum = 1;
                    } else {
                        sum--;
                    }

                    $('.input').eq(index).val(sum);

                    val = $.cookie('value').split(',');
                    val.splice(index, 1, sum);
                    $.cookie('value', val, { expires: 7 });
                    //改变小计
                    let bl;
                    bl = $.cookie('value').split(',');
                    bl.splice(index,1,sum);
                    $.cookie('value',bl);
                    $('.item_a_money').eq(index).html(sum*$('.item_price p').eq(index).html());
                
                    //改变总价
                    
                    $('.item').has('.checked').find('.item_a_money').each(function(){
                        zj += Number($(this).html()); 
                    })
                    $('.amount span').html(`¥ ${zj}`);

                
                }
                    
            })
            //输入限制
            $ul.on('input', function (ev) {
                if (ev.target.className == 'input') {
                    let index = $(ev.target).index('.input');
                    let val;
                    let bl;
                    let zj = 0;
                    val = $('.input').eq(index).val();
                    if (val > 99) {
                        val = 99;
                    } else if (val < 1) {
                        val = 1;
                    }
                    $('.input').eq(index).val(val);
                    bl = $.cookie('value').split(',');
                    bl.splice(index,1,val);
                    $.cookie('value',bl);
                    console.log()
                    $('.item_a_money').eq(index).html(val*$('.item_price p').eq(index).html());
                    
                    //改变总价
                    
                    $('.item').has('.checked').find('.item_a_money').each(function(){
                        zj += Number($(this).html()); 
                    })
                    $('.amount span').html(`¥ ${zj}`);
                }
            });

            //全选
            //判断是否全选
            if($.cookie('bx')){
                if ($.cookie('bx') == '') {
                    $('.check_all:first').addClass('checked');
                } else {
                    $('.check_all:first').removeClass('checked');
                }
                
            }else{
                $.cookie('bx','',{expires:7})
            }
            
            let bx = [];
            $('.cart_content').on('click', function (ev) {
                const $xz = $('.check_all').not('.check_all:first');
                
                let ls;

                if (ev.target.className === 'iconfont') {
                    let zj = 0;
                    
                    let index = $(ev.target).index('.check_all .iconfont');
                    $xz.eq(index - 1).toggleClass('checked');

                    //改变总价
                    $('.item').has('.checked').find('.item_a_money').each(function(){
                        zj += Number($(this).html()); 
                    })
                    $('.amount span').html(`¥ ${zj}`);

                    if($xz.length==$('.cart_list .checked').length){
                        $('.check_all:first').addClass('checked');
                    }else{
                        $('.check_all:first').removeClass('checked');
                    }
                    //有√删除cookie中的项
                    if ($xz.eq(index - 1).attr('class') == 'check_all checked') {
                        ls = $.cookie('sid').split(',');
                        bx = $.cookie('bx').split(',');
                        if(bx == ''){
                            bx = [];
                        }            
                       b_index = bx.indexOf(ls[index - 1]);
                        bx.splice(b_index,1);
                        $.cookie('bx',bx);
                    } else {//无√增加cookie中的项
                       ls = $.cookie('sid').split(',');
                       bx = $.cookie('bx').split(',');
                       if(bx == ''){
                           bx = [];
                       }
                        bx.push(ls[index-1]);
                        $.cookie('bx',bx);
                        
                    }

                }
            })
            //全选效果
            $('.check_all:first').on('click', function () {
                let zj = 0;

                const $xz = $('.check_all').not('.check_all:first');
                const $qx = $('.check_all:first');
                $qx.toggleClass('checked');


                

                if ($qx.attr('class') === 'check_all checked') {
                    $xz.each(function () {
                        $(this).addClass('checked');
                        $.cookie('bx','');
                    })

                    //改变总价
                $('.item').has('.checked').find('.item_a_money').each(function(){
                    zj += Number($(this).html()); 
                })
                $('.amount span').html(`¥ ${zj}`);


                }else{
                    $xz.each(function () {
                        $(this).removeClass('checked');
                        
                        $.cookie('bx',[$.cookie('sid')])
                      
                    })


                    //改变总价
                $('.item').has('.checked').find('.item_a_money').each(function(){
                    zj += Number($(this).html()); 
                })
                $('.amount span').html(`¥ ${zj}`);
                }
                return false;//阻止冒泡
            })





        }
    })
})