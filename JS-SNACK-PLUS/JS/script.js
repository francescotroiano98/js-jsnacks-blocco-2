const ulElement = document.querySelector("ul");

function createUlelement() {

  let newListElement = document.createElement("li");

  newListElement.innerHTML = "CIAOOOOO";

  ulElement.appendChild(newListElement);

  return newListElement;

}

for (let i = 0; i < 10; i++) {
    
  let liElement = createUlelement();

  liElement.addEventListener("click", function(){

    liElement.classList.toggle("owned");

  });

}
  