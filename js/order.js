/*
* @Author: ZX
* @Date:   2018-09-09 15:37:57
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-13 14:22:49
*/
window.onload=function(){
	let add=document.querySelectorAll(".add");
	let reduce=document.querySelectorAll(".reduce");
	let num=document.querySelectorAll(".num_count");
	let footer=document.querySelector("footer");
	let change=document.querySelector(".change");
	let pay1=document.querySelector(".pay1");
	let among=document.querySelector(".among");
	let amongs=document.querySelector(".amongs");
	let mask=document.querySelector(".mask");

	// console.log(among);

		let count=0;

		add[0].onclick=function(){
			reduce[0].style.display="block";
			count++;
			num[0].innerHTML=count;
			num[0].style.display="block";
			footer.style.display=("none");
			change.style.display=("flex");
			among.innerHTML=count*36;

			
			pay1.onclick=function(){
				mask.style.display="block";
				num_pay.innerHTML=count;
				amongs.innerHTML=among.innerHTML;

			}




		}
		reduce[0].onclick=function () {
			count--;
			if(count==0){
                reduce[0].style.display="none";
                num[0].style.display="none";
			}
            num[0].innerHTML=count;
            among.innerHTML=count*36;
            if(count==0){
				footer.style.display=("flex");
				change.style.display=("none");

            }
        }

        


		let add_pay=document.querySelector(".add_pay");
		let reduce_pay=document.querySelector(".reduce_pay");
		let num_pay=document.querySelector(".num_pay");
		console.log(add_pay,reduce_pay,num_pay);

		add_pay.onclick=function(){
			num_pay.innerHTML=++count;
			amongs.innerHTML=count*36;	
		}
		reduce_pay.onclick=function(){
			if(count==1){
				mask.style.display="none";
			}
			num_pay.innerHTML=--count;
			amongs.innerHTML=count*36;	
		}

	
	
}






           

        
    