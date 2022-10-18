//Get The DOM Element.

let container = document.querySelector('#container')

// Array of Object.
let reviews = [{
        img: '/img/user1.png',
        alt: 'Profile pic of Ardan Turan',
        text: 'We learnt so much that we could not comprehend what we ought to do.',
        name: 'Ardan Turan'
    },
    {
        img: '/img/user2.png',
        alt: 'Profile pic of Tomi Yasu',
        text: 'We learnt so much that we could not comprehend what we ought to do.',
        name: 'Tomi Yasu'
    },
    {
        img: '/img/user3.png',
        alt: 'Profile pic of Migi Yagi',
        text: 'We learnt so much that we could not comprehend what we ought to do.',
        name: 'Migi Yagi'
    },
    {
        img: '/img/user4.png',
        alt: 'Profile pic of Kelly Hu',
        text: 'We learnt so much that we could not comprehend what we ought to do.',
        name: 'Kelly Hu'
    },
    {
        img: '/img/user5.png',
        alt: 'Profile pic of Kelly Hu',
        text: 'We learnt so much that we could not comprehend what we ought to do.',
        name: 'Sally Moore'
    },
]

function PopulateDisplay() {
    reviews.forEach(review => {
        let cardElement = document.createElement('div')
        cardElement.classList.add('card')
        //Adding EventListener.
        cardElement.addEventListener('mouseover', showClear)
        cardElement.addEventListener('mouseleave', showBlur)
        //Image Container
        let imageContainer = document.createElement('img')
        imageContainer.classList.add('image-container')
        imageContainer.setAttribute('src', review.img)
        //Text Container
        let textContainer = document.createElement('p')
        textContainer.textContent = review.text
        //Name Container
        let nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name
        //Style Image-Container
        imageContainer.style.height = '90px'
        imageContainer.style.width = '90px'
        imageContainer.style.borderRadius = '45px'
        //Style For Text Container.
        textContainer.style.fontWeight = '100px'
        textContainer.style.fontSize = '12px'
        textContainer.style.color = 'rgb(191,156,206)'
        textContainer.style.marginTop = '15px'
        //Style For Text Container.
        nameContainer.style.marginTop = '20px'
        nameContainer.style.height = '30px'
        nameContainer.style.padding = '5px 0 0'
        nameContainer.style.fontWeight = 'bolder'
        nameContainer.style.backgroundColor = 'rgb(231, 208, 253)'


        cardElement.append(imageContainer, textContainer, nameContainer)


        container.append(cardElement);
    })
}
PopulateDisplay()

//Function For eventListener.
function showClear() {
    this.classList.add('active')
}

function showBlur() {
    this.classList.remove('active')
}