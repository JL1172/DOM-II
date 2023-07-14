import './less/index.less'

// Your code goes here!
const body = document.querySelector('body');
const img = document.querySelector('header img');
console.log(img)
const footer = document.querySelector('.footer'); 

const nav = document.querySelector('.nav');
const home = nav.querySelector('.nav-link:nth-child(1)'); 
const about = nav.querySelector('.nav-link:nth-child(2)'); 
const blog = nav.querySelector('.nav-link:nth-child(3)'); 
const contact = nav.querySelector('.nav-link:nth-child(4)');


function letterSpread(evt) {
    evt.target.style.letterSpacing = '.3rem'; 
    evt.target.style.borderBottom = '1px solid blue';
    evt.target.style.transition = '.2s'
    evt.stopPropagation();
}
function letterClose(evt) {
    evt.target.style.letterSpacing = '0'; 
    evt.target.style.borderBottom = 'none';
    evt.target.style.transition = '.2s'
    evt.stopPropagation();
}
home.addEventListener('mouseover', letterSpread) 
home.addEventListener('mouseleave',letterClose)

about.addEventListener('mouseover', letterSpread) 
about.addEventListener('mouseleave',letterClose)

blog.addEventListener('mouseover', letterSpread) 
blog.addEventListener('mouseleave',letterClose)

contact.addEventListener('mouseover', letterSpread) 
contact.addEventListener('mouseleave',letterClose)

//heading done for links

const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn=> {
    btn.addEventListener('click', evt => {
        evt.preventDefault();
        btn.style.transition = '.4s'
        btn.classList.remove('btn');
        btn.style.color = 'transparent';
    })
})
const buttonArray = Array.from(buttons); 
function escKey(event) {
    console.log(event.key)
    if (event.key == "Escape") {
            buttonArray[0].classList.add('btn')
            buttonArray[0].style.fontSize = '1.8rem' 
            buttonArray[0].style.color = 'white'; 
            buttonArray[1].classList.add('btn')
            buttonArray[1].style.color = 'white'; 
            buttonArray[1].style.fontSize = '1.8rem' 
            buttonArray[2].classList.add('btn')
            buttonArray[2].style.color = 'white'; 
    }
 }

document.addEventListener('keydown', escKey)

const containerHome = document.querySelector('.home');

home.addEventListener('click', evt => {
    console.log(evt.target)
    evt.preventDefault(); 
})
about.addEventListener('click', evt => {

    evt.preventDefault(); 
})
blog.addEventListener('click', evt => {
   
    evt.preventDefault(); 
})
contact.addEventListener('click', evt => {
   
    evt.preventDefault(); 
})

console.log(containerHome)
const doc = document.querySelectorAll('.nav').forEach(n=> {
    n.addEventListener('mouseleave', evt => {
        console.log(n);
        evt.target.style.filter = 'blur(1px)'; 
    })
    n.addEventListener('mouseenter', evt => {
        console.log(evt);
        evt.target.style.filter = 'blur(0)';
    })
});
console.log(doc); 


const allImages = document.querySelectorAll('.img-content').forEach(img=> {
    img.addEventListener('mouseover', evt => {
        evt.target.style.borderRadius = '25px'
        evt.target.style.boxShadow = "5px 5px 5px gray"
        evt.target.style.transition = ".5s"
        evt.target.style.width = "35rem"
    }) 
    img.addEventListener('mouseleave', evt => {
        evt.target.style.borderRadius = ''
        evt.target.style.boxShadow = ""
        evt.target.style.transition = ".5s"
        evt.target.style.width = ""
    })
})
img.addEventListener('mouseover', evt => {
    evt.target.style.borderRadius = '25px'
    evt.target.style.boxShadow = "5px 5px 5px gray"
    evt.target.style.transition = ".5s"
    
}) 
img.addEventListener('mouseleave', evt => {
    evt.target.style.borderRadius = ''
    evt.target.style.boxShadow = ""
    evt.target.style.transition = ".5s"
})

const lastImage = document.querySelector('.content-destination img');

lastImage.addEventListener('mouseover', evt => {
    evt.target.style.borderRadius = '25px'
    evt.target.style.boxShadow = "5px 5px 5px gray"
    evt.target.style.transition = ".5s"
    
}) 
lastImage.addEventListener('mouseleave', evt => {
    evt.target.style.borderRadius = 'none'
    evt.target.style.boxShadow = ""
    evt.target.style.transition = ".5s"
})
