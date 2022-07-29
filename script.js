let h1 = document.querySelector("h1")
    let h2 = document.querySelector("h2")
    let vemPraCa = document.querySelector("#vemPraCa");
    let a = Array.from(document.querySelectorAll("a[href='#']"));

    function isNotToTop(to){
        let vemPraCa = document.querySelector(`#${to}`);
        toTarget(vemPraCa);
    }

    function isToTop(to){
        let actualElement = to.path[1].offsetTop;
        toTop(actualElement);
    }

    function toTop(to){
        for(let i = to; i >= 0;i--){
            setTimeout(() => {
            window.scroll({
                top: to - i
            })
        }, i * 0.4);
    }
    }

    function toTarget(to){
    for(let i = 0; i < to.offsetTop;i++){
        setTimeout(() => {
            window.scroll({
                top: i
            })
        }, i * 0.4);
    }
    }
    
    function getAttributeTarget(target){
        let link = target.getAttribute("data-target");
        return link;
    }

    function whichTarget(link, e){
        if(link == "toTop"){
            isToTop(e);
        }else{
            isNotToTop(link);
        }
    }

    function initScroll(alvo, e){
        e.preventDefault();
        whichTarget(getAttributeTarget(alvo), e)
    }

    a.forEach(j=>{
        j.addEventListener("click", function(e){
        initScroll(j, e)         
    })
    })