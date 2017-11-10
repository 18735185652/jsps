var list=document.querySelectorAll(".bigbox .zhibobox .zhibo-cover .zhibolist li")
var biglive=document.querySelectorAll(".bigbox .zhibobox .zhibo-left .zhibo-banner li")
var zhibonext=document.querySelector(".zhibobox .zhibo-left .zhibo-cover .zhibo-next")
var zhiboprev=document.querySelector(".zhibobox .zhibo-left .zhibo-cover .zhibo-prev")
var oul=document.querySelector(".zhibobox .zhibo-left .zhibo-cover .zhibolist")
var mask=document.querySelectorAll(".bigbox .zhibobox .zhibo-cover .zhibolist li .mask")



console.log(mask)
// console.log(zhibinext)
list.forEach(function(ele,index){
    ele.onmouseover=function(){
        for(var i=0;i<list.length;i++){
            list[i].classList.remove("active");
            biglive[i].classList.remove("active");
            mask[i].style.display="none"
        }
        this.classList.add("active");
        biglive[index].classList.add("active");
        mask[index].style.display="block";
    }
})



        zhibonext.onclick=function(){
            oul.style.marginLeft="-488"+"px"
            zhibonext.style.display="none"
            zhiboprev.style.display="block"
        }

        zhiboprev.onclick=function(){
            oul.style.marginLeft="0"+"px"
            zhiboprev.style.display="none"
            zhibonext.style.display="block"
        }

