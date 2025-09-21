const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

const films = [
    {
        id: 0,
        title: 'Пандорум',
        original: 'Pandorum 2009',
        category: 'ужасы, фантастика, боевик, триллер, детектив',
        rating: '7.1',
        link: './film_pandorum.html',
        Image: './images/pandorum.jpg'
    },
    {
        id: 1,
        title: 'Гравитация',
        original: 'Gravity 2013',
        category: 'фантастика, триллер, драма',
        rating: '7.5',
        link: './film_gravity.html',
        Image: './images/gravitaciya.jpg'
    },
    {
        id: 2,
        title: 'Пекло',
        original: 'Sunshine 2007',
        category: 'фантастика, триллер',
        rating: '7.3',
        link: './film_sunshine.html',
        Image: '../images/peklo.jpg'
    },
    {
        id: 3,
        title: 'Прометей',
        original: 'Prometheus 2012',
        category: 'фантастика, ужасы',
        rating: '7.0',
        link: './film_prometheus.html',
        Image: './images/prometei.jpg'
    },
    {
        id: 4,
        title: 'К звёздам',
        original: 'Ad Astra 2019',
        category: 'фантастика, триллер, драма, детектив, приключения',
        rating: '6.4',
        link: './film_ad_astra.html',
        Image: './images/k_zvezdam.jpg'
    },
    {
        id: 5,
        title: 'Сквозь горизонт',
        original: 'Event Horizon 1997',
        category: 'ужасы, фантастика, триллер, детектив',
        rating: '6.9',
        link: './film_event_horizon .html',
        Image: './images/skvoz_gorizont.jpg'
    }
]

const render = (array) => {
    cardWrapper.innerHTML = ''

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href ="${item.link}" class= "content-cards__item" >
                <div class="content-cards__item--img">
                    <img src="${item.Image}" alt="pandorum">
                </div>
                <div class="content-cards__item--title">
                    <h5>${item.title},</h5>
                    <span>${item.original}</span>
                </div>
                <p class="content-cards__item--description">
                    ${item.category}
                </p>
                <p class="content-cards__item--rating">
                    ${item.rating}
                </p>
            </a>
        `)
    })
}

//searchInput.addEventListener('input', () => {
//    console.log('input');
//})

searchButton.addEventListener('click', () => {
    render(films.filter((item) => item.title.includes(searchInput.value)))
})

render(films)