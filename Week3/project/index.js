'use strict';

const bill = document.getElementById('bill');
let amountOfBill;
bill.addEventListener('change', (e) => {
  if (e.target.value > 0) {
    amountOfBill = parseInt(bill.value, 10);
  } else {
    alert('Hey, only positive numbers in the bill. Or you\'re trying to make us pay you? :)');
    bill.value = '';
  }
});

const service = document.getElementById('service');
let amountOfTips;
service.addEventListener('change', e => {
  amountOfTips = parseInt(e.target.value, 10);;
});

const numberOfPeople = document.getElementById('number-of-people');
let amountOfPeople;
numberOfPeople.addEventListener('change', (e) => {
  if (e.target.value > 0) {
    amountOfPeople = parseInt(numberOfPeople.value, 10);
  } else {
    alert('Hey, tell us how many of you there are? It can\'t be zero or negative number, right? :)');
    numberOfPeople.value = '';
  }
});

const calculator = document.getElementById('calculator');
const hiddenSection = document.getElementById('hidden-section');
const headerTipAmount = document.getElementById('tip-amount');
const holderOfAmountOfFinalPrice = document.getElementById('final-amount');
const holderOfEachPerson = document.getElementById('each');
let amountOfFinalPrice;
calculator.addEventListener('click', () => {
  if (amountOfBill === undefined) {
    alert('Hey, you\'ve left the bill blank!');
  } else if (
    !isNaN(amountOfBill) === true &&
    amountOfTips === undefined &&
    !isNaN(amountOfPeople) === true
  ) {
    alert('Tell us how you find our service!');
  } else if (amountOfPeople === undefined) {
    alert('Hey, you\'ve left the number of people blank!');
  } else {
    amountOfFinalPrice = amountOfBill * (amountOfTips / 100) + amountOfBill;
    headerTipAmount.style.display = 'block';
    hiddenSection.classList.add('fade-in');
    if (amountOfPeople === 1) {
      holderOfAmountOfFinalPrice.innerText = '€' + amountOfFinalPrice;
      holderOfEachPerson.style.display = 'none';
    } else {
      holderOfAmountOfFinalPrice.innerText = '€' + (amountOfFinalPrice / amountOfPeople).toFixed(2);
      holderOfEachPerson.style.display = 'block';
    }
  }
});
