"use strict";require(["config"],function(){require(["jquery","jquery.cookie"],function(){var o=location.search.slice(1).split("=")[1];$.ajax({url:"http://10.31.155.77/work/my_program/yhd/php/details.php",dataType:"json",data:{id:o}}).done(function(o){var i,s,t,r=$(".mBox"),n=$(".number"),c=$(".proImg"),a="";t='\n                    <img id="J_prodImg" width="360" height="360" alt="'+o.title+'" src="'+o.sp.split(",")[0]+'"> \n                    ',c.append(t),i='\n                        <b class="">\n                            <img width="50" height="50" class="detail_main_pic_class"\n                                alt="'+o.title+'"\n                        ';for(var p=0;p<o.sp.split(",").length;p++)a+=i+'\n                            src="'+o.sp.split(",")[p]+'">\n                        </b>';r.html(a),s='<span id="current_price">￥'+o.price+"</span>",n.html(s)});var i=$(".mBox"),r=$(".mask"),n=$("#J_zoom"),c=$("#J_zoom img"),a=$(".zoomCursor"),s=$(".numwrap .num"),t=$(".act .add"),p=$(".act .reduce"),e=$(".buy_btn"),u=[],l=[];i.on("click",function(o){if("IMG"==o.target.nodeName){var i=$(o.target).attr("src");$("#J_prodImg").attr({src:i}),c.attr({src:i})}}),r.on("mouseover",function(){var o=$(".mBox img").attr("src");c.attr({src:o}),a.show(),n.show(),$(document).on("mousemove",function(o){var i=o.pageX-r.offset().left-a.width()/2,s=o.pageY-r.offset().top-a.height()/2,t=500/360;i<=0?i=0:i>=r.width()-a.width()&&(i=r.width()-a.width()),s<=0?s=0:s>=r.height()-a.height()&&(s=r.height()-a.height()),a.css({left:i,top:s}),c.css({left:-t*i,top:-t*s}),r.on("mouseout",function(){a.hide(),n.hide()})})}),s.on("input",function(){var o=s.val();99<=o?(s.val(99),t.css({backgroundPosition:"-148px -49px",cursor:"default"}),p.css({backgroundPosition:"-124px -73px",cursor:"point"})):1<o&&o<99?(t.css({backgroundPosition:"-124px -49px",cursor:"point"}),p.css({backgroundPosition:"-124px -73px",cursor:"point"})):o<=1&&(s.val(1),t.css({backgroundPosition:"-124px -49px",cursor:"point"}),p.css({backgroundPosition:"-148px -73px",cursor:"default"}))}),t.on("click",function(){var o=s.val();99<=o?s.val(99):(o++,s.val(o)),99==s.val()?t.css({backgroundPosition:"-148px -49px",cursor:"default"}):t.css({backgroundPosition:"-124px -49px",cursor:"point"}),p.css({backgroundPosition:"-124px -73px",cursor:"point"})}),p.on("click",function(){var o=s.val();o<=1?s.val(1):(o--,s.val(o)),1==s.val()?(t.css({backgroundPosition:"-124px -49px",cursor:"point"}),p.css({backgroundPosition:"-148px -73px",cursor:"default"})):(t.css({backgroundPosition:"-124px -49px",cursor:"point"}),p.css({backgroundPosition:"-124px -73px",cursor:"point"}))}),e.on("click",function(){$.cookie("sid")?(u=$.cookie("sid").split(","),l=$.cookie("value").split(","),0<=u.indexOf(o)?l[u.indexOf(o)]=Number(l[u.indexOf(o)])+Number(s.val()):(u=$.cookie("sid").split(","),l=$.cookie("value").split(","),u.push(o),l.push(s.val()))):(u.push(o),l.push(s.val())),$.cookie("sid",u,{expires:7}),$.cookie("value",l,{expires:7}),alert("加入成功")})})});