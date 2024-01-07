(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=[{profile:"https://avatars.githubusercontent.com/u/107993227?v=4",name:"Kishore",age:25,isMember:!0,location:"Trichy",role:"Developer",skillSet:["frontend","backend","database"]},{profile:"https://th.bing.com/th/id/OIP.-d8GY5axNJZYoXsNOUJ4iwAAAA?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7",name:"Navya",age:23,isMember:!1,location:"Mumbai",role:"Data-Analytics",skillSet:["Python","Machine-learning","Azure"]},{profile:"https://th.bing.com/th/id/OIP.xetN7SHvp311jOFzMXpFZwHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",name:"Ashwin",age:28,isMember:!1,location:"Chennai",role:"Block-chain developer",skillSet:["block-chain","backend","database"]},{profile:"https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?w=199&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",name:"Karthick",age:30,isMember:!1,location:"Coimbatore",role:"Data-Engineer",skillSet:["Python","AWS","oracle"]},{profile:"https://th.bing.com/th/id/OIP.EVCGXvrjsvMrhfOX3su_FgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",name:"Rohan",age:22,isMember:!1,location:"Kochin",role:"Game-developer",skillSet:["C++","Java","database"]},{profile:"https://th.bing.com/th/id/OIP.y-nGyqT5AwES8oqp344z4gHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",name:"Thara Sri",age:20,isMember:!1,location:"Chennai",role:"Software-tester",skillSet:["Java","Automation-test"]}];document.querySelector("#division");console.log(l);const n=document.querySelector("section");l.forEach(o=>{n.innerHTML+=`
    
    <div class="px-5 py-5 mt-10 bg-blue-500 max-w-md items-center flex space-x-10">
    <div class="items-center  flex flex-col" >
      <img src="${o.profile}" alt="" width="120" height="120" class="rounded-full ">
    </div>
    <div class="font-medium text-sm text-white flex flex-col justify-center">
    <p class="mt-1 font-semibold text-lg text-blue-950">${o.name.toUpperCase()}</p>
    <P class="text-blue-950">Age : <span class="text-white">${o.age}</span></P>
    <P class="text-blue-950">Role : <span class="text-white">${o.role}</span></P>
      <p class="text-blue-950">Member of CDN : <span class="text-white">${o.isMember}</span></p>
      <p class="text-blue-950">Location : <span class="text-white">${o.location}</span></p>
      <p class="text-blue-950">Skill : <span class="text-white" >${o.skillSet.join(" , ")}</span></p>
    
    </div>
     </div>`});
