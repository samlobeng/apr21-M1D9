
window.onload = function() {
  for(let i = 0; i<75; i++){
    //create a cell
    let bingoCells = document.createElement("div");
    bingoCells.classList.add("numbers");
    let cells = document.getElementById("cells");
  
    let numbers = document.createElement("h3");
    numbers.innerText = i+1;
    bingoCells.appendChild(numbers)
    cells.appendChild(bingoCells);

  }

  let bingoText = document.createElement("div");
  bingoText.classList.add("myText");
  let text = document.getElementById("bingoText");
  bingoText.style.color = "red";
  let characters = document.createElement("h2");
  characters.innerText = "B\n\I\nN\nG\nO";
  bingoText.appendChild(characters);
  text.appendChild(bingoText);

  text.style.backgroundColor = "#f0eeeb";

}

let randomize = function() {
  let numbers = document.getElementsByTagName("h3");
  let randomArray = [];
  for(let i = 0; i<75; i++){
    let randomNumbers = Math.floor(Math.random()*75)+1;
   randomArray.push(randomNumbers);
  for(let i =0; i<randomArray.length; i++){
    numbers[i].innerText = randomArray[i];
  }
}
}