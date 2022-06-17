

document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.burger-menu-wrapper').classList.toggle('active2')
})
window.addEventListener('click', elementClick => {
    if(elementClick.target.classList[0] === 'burger-menu-wrapper') {
        document.querySelector('.burger').classList.toggle('active');
        document.querySelector('.burger-menu-wrapper').classList.toggle('active2');
        document.styleSheets.overflow = 'hidden'
    }
    if(elementClick.target.classList[0] === 'burger-link') {
        document.querySelector('.burger').classList.toggle('active');
        document.querySelector('.burger-menu-wrapper').classList.toggle('active2')
    }
})

// Данные питомцев:
let pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]

pets.sort(()=>Math.random()-0.5)


let acc = 0
document.querySelectorAll('.slider-image__card').forEach(card => {
    card.children[0].children[0].children[1].children[0].src=pets[acc]['img'];
    card.children[0].children[0].children[1].children[1].children[0].textContent = pets[acc]['name'];
    card.children[0].children[0].children[1].children[1].children[1].textContent = `${pets[acc]['type']} - ${pets[acc]['breed']}`;
    card.children[0].children[0].children[1].children[1].children[2].textContent = pets[acc]['description'];
    card.children[0].children[0].children[1].children[1].children[3].children[0].children[1].textContent = pets[acc]['age'];
    card.children[0].children[0].children[1].children[1].children[3].children[1].children[1].textContent = pets[acc]['inoculations'];
    card.children[0].children[0].children[1].children[1].children[3].children[2].children[1].textContent = pets[acc]['diseases'];
    card.children[0].children[0].children[1].children[1].children[3].children[3].children[1].textContent = pets[acc]['parasites'];
    card.children[1].src = pets[acc]['img'];
    card.children[2].textContent = pets[acc]['name'];
    acc++
})

document.querySelector('.arrow-right').addEventListener('click', ()=> {
    document.querySelectorAll('.slider-image__card').forEach(card => {
        if (acc>=8) {
            acc = 0
        }
        card.children[0].children[0].children[1].children[0].src=pets[acc]['img'];
        card.children[0].children[0].children[1].children[1].children[0].textContent = pets[acc]['name'];
        card.children[0].children[0].children[1].children[1].children[1].textContent = pets[acc]['breed'];
        card.children[0].children[0].children[1].children[1].children[2].textContent = pets[acc]['description'];
        card.children[0].children[0].children[1].children[1].children[3].children[0].children[1].textContent = pets[acc]['age'];
        card.children[0].children[0].children[1].children[1].children[3].children[1].children[1].textContent = pets[acc]['inoculations'];
        card.children[0].children[0].children[1].children[1].children[3].children[2].children[1].textContent = pets[acc]['diseases'];
        card.children[0].children[0].children[1].children[1].children[3].children[3].children[1].textContent = pets[acc]['parasites'];
        card.children[1].src = pets[acc]['img']
        card.children[2].textContent = pets[acc]['name']
        acc++
    })
    
})
document.querySelector('.arrow-left').addEventListener('click', ()=> {   
    document.querySelectorAll('.slider-image__card').forEach(card => {
        if (acc<=0) {
            acc = 7
        }
        card.children[0].children[0].children[1].children[1].children[0].textContent = pets[acc]['name'];
        card.children[0].children[0].children[1].children[1].children[1].textContent = pets[acc]['breed'];
        card.children[0].children[0].children[1].children[1].children[2].textContent = pets[acc]['description'];
        card.children[0].children[0].children[1].children[1].children[3].children[0].children[1].textContent = pets[acc]['age'];
        card.children[0].children[0].children[1].children[1].children[3].children[1].children[1].textContent = pets[acc]['inoculations'];
        card.children[0].children[0].children[1].children[1].children[3].children[2].children[1].textContent = pets[acc]['diseases'];
        card.children[0].children[0].children[1].children[1].children[3].children[3].children[1].textContent = pets[acc]['parasites'];
        card.children[1].src = pets[acc]['img']
        card.children[2].textContent = pets[acc]['name']
        acc--
    })
    
})





window.addEventListener('click', elementClick => {
    if(elementClick.target.classList[0] === 'slider-image__card') {
        elementClick.target.children[0].classList.add('popup-enabled');
        document.body.classList.add('popup-enabled');
    } 
    if (elementClick.target.parentElement.classList[0] === 'slider-image__card') {
        elementClick.target.parentElement.children[0].classList.add('popup-enabled');
        document.body.classList.add('popup-enabled');
    }
    if (elementClick.target.classList[0] === 'popup_wrapper') {
        elementClick.target.classList.remove('popup-enabled');
        document.body.classList.remove('popup-enabled');
    }
    if (elementClick.target.classList[0] === 'popup__close') {
        elementClick.target.parentElement.parentElement.classList.remove('popup-enabled')
        document.body.classList.remove('popup-enabled');
    }
    if (elementClick.target.classList[0] === 'popup-close__wrapper') {
        elementClick.target.parentElement.classList.remove('popup-enabled')
        document.body.classList.remove('popup-enabled');
    }
})
