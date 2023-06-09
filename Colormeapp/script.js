
require('dotenv')
const id = process.env.ID;
const token = process.env.TOKEN;

// GET https://graph.instagram.com/{api-version}/{user-id}
//   ?fields={fields}
//   &access_token={access-token}

const data ={}
const url = `https://graph.instagram.com/${id}?fields=thumbnail_url,media_url,caption,permalink&limit80&access_token=${token}`

fetch(url, {method:'Get'})
.then(res=>{console.log(res);res.json()})
.then(datajson => data = datajson)
.catch(err=>console.log(err))








