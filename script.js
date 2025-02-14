import { capacetes } from "./capacetes.js";
import { escudos } from "./escudos.js";


const tbodyitens = document.getElementById('tbody-itens')
const btnCapacetes = document.getElementById('btn-capacetes')
const btnEscudos = document.getElementById('btn-escudos')

capacetes.forEach((element, index) => {
   tbodyitens.innerHTML += `
      <tr> 
         <td><img src="${element.imagem}" alt="Not found"></td>
         <td>${element.nome}</td>
         <td>${element.defesa}</td>
      </tr>
      `
})



btnEscudos.addEventListener('click', () => {
   tbodyitens.innerHTML = ""

   escudos.forEach((element,index) => {
      tbodyitens.innerHTML += `
      <tr> 
         <td><img src="${element.imagem}" alt="Not found"></td>
         <td>${element.nome}</td>
         <td>${element.defesa}</td>
         <td>${element.ataque}</td>
      </tr>
      `
   })
})


btnCapacetes.addEventListener('click', () => {
   tbodyitens.innerHTML = ""

   capacetes.forEach((element,index) => {
      tbodyitens.innerHTML += `
       <tr> 
         <td><img src="${element.imagem}" alt="Not found"></td>
         <td>${element.nome}</td>
         <td>${element.defesa}</td>
      </tr>
      `
   })
})