document.querySelector("form").onsubmit= function(){
    return false;
}

let title = document.getElementById("title").value;
let description = document.getElementById("description").value;
let url = document.getElementById("url").value;
let content = document.querySelector(".content");
let nome = document.querySelector(".nome");
document.getElementById("submit").addEventListener("click",
    function(){
        nome.innerHTML += title;    
    }
);

// function criarCard() {
//     Title = document.getElementById("Title").value;
//     let cardSection = document.getElementsById("card");
//     cardSection.ineerHTML += `<div><h3>${Title}</h3></div>`;
// }