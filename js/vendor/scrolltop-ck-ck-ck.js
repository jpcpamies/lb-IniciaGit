$(function(){$("nav a").on("click",function(e){e.preventDefault();var t=$(this).attr("href");$("body,html").stop(!0,!0).animate({scrollTop:$(t).offset().top},1e3)})});