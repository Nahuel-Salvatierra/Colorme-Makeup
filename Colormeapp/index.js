const express = require('express');
const cors = require('cors')
const port = 3131;

app = express();
app.use(express.urlencoded({
        extended:true
    })
)
app.use(express.json({
        type:"*/*"
    })
)
app.use(cors());

app.get('/',(req, res)=>{
const id = process.env.ID;
const token = process.env.TOKEN;DD


const data ={}
const url = `https://graph.instagram.com/${id}/media?fields=thumbnail_url,media_url,caption,permalink&limit80&access_token=${token}`

res.send(fetch(url)
.then(res=>res.json())
.catch(err=>console.log(err)))
    
})

app.listen(port, ()=> {
    console.log('Escuchando en el puerto: ', port)
})
