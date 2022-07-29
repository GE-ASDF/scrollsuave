
        let a = Array.from(document.querySelectorAll(`a[href]`))
        

        function isNotToTop(to){
            let alvo = document.querySelector(`#${to}`)
            toTarget(alvo);
        }

        function isToTop(to){
            let actualElement = to.pageY;
            toTop(actualElement);
        }

        function toTarget(to){
            for(let i = 0; i < to.offsetTop; i++){
                setTimeout(() => {
                    window.scroll({
                        top: i
                    })
                }, i * 0.4);
            }
        }

        function toTop(to){
            for(let i = to; i >=0; i--){
                setTimeout(()=>{
                    window.scroll({
                        top: to - i
                    })
                }, i * 0.4)
            }
        }

        function getAttributeTarget(alvo, e){
            let link = alvo.getAttribute("data-target");
            return link;
        }

        function whichTarget(link, e){
            if(link == "toTop"){
                isToTop(e)
            }else{
                isNotToTop(link);
            }
        }

        function initScroll(alvo, e){
            e.preventDefault();
            whichTarget(getAttributeTarget(alvo), e);
        }

        a.forEach(i=>{
            i.addEventListener("click", function(e){
                initScroll(i, e)
            })
        })