function change(){
		var a1 =document.getElementById("first");
		var a2 =document.getElementById("second");
		var a3 =document.getElementById("third");
		var a4 =document.getElementById("m-icon");
		var a5 =document.getElementById("menu");
  var cho
  =document.getElementById("cho");
  var img1
  =document.getElementById("img1");
  var s1
  =document.getElementById("s1");
  var s2
  =document.getElementById("s2");
  var all
  =document.getElementById("all");
  var m1
  =document.getElementById("member1");
  var m2
  =document.getElementById("member2");
  var m3
  =document.getElementById("member3");
  var m4
  =document.getElementById("member4");
		if(document.getElementById("menu_trigger").checked==false){
		a1.className='first2 bar';
		a2.className='second2 bar';
		a3.className='third2';
		a4.className='m-icon2';
    all.style.opacity="0";
    m1.style.opacity="0";
    m2.style.opacity="0";
    m3.style.opacity="0";
    m4.style.opacity="0";
		setTimeout(function(){
      a5.style.opacity="1";
      a5.className='menu';
      a5.style.zindex="1" ;
      cho.style.left="60px";
      img1.style.left="16%";
      s1.style.left="20%";
      s2.style.left="60%";
        }, 1000);
   
		}
		if(document.getElementById("menu_trigger").checked){
		a1.className='first bar';
		a2.className='second bar';
		a3.className='third bar';
		a4.className='m-icon';
    cho.style.left="20px";
    a5.style.opacity="0";
    img1.style.left="40%";
    s1.style.left="50%";
    s2.style.left="80%";
      setTimeout(function(){ 
    a5.className='menu2';
    a5.style.zindex="-1" ;
    all.style.opacity="1";
    m1.style.opacity="1";
    m2.style.opacity="1";
     m3.style.opacity="1";
     m4.style.opacity="1";
    }, 1000);
		}
		}
window.onload=menu_c;
function menu_c(){
  var a1 =document.getElementById("menu");
  a1.className='menu2';
}
$(window).scroll(function(){
  if ($(window).scrollTop()>0){
    $(".menu-b").css("opacity",".6");
}
  else
    {
      $(".menu-b").css("opacity","1");
    }
});
$(function(){ 
    $("#gotop").click(function(){ 
        jQuery("html,body").animate({ 
            scrollTop:0 
        },1000); 
    }); 
  $("#m1").click(function(){ 
        jQuery("html,body").animate({scrollTop:$('#member1').offset().top},1000); 
    }); 
  $("#m2").click(function(){ 
        jQuery("html,body").animate({scrollTop:$('#member2').offset().top},1000); 
    }); 
  $("#m3").click(function(){ 
        jQuery("html,body").animate({scrollTop:$('#member3').offset().top},1000); 
    }); 
  $("#m4").click(function(){ 
        jQuery("html,body").animate({scrollTop:$('#member4').offset().top},1000); 
    }); 
});