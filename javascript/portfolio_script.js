//splash screen
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo-intro');

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=>{
        
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active-intro');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active-intro');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 1500);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 1800);
    })
})