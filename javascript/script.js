const text = document.querySelector('.cir-text p');
text.innerHTML = text.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 18}deg)">${char}</span>`
).join("")


function addElement() {
   
   const dottedContainer = document.querySelector('.dotted-background'); 

   const boxDiv = document.createElement('div');
   boxDiv.classList.add('row');

   dottedContainer.appendChild(boxDiv);

    for (let i = 0; i < 8; i++) {
        const boxSpan = document.createElement('span');
        boxDiv.appendChild(boxSpan);
    }
}

for (let i = 0; i < 25; i++) {
    addElement();
}