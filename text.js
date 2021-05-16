var texts = document.querySelectorAll('u.wavy'), i;



for (i = 0; i < texts.length; ++i){

    const text = texts[i];

    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for (let i = 0; i < splitText.length; i++){
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    
    text.addEventListener("mouseenter", function bounce(){
        let char = 0;
        let timer = setInterval(onTick, 50);

        function onTick(){
            const span = text.querySelectorAll('span')[char];
            span.classList.add('bounce');
            char++
            if(char === splitText.length){
                complete();
                return;
            }
        }

        function complete(){
            clearInterval(timer);
            timer = null;
        }
    });

    text.addEventListener("animationend", function stopbounce(){
        let char = 0;
        let timer = setInterval(onTick2, 50);

        function onTick2(){
            const span = text.querySelectorAll('span')[char];
            span.classList.remove('bounce');
            char++
            if(char === splitText.length){
                complete2();
                return;
            }
        }

        function complete2(){
            clearInterval(timer);
            timer = null;
        }
    });
}

