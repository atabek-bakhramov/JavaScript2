/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */

'use strict';

// variables and functions regarding pop-up window
const popUpBox = document.getElementById('pop-up-box');
const alertMessageHolder = document.getElementById('alert-message-holder')
const closePopUpBoxButton = document.getElementById('close');
closePopUpBoxButton.addEventListener('click', () => {
  popUpBox.style.display = 'none';
})
const showPopUpBox = () => {
  popUpBox.style.display = 'block';
}
window.addEventListener('click', e => {
  if (e.target === popUpBox) {
    popUpBox.style.display = 'none';
  }
});
/**
 * 
 * @param {string} errorMessage by default returns 'Invalid input' (just learnt a cool way of commenting functions :D)
 */
const placeErrorMessage = (errorMessage = 'Invalid input') => {
  alertMessageHolder.innerText = errorMessage;
}

// variables and event listener regarding the first input (bill)
const bill = document.getElementById('bill');
let amountOfBill;
bill.addEventListener('change', e => {
  if (e.target.value > 0) {
    amountOfBill = parseInt(bill.value, 10);
  } else {
    showPopUpBox();   
    placeErrorMessage();
    bill.value = '';
  }
});

// variables and event listener regarding the select options (service)
const service = document.getElementById('service');
let amountOfTips;
service.addEventListener('change', e => {
  amountOfTips = parseInt(e.target.value, 10);;
});

// variables and event listener regarding the second input (number of people)
const numberOfPeople = document.getElementById('number-of-people');
let amountOfPeople;
numberOfPeople.addEventListener('change', e => {
  if (e.target.value > 0) {
    amountOfPeople = parseInt(numberOfPeople.value, 10);
  } else {
    showPopUpBox();   
    placeErrorMessage();
    numberOfPeople.value = '';
  }
});

// variables and event listener regarding the calculation
const calculator = document.getElementById('calculator');
const hiddenSection = document.getElementById('hidden-section');
const headerOfTipAmount = document.getElementById('header-tip-amount');
const holderOfTipAmount = document.getElementById('holder-of-tip-amount');
const holderOfEachPerson = document.getElementById('each');
let tipAmount;
calculator.addEventListener('click', () => {
  if (amountOfBill === undefined) {
    showPopUpBox();   
    placeErrorMessage("The bill is blank!");
  } else if (
    !Number.isNaN(amountOfBill) &&
    amountOfTips === undefined &&
    !Number.isNaN(amountOfPeople)
  ) {
    showPopUpBox();   
    placeErrorMessage("Choose tip amount!");
  } else if (amountOfPeople === undefined) {
    showPopUpBox();   
    placeErrorMessage("The number of people is blank!");
  } else {
    tipAmount = amountOfBill * (amountOfTips / 100);
    headerOfTipAmount.style.display = 'block';
    hiddenSection.classList.add('fade-in');
    if (amountOfPeople === 1) {
      holderOfTipAmount.innerText = `€${tipAmount.toFixed(2)}`;
      holderOfEachPerson.style.display = 'none';
    } else {
      holderOfTipAmount.innerText = `€${(tipAmount / amountOfPeople).toFixed(2)}`;
      holderOfEachPerson.style.display = 'block';
    }
  }
});



