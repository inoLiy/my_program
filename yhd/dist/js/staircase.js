"use strict";var _createClass=function(){function o(t,i){for(var l=0;l<i.length;l++){var o=i[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,i,l){return i&&o(t.prototype,i),l&&o(t,l),t}}();function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}!function(l){function t(){_classCallCheck(this,t),this.$shangpinlou=l(".shangpinlou"),this.$louceng=l(".louceng"),this.$loutiul=l(".louti"),this.$loutili=l(".louti li").not(".louti .first").not(".louti .last"),this.$last=l(".last")}(new(_createClass(t,[{key:"init",value:function(){var i=this;400<=l(window).scrollTop()?this.$loutiul.show():this.$loutiul.hide(),l(window).on("scroll",function(){400<=l(this).scrollTop()?i.$loutiul.show():i.$loutiul.hide()}),this.$loutili.on("click",function(){var t=i.$louceng.eq(l(this).index()-1).offset().top-100;console.log(l(this).index()),l("html,body").animate({scrollTop:t})}),this.$last.on("click",function(){l("html,body").animate({scrollTop:0})})}}]),t)).init()}(jQuery);