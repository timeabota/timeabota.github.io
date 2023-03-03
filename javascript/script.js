//scrollcircle
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

//menu class toggler function
const menuClasser = observable => menuList.forEach(menu => menu.id.indexOf(observable.id) > -1 ? menu.classList.add("scale") : menu.classList.remove("scale"));

//observer init
const observer = new IntersectionObserver((sections) => {
    sections.forEach(section => {
        if (section.isIntersecting) {
            section.target.classList.add("show");
            menuClasser(section.target);
        } else {
            section.target.classList.remove("show");
        }
    })
},
{
    threshold: 0.95
});

//observer invoke
sections.forEach(e => observer.observe(e));



