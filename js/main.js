const container = document.querySelector('article.content');
const links = document.querySelectorAll('.main .buttons button');
let url = 'partials/home.html';

function loadContent(url)
{
    fetch(url).then(function (response) 
                    {

        return response.text();

    }).then(function (dt) 
            {

        container.innerHTML = dt;

    });
}

loadContent(url);

function selectContent(eme)
{
    eme.preventDefault();
    let element = eme.target.value;
    loadContent(element);
}

for 
    (let i = 0; i < links.length; i++) 
{
  links[i].addEventListener("click", selectContent);
}
