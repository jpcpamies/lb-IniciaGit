// Script Facebook
(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n))return;r=e.createElement(t);r.id=n;r.src="//connect.facebook.net/es_ES/all.js#xfbml=1";i.parentNode.insertBefore(r,i)})(document,"script","facebook-jssdk");(function(){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src="//"+disqus_shortname+".disqus.com/embed.js";(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)})();var disqus_shortname="iniciagit";(function(){var e=document.createElement("script");e.async=!0;e.type="text/javascript";e.src="//"+disqus_shortname+".disqus.com/count.js";(document.getElementsByTagName("HEAD")[0]||document.getElementsByTagName("BODY")[0]).appendChild(e)})();$(function(){$(".mobileMenu").mobileMenu({combine:!1,groupPageText:"",nested:!0,prependTo:"nav",switchWidth:880,topOptionText:""})});var num=180;$(window).bind("scroll",function(){$(window).scrollTop()>num?$(".boton").addClass("arriba"):$(".boton").removeClass("arriba")});var num2=175;$(window).bind("scroll",function(){$(window).scrollTop()>num2?$(".menu").addClass("fixed"):$(".menu").removeClass("fixed")});var num3=120;$(window).bind("scroll",function(){$(window).scrollTop()>num3?$(".tope").addClass("fijo"):$(".tope").removeClass("fijo")});