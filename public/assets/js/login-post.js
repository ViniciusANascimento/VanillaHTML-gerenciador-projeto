
const buttonLogin = document.getElementById('btn-login');


// buttonLogin.addEventListener('click', async => {
//   try{
//     const response = fetch(urlLogin,{
//       method: 'post',
//       body:{
//         "id": 0,
//         "email": "adm@adm01.com",
//         "password": "admin01"
//       }
//     }).then(dataResponse => console.log(dataResponse))
//   }catch(err){
//     console.error(`Erro: ${err}`);
//   }
// });
const urlLogin = 'https://trilhafullstackjr-jun15-production-04db.up.railway.app/auth/'
fetch(urlLogin,{
  method:'POST',
  headers: {
    'Content-Type':'application/json'
  },
  body:{
    "email": "adm@adm01.com",
    "password": "admin01"
  }
}).then(dataResponse => console.log(dataResponse))
