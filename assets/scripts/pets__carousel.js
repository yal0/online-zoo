let pets=[
    {
        "name": "giant Pandas",
        "native": "Native to Southwest China",
        "img": "../../assets/images/pet-1.png",
        "predator": false
    },
    {
        "name": "Eagles",
        "native": "Native to South America",
        "img": "../../assets/images/pet-2.png",
        "predator": true
    },
    {
        "name": "Gorillas",
        "native": "Native to Congo",
        "img": "../../assets/images/pet-3.png",
        "predator": false
    },
    {
        "name": "Two-toed Sloth",
        "native": "Mesoamerica, South America",
        "img": "../../assets/images/pet-4.png",
        "predator": false
    },
    {
        "name": "cheetahs",
        "native": "Native to Africa",
        "img": "../../assets/images/pet-5.png",
        "predator": true
    },
    {
        "name": "Penguins",
        "native": "Native to Antarctica",
        "img": "../../assets/images/pet-6.png",
        "predator": true
    },
    {
        "name": "Alligators",
        "native": "Native to Southeastern U. S.",
        "img": "../../assets/images/pet-7.png",
        "predator": true
    },
    {
        "name": "Gorillas",
        "native": "Native to Congo",
        "img": "../../assets/images/pet-8.png",
        "predator": false
    },
    {
        "name": "Polar bear",
        "native": "Native to North Pole",
        "img": "../../assets/images/pet-9.png",
        "predator": true
    },
    {
        "name": "capybara",
        "native": "Native to South America",
        "img": "../../assets/images/pet-10.png",
        "predator": false
    }
]

const carousel=document.querySelector('.pets__carousel_inner');
const btnLEFT=document.querySelector('#btn_left');
const btnRIGHT=document.querySelector('#btn_right');

const boxLeft = document.querySelector('#pets-left');
const boxCenter = document.querySelector('#pets');
const boxRight = document.querySelector('#pets-right');

btnLEFT.addEventListener("click", moveLeft);
btnRIGHT.addEventListener("click", moveRight);

changeCards(boxRight);
changeCards(boxLeft);

carousel.addEventListener('animationend', (animationEvent) => {
	if (animationEvent.animationName === 'move-left') {
		carousel.classList.remove('transition-left')
        boxCenter.innerHTML = boxRight.innerHTML;
        changeCards(boxRight);
	} else {
		carousel.classList.remove('transition-right')
        boxCenter.innerHTML = boxLeft.innerHTML;
        changeCards(boxLeft);
	}
        //вернуть обработчики событий
		btnLEFT.addEventListener("click", moveLeft);
        btnRIGHT.addEventListener("click", moveRight);
})

function moveLeft() {
	carousel.classList.add('transition-left');
	btnLEFT.removeEventListener('click', moveLeft);
	btnRIGHT.removeEventListener('click', moveRight);
}

function moveRight() {
	carousel.classList.add('transition-right');
	btnLEFT.removeEventListener('click', moveLeft);
	btnRIGHT.removeEventListener('click', moveRight);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function changeCards(target){  
    shuffle(pets);
    for(let i=0; i<6; i++)
    {
        target.children[i].children[0].src = pets[i].img;
        let description = target.children[i].children[1];
        if(pets[i].predator)
        {
            description.children[0].classList  = "pets__icon_meat";
            description.children[0].src  = "../../assets/images/meat-fish_icon.svg";
        }
        else
        {
            description.children[0].classList  = "pets__icon_banana";
            description.children[0].src  = "../../assets/images/banana-bamboo_icon.svg";
        }
        description.children[1].innerHTML = pets[i].name;
        description.children[2].innerHTML = pets[i].native;
    }
 }
