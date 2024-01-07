import dataSets from "../main.json";

const divEl = document.querySelector("#division");
console.log(dataSets);

const sectionEl = document.querySelector("section");

dataSets.forEach((datas)=>{
    sectionEl.innerHTML += 
    `
    <div class="px-5 py-5 mt-10 bg-blue-500 max-w-md items-center flex space-x-10">
    <div class="items-center  flex flex-col" >
      <img src="${datas.profile}" alt="" width="120" height="120" class="rounded-full ">
    </div>
    <div class="font-medium text-sm text-white flex flex-col justify-center">
    <p class="mt-1 font-semibold text-lg text-blue-950">${datas.name.toUpperCase()}</p>
    <P class="text-blue-950">Age : <span class="text-white">${datas.age}</span></P>
    <P class="text-blue-950">Role : <span class="text-white">${datas.role}</span></P>
      <p class="text-blue-950">Member of CDN : <span class="text-white">${datas.isMember}</span></p>
      <p class="text-blue-950">Location : <span class="text-white">${datas.location}</span></p>
      <p class="text-blue-950">Skill : <span class="text-white" >${datas.skillSet.join(" , ")}</span></p>
    
    </div>
     </div>
     `


})



