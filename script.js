import { armaduras } from "./armaduras.js";
import { capacetes } from "./capacetes.js";
import { escudos } from "./escudos.js";
import { espadas } from "./espadas.js";
import { machados } from "./machados.js";


const tbodyitens = document.getElementById('tbody-itens')
const btnCapacetes = document.getElementById('btn-capacetes')
const btnEscudos = document.getElementById('btn-escudos')
const btnEspadas = document.getElementById('btn-espadas')
const btnArmaduras = document.getElementById('btn-armaduras')
const btnMachados = document.getElementById('btn-machados')

capacetes.forEach((element, index) => {
   tbodyitens.innerHTML += `
      <tr> 
         <td><img src="${element.imagem}" alt="Not found"></td>
         <td>${element.nome}</td>
         <td>${element.defesa}</td>
         <td> 0 </td>
      </tr>
      `
})



btnEscudos.addEventListener('click', () => {
   tbodyitens.innerHTML = ""

   escudos.forEach((element, index) => {
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

   capacetes.forEach((element, index) => {
      tbodyitens.innerHTML += `
       <tr> 
         <td><img src="${element.imagem}" alt="Not found"></td>
         <td>${element.nome}</td>
         <td>${element.defesa}</td>
         <td> 0 </td>
         
      </tr>
      `
   })
})

btnEspadas.addEventListener('click', () => {
   tbodyitens.innerHTML = ""

   espadas.forEach((element, index) => {
      tbodyitens.innerHTML += `
      <tr> 
         <td><img src="${element.img}" alt="Not found"></td>
         <td>${element.nome}</td>
         <td> 0 </td>
         <td>${element.ataque}</td>
      </tr>
      `
   })
})

btnArmaduras.addEventListener('click', () => {
   tbodyitens.innerHTML = ""

   armaduras.forEach((element, index) => {
      tbodyitens.innerHTML += `
      <tr> 
         <td><img src="${element.imagem}" alt="Not found"></td>
         <td>${element.nome}</td>
         <td>${element.defesa}</td>
         <td> 0 </td>
      </tr>
      `
   })
})

btnMachados.addEventListener('click', () => {
tbodyitens.innerHTML = ""

machados.forEach((element, index) => {
   tbodyitens.innerHTML += `
   <tr> 
      <td><img src="${element.img}" alt="Not found"></td>
      <td>${element.nome}</td>
      <td> 0 </td>
      <td>${element.ataque}</td>
   </tr>
   `
})
})
