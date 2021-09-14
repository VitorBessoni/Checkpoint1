
document.querySelector("form").onsubmit= function(){
    return false; }

function criarCard(){
    title= document.getElementById("title").value;    
    let cardSection= document.getElementById("content");
    cardSection.innerHTML+=`<div><h2>${title}</h2></div>`;
    description= document.getElementById("description").value;
    cardSection.innerHTML += `<div><p>${description}</p></div>`;
    url = document.getElementById("url").value;
    cardSection.innerHTML += `<div><img id="imagem" src="${url}"></div>`;
}

function criarCard2(){
    title= document.getElementById("title").value;    
    let cardSection= document.getElementById("content2");
    cardSection.innerHTML+=`<div><h2>${title}</h2></div>`;
    description= document.getElementById("description").value;
    cardSection.innerHTML += `<div><p>${description}</p></div>`;
    url = document.getElementById("url").value;
    cardSection.innerHTML += `<div><img id="imagem" src="${url}"></div>`;
}

function criarCard3(){
    title= document.getElementById("title").value;    
    let cardSection= document.getElementById("content3");
    cardSection.innerHTML+=`<div><h2>${title}</h2></div>`;
    description= document.getElementById("description").value;
    cardSection.innerHTML += `<div><p>${description}</p></div>`;
    url = document.getElementById("url").value;
    cardSection.innerHTML += `<div><img id="imagem" src="${url}"></div>`;
}








// document.querySelector("form").onsubmit= function(){
//     return false;
// }

// let title = document.getElementById("title").value;
// let description = document.getElementById("description").value;
// let url = document.getElementById("url").value;
// let content = document.querySelector(".content");
// let nome = document.querySelector(".nome");
// document.getElementById("submit").addEventListener("click",
//     function(){
//         nome.innerHTML += title;    
//     }
// );

// function criarCard() {
//     Title = document.getElementById("Title").value;
//     let cardSection = document.getElementsById("card");
//     cardSection.ineerHTML += `<div><h3>${Title}</h3></div>`;
// }