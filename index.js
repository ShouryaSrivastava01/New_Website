console.log("index.js")
// ced2f253d6fd46c78d3b5dd59aa8791b
let apiKey = `4s3UXI2qUZKzF2ahxMi1Va9r13VW4Bkc3KPdCoUPQN4iaIv5ULZwnxtkBLXu`;

let newsAccordion = document.getElementById('newsAccordion');





const xhr = new XMLHttpRequest();

xhr.open('GET', `https://gnewsapi.net/api/search?q=covid-19&language=en&country=in&api_token=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let news='';
        let article = json.articles;
        article.forEach((i, index) => {
           news += `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed show" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        ${i.title}
                        </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                        <div class="accordion-body">
                            ${i.description} .<a href="${i.article_url}" target="_blank" >Read more...</a>
                        </div>
                        </div>`
            console.log(i);
        })

        newsAccordion.innerHTML=news;

    }
    else {
        console.log("fucking error has occured");
    }
}

xhr.send();

// 4s3UXI2qUZKzF2ahxMi1Va9r13VW4Bkc3KPdCoUPQN4iaIv5ULZwnxtkBLXu