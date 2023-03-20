const container = document.querySelector('#result')
const ul = document.createElement('ul');
const li = document.createElement('li');

function generateNumbers(){
    
    for (let i = 1; i < 11; i++ ){
        const li = document.createElement('li');

        let randomNumber = Math.floor(Math.random() * 41) + 5;

        console.log(randomNumber)

        li.appendChild(document.createTextNode(randomNumber))

        ul.appendChild(li)
    }

    container.appendChild(ul)
}

generateNumbers()