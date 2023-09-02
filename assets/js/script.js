// scrivo una funzione dove, se clicco sulla lente di ingrandimento, la lente sparisce e appare l'input box
// quando clicco altrove, riappare la lente d'ingrandimento e sparisce l'input box

const icon = document.querySelector('.bi-search');
const input = document.querySelector('#input');


icon.addEventListener('click', () => {
    icon.style.display = 'none';
    input.style.display = 'block';
    input.focus();
});

input.addEventListener('blur', () => {
    if(input.value === '') {
        icon.style.display = 'block';
        input.style.display = 'none';
    }
});

// scrivo una funzione dove, allo scroll della pagina, fa apparire il carorello successivo
const sections = document.querySelectorAll(".scroll-section");

function checkScroll(){
    const windowHeight = window.innerHeight;    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        

        if (rect.top <= windowHeight * 0.9){
            section.classList.add("visible");
        } else{
            section.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

checkScroll();