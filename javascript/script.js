const text = document.querySelector('.cir-text p');
text.innerHTML = text.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
).join("")