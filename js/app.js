const container = document.querySelector("#result");
const ul = document.createElement("ul");
const li = document.createElement("li");

function generateNumbers() {
  if (!document.getElementById("result")) {
    console.warn("A #result doboz nem letezik!");
  }

  for (let i = 1; i < 11; i++) {
    const li = document.createElement("li");

    let randomNumber = Math.floor(Math.random() * 41) + 5;

    //console.log(randomNumber)

    li.appendChild(document.createTextNode(randomNumber));

    ul.appendChild(li);
  }

  container.appendChild(ul);
}

//generateNumbers()
function detectNumbers(id) {
    //eloszor felreertettem 

    let doboz = document.getElementById(id);
    if (!doboz) {
      return false;
    } 
  
    const numbers = [];
    const lis = document.querySelectorAll("li");
    for (let i = 0; i < lis.length; i++) {
      numbers.push(lis[i].innerHTML);
      console.log(numbers)
    }
    
    return numbers;
}

function getEvenNums(array) {
  const evenNums = [];

  if (detectNumbers() == false) {
    console.log("a detectNumbers eredmenye false volt");
  } else
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        evenNums.push(array[i]);
      }
    }

  console.log(`even nums: ${evenNums}`);
  return evenNums;
}

getEvenNums(detectNumbers())