'use strict'
const galery = document.querySelector('.galery');
const feed = docuement.querySelector('.contenedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const token = process.env.TOKEN
const url = `https://graph.instagram.com/{user-id}?fields=id,username&access_token={access-token}`

fetch(url)
.then(res=>res.json())
.then(datajson => crearHTML(datajson.data))

function crearHTML(data) {
    for( const img of data) {
        galery.innerHTML+= `  <!-- <div class="image overflow">
        <img loading="lazy" src="${img.media_url}" alt="">
        <div class="opacity-hover">
            <a href="${img.permalink}" class="caption">
                <p>${img.caption.slice(0,100)}</p>
            </a>
        </div>
    </div> -->`
    }
}
