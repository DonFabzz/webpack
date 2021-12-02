import './style.css';
import Icon from './img/test.jpg'


  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

/* function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
} */

//memory card array
var num = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// suffle of my array
shuffle(num);

// array for verify if card pick are the same
var tabverif=[];

var x=0;
var score=0;
var go;
// my cards
var list = document.querySelectorAll('.carre')
var click=0;
list.forEach(function (div, i) {
    div.innerHTML= num[x];
    x+=1;
    var li = list[i];

    li.onclick = function() {
      if(click<1){
        go = true;
        chrono();
        click+=1;
      }
      if(tabverif.length<2){
        tabverif.push(div.innerHTML);
      console.log(tabverif);
      div.classList.add("test");
      setTimeout(function(){
        if(tabverif.length==2){
        if(hasDuplicates(tabverif)==1){
          const items = document.querySelectorAll('.test');
          for (let i = 0; i < items.length; i++) {
              items[i].className = 'ok';
              score+=1;
              console.log(score)
          }
        }else{
          const items = document.querySelectorAll('.test');
          for (let i = 0; i < items.length; i++) {
              items[i].className = 'carre';
          }
        }
        tabverif=[];
        if(score >= 16){
          console.log('win')
          go=false;
          click=2;
          console.log(click)
          var button = document.getElementById('loose');
          button.classList.add("show");
        }
      }
      },2000);
      
    }
  }
})

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

function reset(){
  location.reload();
}

var button = document.getElementById('loose');
button.onclick = reset;

var sec=0;
var min=0;
var hours=0;

function chrono(){ 
  if(go){
      sec+=1;
      if(sec==60){min+=1; sec=0;}
      if(min==60){min=0; hours+=1;}
      document.getElementById('chrono').innerText = hours + ':' + min + ':' + sec;    
      setTimeout(chrono,1000); 
  }else{
     document.getElementById('tf').innerText = hours + ':' + min + ':' + sec;    
  }
}