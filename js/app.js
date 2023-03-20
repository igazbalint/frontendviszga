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
  const numbers = [];
  const lis = document.querySelectorAll("li");
  for (let i = 0; i < lis.length; i++) {
    //console.log(lis[i].innerHTML)
    numbers.push(lis[i].innerHTML);
    //console.log(numbers)
  }

  if (numbers.length === 0) {
    return false;
  }

  return numbers;
}
