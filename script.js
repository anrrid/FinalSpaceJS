const app = document.getElementById("root");
const logo = document.createElement('img');
logo.src = 'img/logo.png'

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

let request = new XMLHttpRequest()

request.open('GET', 'https://finalspaceapi.com/api/v0/episode/', true)

request.onload = function () {

    let data = JSON.parse(this.response)

    data.forEach(episode => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.innerText = episode.name;
        card.appendChild(h1)

        const img = document.createElement('img');
        img.src = episode.img_url;
        card.appendChild(img);

        container.appendChild(card)

    });
}

request.send()