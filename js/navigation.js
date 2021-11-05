var time =0;
function navigate(){
    time++;
    var a1=document.getElementsByClassName('nav_links');
    for(var i=0;i<a1.length;i++){
        if(time%2==1){
            a1[i].style.opacity="100%";
        }else{
            a1[i].style.opacity="0%";
        }
    }
                
}