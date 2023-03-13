//respo menu
const toggleButton = document.querySelector('.toggle-button');
const navList = document.querySelector('.nav-list');

const addClasses = (target, clss) => {
    document.querySelector(`${target}`).classList.toggle(`${clss}`);    
}

if (window.innerWidth <= 768) {
    //nav - bar&toggle button invoke
    toggleButton.addEventListener('click', () => addClasses('.toggle-button', 'open'));
    toggleButton.addEventListener('click', () => addClasses('.nav-list', 'active'));

    navList.addEventListener('click', () => removeClasses('.toggle-button', 'open'));
    navList.addEventListener('click', () => removeClasses('.nav-list', 'active'));

    //services show class function invoke
    // servicesMenu.forEach(service => service.addEventListener("touchstart", () => showService()));
    showService();
} 


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