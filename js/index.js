function change(){
		var a1 =document.getElementById("first");
		var a2 =document.getElementById("second");
		var a3 =document.getElementById("third");
		var a4 =document.getElementById("m-icon");
		var a5 =document.getElementById("menu");
  var a6 =document.getElementById("left");
  var b0
  =document.getElementById("b0");
   var b1
  =document.getElementById("b1");
  var link
  =document.getElementById("link");
  var icon1
  =document.getElementById("icon1");
  var cho
  =document.getElementById("cho");
		if(document.getElementById("menu_trigger").checked==false){
		a1.className='first2 bar';
		a2.className='second2 bar';
		a3.className='third2';
		a4.className='m-icon2';
      setTimeout(function(){
      a5.style.opacity="1";
      a5.className='menu';
      a5.style.zindex="1" ;
      cho.style.left="60px";
        }, 2000);
     setTimeout(function(){  
                         }, 2500);
    // a6.className='left2';
    b0.style.opacity="0";
    b1.style.opacity="0";
    link.style.opacity="0";
		}
		if(document.getElementById("menu_trigger").checked){
		a1.className='first bar';
		a2.className='second bar';
		a3.className='third bar';
		a4.className='m-icon';
		a5.style.opacity="0";
    cho.style.left="20px";
    setTimeout(function(){ 
    b0.style.opacity="1";
    b1.style.opacity="1";
    link.style.opacity="1";
    a5.className='menu2';
    a5.style.zindex="-1" ;
    }, 2000);
		}
		}
window.onload=menu_c;
function menu_c(){
  var a1 =document.getElementById("menu");
  a1.className='menu2';
}
$(document).ready(function() { 
  $("#img1").css("opacity","1");
  $("#img1").css("top","0px");
  $(".slogan1").css("opacity","1");
  $(".slogan1").css("top","80%");
  $(".slogan2").css("opacity","1");
  $(".slogan2").css("top","88%");
  $(".b0").css("opacity","1");
  $(".b0").css("left","0px");
  $(".b1").css("opacity","1");
  $(".b1").css("left","0px");
  $(".link").css("opacity","1");
 });

// $(document).ready(function(){
//   $("#m-icon").click(function(){
//     $(".pic").fadeout();
//       });
//   });