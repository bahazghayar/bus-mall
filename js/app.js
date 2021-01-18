'use strict';

var productsSection = document.getElementById('imagesDiv');
var fisrtProductImage = document.getElementById('firstImage');
var secondProductImage = document.getElementById('secondImage');
var thirdProductImage = document.getElementById('thirdImage');

var image_div = document.getElementById('imagesDiv');
var showResults = document.getElementById('showResults') ; 


var firstImageIndex;
var secondImageIndex;
var thirdImageIndex;

var maxAttempts = 5;
var userAttempts = 0;

var roundsNum ;  

image_div.addEventListener('click', userClick);
form.addEventListener ('submit' , submitter ); 
showResults.addEventListener ('submit', showResult ) ; 

function Products(name, imgFilePath) {
    this.name = name;
    this.imgFilePath = imgFilePath;
    this.votes = 0;
    this.shown = 0;

    Products.prototype.allProducts.push(this);
}

Products.prototype.allProducts = [];

new Products('bag', '../img/bag.jpg');
new Products('banana', '../img/banana.jpg');
new Products('bathroom', '../img/bathroom.jpg');
new Products('boots', '../img/boots.jpg');
new Products('breakfast', '../img/breakfast.jpg');
new Products('bubblegum', '../img/bubblegum.jpg');
new Products('chair', '../img/chair.jpg');
new Products('cthulhu', '../img/cthulhu.jpg');
new Products('dog-duck', '../img/dog-duck.jpg');
new Products('dragon', '../img/dragon.jpg');
new Products('pen', '../img/pen.jpg');
new Products('pet-sweep', '../img/pet-sweep.jpg');
new Products('scissors', '../img/scissors.jpg');
new Products('shark', '../img/shark.jpg');
new Products('sweep', '../img/sweep.png');
new Products('tauntaun', '../img/tauntaun.jpg');
new Products('unicorn', '../img/unicorn.jpg');
new Products('usb', '../img/usb.gif');
new Products('water-can', '../img/water-can.jpg');
new Products('wine-glass', '../img/wine-glass.jpg');

renderThreeRandomImages();


function userClick(event) {
    
    if (userAttempts < maxAttempts) {

        if (event.target.id === 'firstImage') {
            Products.prototype.allProducts[firstImageIndex].votes++;
            userAttempts++;
           
        } else if (event.target.id === 'secondImage') {
            Products.prototype.allProducts[secondImageIndex].votes++;
            userAttempts++;
        
        } else if (event.target.id === 'thirdImage') {
            Products.prototype.allProducts[thirdImageIndex].votes++;
            userAttempts++;
        }

        renderThreeRandomImages();   
    }
       
    // showResults = document.disabled = false ;   
}


function generateRandomIndex() {
    return Math.floor(Math.random() * (Products.prototype.allProducts.length));
}

function renderThreeRandomImages() {
    firstImageIndex = generateRandomIndex();

    do {
        secondImageIndex = generateRandomIndex();
        thirdImageIndex = generateRandomIndex();
    } while (firstImageIndex === secondImageIndex || firstImageIndex === thirdImageIndex || secondImageIndex === thirdImageIndex)


    fisrtProductImage.src = Products.prototype.allProducts[firstImageIndex].imgFilePath;
    secondProductImage.src = Products.prototype.allProducts[secondImageIndex].imgFilePath;
    thirdProductImage.src = Products.prototype.allProducts[thirdImageIndex].imgFilePath;

    Products.prototype.allProducts[firstImageIndex].shown++;
    Products.prototype.allProducts[secondImageIndex].shown++;
    Products.prototype.allProducts[thirdImageIndex].shown++;

}


// choosing round number 

function submitter (event) {
   event.preventDefault () ; 
   roundsNum= event.target.userAttempts.value ; 
   maxAttempts= roundsNum ; 
}

//  Showing Results 

function showResult () {

    var resultList = document.getElementById ('resultsList') ; 
    var productsResult ; 
    for (var i=0; i <= Products.prototype.allProducts.length ; i++) {
   productsResult = document.createElement ('li') ; 
   productsResult.textContent = Products.prototype.allProducts[i].name + ' has ' + Products.prototype.allProducts[i].votes + 
   ' votes, and was seen ' + Products.prototype.allProducts[i].shown  + ' times. and the percentage is: ' + 
    (Products.prototype.allProducts[i].votes * 100 / Products.prototype.allProducts[i].shown ) ; 
   resultList.appendChild (productsResult) ; 
 }
 image_div.removeEventListener('click', userClick);

}

