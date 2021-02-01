async function getContent() {
    try {
       const response = await fetch('http://localhost:8009');
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
    output += `<p>${user.name}</p>`;
   }

   const main = document.getElementById('#getContent');
   main.innerHTML = output;
}