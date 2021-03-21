import 'dotenv/config';

async function getContent() {
    try {
       const response = await fetch(process.env.PORT);
       const data = await response.json();
    
       show(data);
        
    } catch (error) {
        console.log(error);   
    }
}
getContent();

function show(users)  {
   let output = '';

   for (let user of users) {
    output += `
    <p>${user.id}</p>\n
    <p>${user.type}</p>\n
    <p>${user.oponents.classification}</p>`;
   }

   const main = document.getElementById('#getContent');
   main.innerHTML = output;
}