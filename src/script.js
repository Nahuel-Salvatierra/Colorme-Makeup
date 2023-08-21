const cosplay = document.getElementById('cosplay');

cosplay.addEventListener('click', ()=> {
    window.location.href = "./pages/cosplay.html";
})

const maquillaje = document.getElementById('maquillaje'); 
maquillaje.addEventListener('click',()=> {
    window.location.href = "./pages/maquillaje.html";
})

const collapseRead = document.getElementById('collapse-read')
const asdf = collapseRead.getAttribute('aria-expanded')
collapseRead.addEventListener('click', ()=>{
    if (collapseRead.classList.contains('collapsed')) {
        collapseRead.classList.remove("flip-horizontal-top");
        collapseRead.classList.add("flip-horizontal-bottom");
        collapseRead.firstChild.textContent = 'Mostrar más'

    } else {
        collapseRead.classList.remove("flip-horizontal-bottom");
        collapseRead.classList.add("flip-horizontal-top");
        collapseRead.firstChild.textContent = 'Mostrar menos'
    }
})


