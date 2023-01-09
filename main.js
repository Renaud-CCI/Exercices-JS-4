//Quadrillage coloré

let cases = document.querySelectorAll('.case');
let colors = ['blue', 'red', 'green', 'black', 'yellow'];
let previousNum;

function getNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * (max - min +1)) + min;
    while (randomNum === previousNum){
        randomNum = Math.floor(Math.random() * (max - min +1)) + min;
    }
    previousNum = randomNum;
    return randomNum;
  }

for (let caseDiv of cases) {
    caseDiv.addEventListener('click', () => {
      caseDiv.style.backgroundColor=colors[getNum(0,4)]
    });
  }

//--------------------------------------

  //Modale cachée

  let appearButton = document.querySelector('#textAppear');
  let exoSection = document.querySelector('#ModaleCachée');
  let caseModale = document.querySelector('#modale');

  appearButton.addEventListener('click', function(){
    exoSection.style.backgroundColor="darkgray";
    caseModale.style.visibility='visible'
  })

  exoSection.addEventListener('click',function(event){
    if (!event.target.matches('button') && !event.target.matches('#modale')){
        exoSection.style.backgroundColor="white";
        caseModale.style.visibility='hidden'
    }
  })

  //--------------------------------------------------

// Combinaison gagnante

let soluce = document.querySelector('#soluce');
let success = document.querySelector('#combinaisonSuccess');
let failed = document.querySelector('#combinaisonFailed');
let combiButtons = document.querySelectorAll('.btnCombinaison');


soluce.addEventListener('mouseenter', function(){
    soluce.style.filter='blur(0)';
})
soluce.addEventListener('mouseleave', function(){
    soluce.style.filter='blur(50px)';
})

document.addEventListener('keydown', function(event){
    if(event.key === ("e","t")){
        success.style.display='block';
        failed.style.display='none';
    } else if (event.key === ("e","t","f")){
        success.style.display='block';
        success.style.color='green';
    } else {
        failed.style.display='block';

    }
})

document.addEventListener('keyup', function(event){
    if(event.key === ("e", "t")){
        success.style.display='none';
    } else if (event.key === ("e","t","f")){
        success.style.display='none';
        success.style.color='black';
    } else {
        failed.style.display='none';
    }
})

for (let combiButton of combiButtons) {
    combiButton.addEventListener('click', () => {
        failed.style.display='block';
    });
  }


  //-----------------------------------


  // HoverSize

  let boxes = document.querySelectorAll('.boxHoverSize');

  for(let box of boxes){
    box.addEventListener('mouseenter', function(){
        box.style.filter='blur(0)';
        box.style.border='solid 2px red';
    });
    box.addEventListener('mouseleave', function(){
        box.style.filter='blur(6px)';
        box.style.border='solid 2px black';
    });
    box.addEventListener('mousedown', function(){
        box.style.width='400px';
    });
    box.addEventListener('mouseup', function(){
        box.style.width='200px';
    });
  }


  //--------------------------------------------


  //Carrousel

  let photo = document.querySelector('#carrouselImg');
  let carrouselBtn = document.querySelector('#carrouselBtn')
  // let leftCar = document.querySelector('#leftCarrousel');
  // let rightCar = document.querySelector('#rightCarrousel');

  carrouselBtn.addEventListener('click', function(){
    photo.style.visibility='visible';
  })

  // leftCar.addEventListener('click', function(){
  //   if (photo.src.substring(33,34) > 1){
  //       i = parseInt(photo.src.substring(33,34))-1;
  //       photo.src = `.${photo.src.substring(21,33)}${i}.jpg`
  //   }
  // })

  // rightCar.addEventListener('click', function(){
  //   if (photo.src.substring(33,34) < 5){
  //       i = parseInt(photo.src.substring(33,34))+1;
  //       photo.src = `.${photo.src.substring(21,33)}${i}.jpg`
  //   }
  // })

  photo.addEventListener('click', function(event) {
    if (event.offsetX > photo.offsetWidth / 2) {
      console.log('clicked on the right side of the image');
      if (photo.src.substring(33,34) < 5){
        i = parseInt(photo.src.substring(33,34))+1;
        photo.src = `.${photo.src.substring(21,33)}${i}.jpg`
      } else {
        photo.src = `.${photo.src.substring(21,33)}1.jpg`
      }
    } else {
      console.log('clicked on the left side of the image');
      if (photo.src.substring(33,34) > 1){
        i = parseInt(photo.src.substring(33,34))-1;
        photo.src = `.${photo.src.substring(21,33)}${i}.jpg`;
      } else {
        photo.src = `.${photo.src.substring(21,33)}5.jpg`
      }
    }
  });

