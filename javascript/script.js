//scrollbar
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

//observer
const cards = document.querySelectorAll('.scroll-section');
const job = document.querySelector('.main-job');
const mainContent = document.querySelector('.main-content');
const menuList = Array.from(document.querySelectorAll('.nav-list-a'));

console.log(menuList.filter(a => a.id === "menu-about")[0]);


// const observer = new IntersectionObserver (
//     function (sections) {
        
//         for (let i = 0; i < sections.length; i++) {
//                 const section = sections[i];
//                 section.target.classList.toggle('random', section.isIntersecting);
                
//                 if (section.classList == "random" && menuList.filter(a => a.id === "menu-main")[0]) {
//                     menuList.filter(a => a.id === "menu-main")[0].classList.toggle("show-section");
//                 }
                
//                 if (section.classList == "random" && menuList.filter(a => a.id === "menu-about")[0]) {
//                     menuList.filter(a => a.id === "menu-about")[0].classList.toggle("show-section");
//                 }
//             }
            
//             }, {
//             threshold: 0.5
//         })

// console.log(menuList.filter(a => a.id === "menu-about")[0]);


// const observer = new IntersectionObserver(
//     function (sections) {
//         console.log(job)

//         sections.forEach(section => {

//             // TOGGLE SHOW SECTION CLASS

//             section.target.classList.toggle('show-section', section.isIntersecting);

//             const isActive = section.target.classList.value.indexOf("show-section") > 0; 
            

//             if (isActive && section.target.id === "main") {
//                 menuList.filter(a => a.id === "menu-main")[0].classList.add("show-section");
//             } 
//             if (isActive && section.target.id === 'about') {
//                 menuList.filter(a => a.id === "menu-about")[0].classList.add("show-section");
//                 menuList.filter(a => a.id === "menu-main")[0].classList.remove("show-section");
//             } else {
//                 menuList.filter(a => a.id === "menu-about")[0].classList.remove("show-section");
//             }
//             if (isActive && section.target.id === "services") {
//                 menuList.filter(a => a.id === "menu-services")[0].classList.add("show-section");
//             } else {
//                 menuList.filter(a => a.id === "menu-services")[0].classList.remove("show-section");
//             }
//             if (isActive && section.target.id === "portfolio") {
//                 menuList.filter(a => a.id === "menu-portfolio")[0].classList.add("show-section");
//             } else {
//                 menuList.filter(a => a.id === "menu-portfolio")[0].classList.remove("show-section");
//             }
//             if (isActive && section.target.id === "contact") {
//                 menuList.filter(a => a.id === "menu-contact")[0].classList.add("show-section");
//                 job.classList.toggle('show-job');
//             } else {
//                 menuList.filter(a => a.id === "menu-contact")[0].classList.remove("show-section");
//             }

//             // if (section.target.id === 'services') {
//             //     menuList.forEach (services => {
//             //         if (services.id === 'menu-services') services.classList.toggle('show-section')
//             //     })
//             // }

//             // if (section.target.id === 'portfolio') {
//             //     menuList.forEach (portfolio => {
//             //         if (portfolio.id === 'menu-portfolio') portfolio.classList.toggle('show-section')
//             //     })
//             // }

//             // if (section.target.id === 'contact') {
//             //     job.classList.toggle('show-job')

//             //     menuList.forEach(contact => {
//             //         if (contact.id === 'menu-contact') contact.classList.toggle('show-section')
//             //     })
//             // }
            
//             //HA OBSERV NEM INTERSECT RAJTA MARAD A CLASS

//             // if (section.isIntersecting) {observer.unobserve(section.target)}
//             // 
//         })
//     },
//     {
//         // root: null,
//         // rootMargin: "50px",
//         threshold: 0.5
//     }
// )

// cards.forEach(card =>{
//     observer.observe(card)
// })

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







