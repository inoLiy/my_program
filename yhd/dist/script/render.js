"use strict";function index_render(){var E=$(".qua_left_font_con"),F=$(".qua_show_con_right"),G=$(".qua_top_slideCon_ul"),H=$(".under_sp_list"),n="http://10.31.155.77/work/my_program/yhd/php/";$.when($.ajax({url:n+"index1.php",dataType:"json",data:{num:1}}),$.ajax({url:n+"index1.php",dataType:"json",data:{num:2}}),$.ajax({url:n+"index1.php",dataType:"json",data:{num:3}}),$.ajax({url:n+"index1.php",dataType:"json",data:{num:4}}),$.ajax({url:n+"index1.php",dataType:"json",data:{num:5}})).done(function(n,a,l,t,r){var s="",i="",e="",c="",o=!0,u=!1,_=void 0;try{for(var p,d=n[0][Symbol.iterator]();!(o=(p=d.next()).done);o=!0){s+='\n        <a href="" target="_blank" class="qua_left_f_con_font qua_cor">'+p.value.type+"</a>\n    "}}catch(n){u=!0,_=n}finally{try{!o&&d.return&&d.return()}finally{if(u)throw _}}E.html(s),i+='\n            <a href="" target="_blank" class="import_snacks">\n                <p class="import_tit">'+a[0][0].smalltitle+'</p>\n                <p class="voucher_tit">'+a[0][0].price+'</p>\n                <div class="buy_btn">点击进入</div>\n                <img class="lazy" src="'+a[0][0].url+'">\n            </a>\n            <a href="" target="_blank" class="bursting" style="border-right:1px solid #f6f6f6">\n                <p class="burting_font burting_font_color specil">'+a[0][1].smalltitle+'</p>\n                <p class="bkzj">'+a[0][1].price+'</p>\n                <img class="lazy" src="'+a[0][1].url+'">\n            </a>\n            <a href="" target="_blank" class="bursting">\n                <p class="burting_font burting_font_color"'+a[0][2].smalltitle+'</p>\n                <p class="bkzj">'+a[0][2].price+'</p>\n                <img class="lazy" src="'+a[0][2].url+'">\n            </a>\n            <a href="" target="_blank" class="bursting " style="border-right:1px solid #f6f6f6;">\n                <p class="burting_font burting_font_color">'+a[0][3].smalltitle+'</p>\n                <p class="bkzj">'+a[0][3].price+'</p>\n                <img class="lazy" src="'+a[0][3].url+'">\n            </a>\n            <a href="" target="_blank" class="bursting">\n                <p class="burting_font burting_font_color">'+a[0][4].smalltitle+'</p>\n                <p class="bkzj">'+a[0][4].price+'</p>\n                <img class="lazy" src="'+a[0][4].url+'">\n            </a>\n            <a href="" target="_blank" class="import_snacks">\n                <p class="import_tit">'+a[0][5].smalltitle+'}</p>\n                <p class="voucher_tit">'+a[0][5].price+'</p>\n                <div class="buy_btn">点击进入</div>\n                <img class="lazy" src="'+a[0][5].url+'">\n            </a>\n        ',F.html(i);var b=!0,f=!1,m=void 0;try{for(var g,h=l[0][Symbol.iterator]();!(b=(g=h.next()).done);b=!0){var y=g.value;e+='\n        <a href="" target="_blank">\n            <li class="qua_top_imgCon">\n                <div class="qua_imgCon_font" style="background:url('+y.top+');">TOP'+y.sid+'</div>\n                <img class="lazy" src="'+y.url+'" title="'+y.text+'">\n            </li>\n        </a> \n        '}}catch(n){f=!0,m=n}finally{try{!b&&h.return&&h.return()}finally{if(f)throw m}}G.html(e);var v=!0,x=!1,k=void 0;try{for(var j,z=t[0][Symbol.iterator]();!(v=(j=z.next()).done);v=!0){var q=j.value;c+='\n        <li class="under_list_single">\n            <div class="under_pro_pic">\n                <img class="sin_img sin_img_big lazy"\n                    src="'+q.url+'"\n                    alt="">\n            </div>\n            <p class="single_tit text_limit_limp">'+q.title+'</p>\n            <p class="single_money">￥<span>'+q.price+'</span></p>\n            <div class="pro_tag clearfix"></div> \n            <div class="sing_btn_con">\n                <div class="sin_hove_btn sin_gw">\n                    <a class="sin_hove_btn_a item-cart" data-addproduct="51291942655,1">\n                        <i class="icon iconfont2018"></i>\n                    </a>\n                </div>\n                <div class="sin_hove_btn sin_xs">\n                    <a href="" target="_blank"class="sin_hove_btn_a">找相似</a>\n                </div>\n            </div>\n            <a class="border_line" href="http://10.31.155.77/work/my_program/yhd/src/details.html?sid='+q.sid+'" target="_blank"></a>\n        </li>\n        '}}catch(n){x=!0,k=n}finally{try{!v&&z.return&&z.return()}finally{if(x)throw k}}H.html(c);var w=$(".lunbo-ul"),T="",S=!0,C=!1,O=void 0;try{for(var P,A=r[0][Symbol.iterator]();!(S=(P=A.next()).done);S=!0){T+='\n        <li class="lunbo-li">\n            <a href="" class="lunbo-a">\n                <img src="'+P.value.url+'" class="lunbo-img">\n            </a>\n        </li>\n        '}}catch(n){C=!0,O=n}finally{try{!S&&A.return&&A.return()}finally{if(C)throw O}}w.html(T);var B=$(".lunbo-tab-ul"),D="";D+='\n                <li class="lunbo-tab-up colorblack">'+r[0][0].name+'</li>\n                <li class="lunbo-tab-up">'+r[0][1].name+'</li>\n                <li class="lunbo-tab-up">'+r[0][2].name+'</li>\n                <li class="lunbo-tab-up">'+r[0][3].name+"</li>\n        ",B.html(D)})}require(["config"],function(){require(["jquery"],function(){index_render()})});