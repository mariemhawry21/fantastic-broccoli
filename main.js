let arrows=document.querySelectorAll(".arr");
let hs=document.querySelectorAll("h2");
let ps=document.querySelectorAll("p");
for(let i=0;i<arrows.length;i++){
    arrows[i].onclick=function(){
        if(arrows[i].classList.contains("clicked")){
            arrows[i].classList.remove("clicked");
            hs[i].style.color="hsl(240, 6%, 50%)";
            ps[i].style.display="none";
        }else {
            for(let x=0;x<arrows.length;x++){
                if(arrows[x].classList.contains("clicked")){
                    arrows[x].classList.remove("clicked");
                    hs[x].style.color="hsl(240, 6%, 50%)";
                    ps[x].style.display="none";
            }
        }
            ps[i].style.display="block";
            hs[i].style.color="black";
            arrows[i].classList.add("clicked");
        }
    }
}

