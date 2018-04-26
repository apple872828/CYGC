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
		if(document.getElementById("menu_trigger").checked==false){
		a1.className='first2 bar';
		a2.className='second2 bar';
		a3.className='third2';
		a4.className='m-icon2';
    all.style.opacity="0";
		setTimeout(function(){
      a5.style.opacity="1";
      a5.className='menu';
      a5.style.zindex="1" ;
      cho.style.left="60px";
      img1.style.left="16%";
      s1.style.left="20%";
      s2.style.left="60%";
        }, 2000);
   
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
    pic.style.paddingRight="10%";
      setTimeout(function(){ 
    a5.className='menu2';
    a5.style.zindex="-1" ;
    all.style.opacity="1";
    }, 2000);
		}
		}
window.onload=menu_c;
function menu_c(){
  var a1 =document.getElementById("menu");
  a1.className='menu2';
}