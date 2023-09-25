(function () {
'use strict';
//form
const form = document.getElementById('form');

form.addEventListener('submit', submition)
//Input
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const button = document.getElementById('button');

//Output
const dayOtp = document.querySelector('.dayOtp');

const monthOtp = document.querySelector('.monthOtp');

const yearOtp = document.querySelector('.yearOtp');


//

const  date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();


const months = [31, 28 ,31 ,30,31 ,30 ,31 ,31,30,31,30,31];


function validate () {
  // body...
  let validator = true;
  let inputs = document.querySelectorAll('input');
  inputs.forEach(eachInput =>{
    const  parent = eachInput.parentElement;
    if (!eachInput.value) {
      
      parent.querySelector('small').innerHTML = 'This field is required';
      parent.querySelector('label').style.color = 'red';
      eachInput.style.borderColor ='red';
      validator = false;
      
    }
    
    else if(dayInput.value > 31){
      dayInput.parentElement.querySelector('small').innerText = 'Must be a valid day';
      dayInput.style.borderColor ='red';
      validator = false;
    }
    else if(monthInput.value > 12){
      monthInput.parentElement.querySelector('small').innerHTML = 'Must be a valid month';
      monthInput.style.borderColor ='red';
      validator = false;
    } 
    else if(yearInput.value > year){
      yearInput.parentElement.querySelector('small').innerHTML = 'Must not be greater than current year';
      yearInput.style.borderColor ='red';
      validator = false;
    }
    else {
      parent.querySelector('small').innerHTML = '';
      parent.querySelector('label').style.color = 'black';
            eachInput.style.borderColor = 'black';
            validator = true;
    }
    
  } )
  return validator
  
};


//handlesunmit
function submition(event) {
  // body...
  
  event.preventDefault();
  
  if (validate()){
    
    if (dayInput.value > day ) {
      day = day + months[month -1];
      month = month -1;
    }
    
    if (monthInput.value > month) {
      month = month + 12;
      year = year - 1;
    }
     
     
  const dd = day - dayInput.value;
  const mm = month - monthInput.value;
  const yy = year - yearInput.value;
  
    dayOtp.innerHTML = dd;
    monthOtp.innerHTML = mm;
    yearOtp.innerHTML = yy;
  }
};


//sharing

function shareToStatus() {  
    window.open('https://web.whatsapp.com://status?text= https://www.youtube.com/watch?v=ohpCMpderow');  
    }  

})();
