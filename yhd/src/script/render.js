require(['config'], function () {
    require(['jquery'], function () {


        index_render();

    });
});
function index_render() {
    const $qua_left_font_con = $('.qua_left_font_con');
    const $qua_show_con_right = $('.qua_show_con_right');
    const $qua_top_slideCon_ul = $('.qua_top_slideCon_ul');
    const $under_sp_list = $('.under_sp_list');
    const phpurl = 'http://10.31.155.77/work/my_program/yhd/php/';
    $.when($.ajax({
        url: phpurl + 'index1.php',
        dataType: 'json',
        data: {
            num: 1
        }
    }), $.ajax({
        url: phpurl + 'index1.php',
        dataType: 'json',
        data: {
            num: 2
        }
    }), $.ajax({
        url: phpurl + 'index1.php',
        dataType: 'json',
        data: {
            num: 3
        }
    }),$.ajax({
        url: phpurl + 'index1.php',
        dataType: 'json',
        data: {
            num: 4
        }
    })
    ).done(function (type, list, rank,liushi) {
        let typehtml = '';
        let lt = '';
        let rk = '';
        let ls = '';
        for (let value of type[0]) {
            typehtml += `
        <a href="" target="_blank" class="qua_left_f_con_font qua_cor">${value.type}</a>
    `

        }
        $qua_left_font_con.html(typehtml);

        lt += `
            <a href="" target="_blank" class="import_snacks">
                <p class="import_tit">${list[0][0].smalltitle}</p>
                <p class="voucher_tit">${list[0][0].price}</p>
                <div class="buy_btn">点击进入</div>
                <img src="${list[0][0].url}">
            </a>
            <a href="" target="_blank" class="bursting" style="border-right:1px solid #f6f6f6">
                <p class="burting_font burting_font_color specil">${list[0][1].smalltitle}</p>
                <p class="bkzj">${list[0][1].price}</p>
                <img src="${list[0][1].url}">
            </a>
            <a href="" target="_blank" class="bursting">
                <p class="burting_font burting_font_color"${list[0][2].smalltitle}</p>
                <p class="bkzj">${list[0][2].price}</p>
                <img src="${list[0][2].url}">
            </a>
            <a href="" target="_blank" class="bursting " style="border-right:1px solid #f6f6f6;">
                <p class="burting_font burting_font_color">${list[0][3].smalltitle}</p>
                <p class="bkzj">${list[0][3].price}</p>
                <img src="${list[0][3].url}">
            </a>
            <a href="" target="_blank" class="bursting">
                <p class="burting_font burting_font_color">${list[0][4].smalltitle}</p>
                <p class="bkzj">${list[0][4].price}</p>
                <img src="${list[0][4].url}">
            </a>
            <a href="" target="_blank" class="import_snacks">
                <p class="import_tit">${list[0][5].smalltitle}}</p>
                <p class="voucher_tit">${list[0][5].price}</p>
                <div class="buy_btn">点击进入</div>
                <img src="${list[0][5].url}">
            </a>
        `
        $qua_show_con_right.html(lt);

        for (let value of rank[0]) {
            rk += `
        <a href="" target="_blank">
            <li class="qua_top_imgCon">
                <div class="qua_imgCon_font" style="background:url(${value.top});">TOP${value.sid}</div>
                <img src="${value.url}" title="${value.text}">
            </li>
        </a> 
        `
        }
        $qua_top_slideCon_ul.html(rk);

        for(let value of liushi[0]){
             ls +=`
        <li class="under_list_single">
            <div class="under_pro_pic">
                <img class="sin_img sin_img_big lazy"
                    src="${value.url}"
                    alt="">
            </div>
            <p class="single_tit text_limit_limp">${value.type}</p>
            <p class="single_money">￥<span>${value.price}</span></p>
            <div class="pro_tag clearfix"></div>
            
            <div class="sing_btn_con">
                <div class="sin_hove_btn sin_gw">
                    <a class="sin_hove_btn_a item-cart" data-addproduct="51291942655,1">
                        <i class="icon iconfont2018"></i>
                    </a>
                </div>
                <div class="sin_hove_btn sin_xs">
                    <a href="" target="_blank"class="sin_hove_btn_a">找相似</a>
                </div>
            </div>
            <a class="border_line" href="" target="_blank"></a>
        </li>
        `
        }
        $under_sp_list.html(ls);

       
    })

}


