// Facebook
(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n))return;r=e.createElement(t);r.id=n;r.src="//connect.facebook.net/es_ES/all.js#xfbml=1";i.parentNode.insertBefore(r,i)})(document,"script","facebook-jssdk");var disqus_shortname="iniciagit";(function(){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src="//"+disqus_shortname+".disqus.com/embed.js";(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)})();var disqus_shortname="iniciagit";(function(){var e=document.createElement("script");e.async=!0;e.type="text/javascript";e.src="//"+disqus_shortname+".disqus.com/count.js";(document.getElementsByTagName("HEAD")[0]||document.getElementsByTagName("BODY")[0]).appendChild(e)})();$(function(){$("ul li a").on("click",function(e){e.preventDefault();var t=$(this).attr("href");$("body,html").stop(!0,!0).animate({scrollTop:$(t).offset().top},1e3)})});(function(e){function s(e){document.location.href=e}function o(){return e(".mnav").length?!0:!1}function u(t){var n=!0;t.each(function(){!e(this).is("ul")&&!e(this).is("ol")&&(n=!1)});return n}function a(){return e(window).width()<t.switchWidth}function f(t){return e.trim(t.clone().children("ul, ol").remove().end().text())}function l(t){return e.inArray(t,i)===-1?!0:!1}function c(t){t.find(" > li").each(function(){var n=e(this),r=n.find("a").attr("href"),s=function(){return n.parent().parent().is("li")?n.parent().parent().find("a").attr("href"):null};n.find(" ul, ol").length&&c(n.find("> ul, > ol"));n.find(" > ul li, > ol li").length||n.find("ul, ol").remove();!l(s(),i)&&l(r,i)?n.appendTo(t.closest("ul#mmnav").find("li:has(a[href="+s()+"]):first ul")):l(r)?i.push(r):n.remove()})}function h(){var t=e('<ul id="mmnav" />');n.each(function(){e(this).children().clone().appendTo(t)});c(t);return t}function p(t,n,r){r?e('<option value="'+t.find("a:first").attr("href")+'">'+r+"</option>").appendTo(n):e('<option value="'+t.find("a:first").attr("href")+'">'+e.trim(f(t))+"</option>").appendTo(n)}function d(n,r){var i=e('<optgroup label="'+e.trim(f(n))+'" />');p(n,i,t.groupPageText);n.children("ul, ol").each(function(){e(this).children("li").each(function(){p(e(this),i)})});i.appendTo(r)}function v(n){var i=e('<select id="mm'+r+'" class="mnav" />');r++;t.topOptionText&&p(e("<li>"+t.topOptionText+"</li>"),i);n.children("li").each(function(){var n=e(this);n.children("ul, ol").length&&t.nested?d(n,i):p(n,i)});i.change(function(){s(e(this).val())}).prependTo(t.prependTo)}function m(){if(a()&&!o())if(t.combine){var r=h();v(r)}else n.each(function(){v(e(this))});if(a()&&o()){e(".mnav").show();n.hide()}if(!a()&&o()){e(".mnav").hide();n.show()}}var t={combine:!0,groupPageText:"Main",nested:!0,prependTo:"body",switchWidth:480,topOptionText:"Select a page"},n,r=0,i=[];e.fn.mobileMenu=function(r){r&&e.extend(t,r);if(u(e(this))){n=e(this);m();e(window).resize(function(){m()})}else alert("mobileMenu only works with <ul>/<ol>")}})(jQuery);$(function(){$("#mobileMenu").mobileMenu({combine:!1,groupPageText:"",nested:!0,prependTo:"nav",switchWidth:992,topOptionText:""})});var num=163;$(window).bind("scroll",function(){$(window).scrollTop()>num?$(".menu").addClass("fixed"):$(".menu").removeClass("fixed")});