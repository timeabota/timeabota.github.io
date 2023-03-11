//scroll circle
const text = document.querySelector('.cir-text p');
text.innerHTML = text.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 18}deg)">${char}</span>`
).join("")

//dotted-background
function addElement() {
   
   const dottedContainer = document.querySelector('.dotted-background'); 

   const boxDiv = document.createElement('div');
   boxDiv.classList.add('row');

   dottedContainer.appendChild(boxDiv);

    for (let i = 0; i < 9; i++) {
        const boxSpan = document.createElement('span');
        boxDiv.appendChild(boxSpan);
    }
}

for (let i = 0; i < 26; i++) {
    addElement();
}

//mouse
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
}


let links = Array.from(document.querySelectorAll('a'));

links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('grow');
    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
    })
});

//OBSERVER    <---(    '-.-)
//                 LL  LL

//variables
const menuList = document.querySelectorAll('.nav-list-a');
const sections = document.querySelectorAll('.scroll-section');
const lfp = document.querySelector(".infinite-job");

//menu class toggler function
const menuClasser = observable => menuList.forEach(menu => menu.id.indexOf(observable.id) > -1 ? menu.classList.add("scale") : menu.classList.remove("scale"));

//services show class function
const servicesMenu = document.querySelectorAll('.services-list');
const servicesText = document.querySelectorAll('.services-text > div');

const showService = () => {
    servicesMenu.forEach((_, idx) => {
        const menu = servicesMenu[idx];
        const text = servicesText[idx];
        const pair = [menu,text];

        const classR = () => {
            pair.forEach(e => {
                if (e.classList.contains("show-service")) {
                    e.classList.remove("show-service");
                } else {
                    e.classList.add("show-service");
                }
            });

            servicesMenu.forEach(e => {
                if (e !== menu) e.classList.remove("show-service");
            })
            servicesText.forEach(e => {
                if (e !== text) e.classList.remove("show-service");
            })
        }
        menu.addEventListener("touchstart", () => classR());
    })
}

//observer init
const observer = new IntersectionObserver((sections) => {
    sections.forEach(section => {
        if (section.isIntersecting) {
            section.target.classList.add("show");
            menuClasser(section.target);
            if (section.target.id.indexOf("contact") > -1) {
                lfp.classList.add("show-job");
            }
        } else {
            section.target.classList.remove("show");
            lfp.classList.remove("show-job");
        }
    })
},
{
    threshold: 0.5
});

//observer invoke
sections.forEach(e => observer.observe(e));


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

//navbar remove classes
const removeClasses = (mirol, mit) => {
    document.querySelector(`${mirol}`).classList.remove(`${mit}`);    
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