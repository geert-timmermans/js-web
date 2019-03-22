//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

var request = new XMLHttpRequest();

request.open('GET', 'https://api.punkapi.com/v2/beers', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400){
        data.forEach(beer =>{

            const card = document.getElementById('row1');

            const cardContainer = document.createElement('div');
            cardContainer.setAttribute('class', 'card m-2 bgc-card');
            cardContainer.setAttribute('style', 'width: 18rem;')

            const logo = document.createElement('img');
            logo.setAttribute('class', 'card-img-top img-size')
            logo.src = beer.image_url;

            const cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');

            const cardTitle = document.createElement('li');
            cardTitle.setAttribute('class', 'list-group-item');
            cardTitle.textContent = 'Name: ' + beer.name;

            const listInfo = document.createElement('ul');
            listInfo.setAttribute('class', 'list-group list-group-flush');

            const infoTagline = document.createElement('li');
            infoTagline.setAttribute('class', 'list-group-item');
            infoTagline.textContent = 'Tagline: ' + beer.tagline;

            const infoYear = document.createElement('li');
            infoYear.setAttribute('class', 'list-group-item');
            infoYear.textContent = 'First Brew: ' + beer.first_brewed;

            card.appendChild(cardContainer);
            cardContainer.appendChild(logo);
            cardContainer.appendChild(cardBody);
            cardContainer.appendChild(listInfo);
            listInfo.appendChild(cardTitle);
            listInfo.appendChild(infoTagline);
            listInfo.appendChild(infoYear);

        })
    } else {
            console.log('error');
        }
}

request.send()