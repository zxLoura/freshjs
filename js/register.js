/*
* @Author: ZX
* @Date:   2018-09-09 22:05:47
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-14 01:25:47
*/
window.onload=function(){

	let input=document.querySelectorAll("input");
	let discover=document.querySelectorAll(".discover");
	let user=document.querySelectorAll(".user");
	let button=document.querySelectorAll("button")
	console.log(input,discover,user,button);


	input[0].onblur=function(){
        if(input[0].value=="123456"){
		discover[0].style.display="block";
		}else{
        	user[0].style.display="block";		
		}
	}
	input[2].onblur=function(){
        if(input[2].value=="123456"){
		discover[1].style.display="block";
		button[2].style.background="#fbbc15";
		}else{
        	user[1].style.display="block";		
		}
	}
	button[2].onclick=function(){
		if(input[0].value=="123456"  &&  input[1].value=="123456" && input[2].value=="123456"){
			button[2].style.background="#fbbc15";
			discover[0].style.display="block";
			discover[1].style.display="block";
			window.open("enter.html");
			// var a=document.createElement("a");
			// a.setAttribute("hrfe",'../enter.html');
		} else if(input[0].value!="123456" || input[0].value==""){
        	user[0].style.display="block";
        }else if(input[0].value=="123456" && input[1].value=="123456" && input[2].value!="123456" || input[2].value!=""){
        	user[1].style.display="block";
        }

	}

	button[0].onclick=function(){
		window.open("enter.html");
	}


}