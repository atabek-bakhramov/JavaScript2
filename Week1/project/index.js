'use strict';

// Targeting tags
const quotePlace = document.getElementById('quote-place');
const authorPlace = document.getElementById('author-place');

// Creating a function that places the random quote and its author into paragraph tags
const generateRandomQuote = array => {
  const randomNumber = Math.floor(Math.random() * array.length);
  quotePlace.innerText = array[randomNumber].text;
  authorPlace.innerText = array[randomNumber].author;
};

// An array of objects
const listOfQuotes = [
  {
    text: 'We can only learn to love by loving.',
    author: 'Iris Murdoch',
  },
  {
    text: "You'll see it when you believe it.",
    author: 'Wayne Dyer',
  },
  {
    text: 'To lead people walk behind them.',
    author: 'Lao Tzu',
  },
  {
    text: 'A rolling stone gathers no moss.',
    author: 'Publilius Syrus',
  },
  {
    text: 'Doing nothing is better than being busy doing nothing.',
    author: 'Lao Tzu',
  },
  {
    text: 'Trust yourself. You know more than you think you do.',
    author: 'Benjamin Spock',
  },
];

// Everytime we open or reload the page the function is invoked and our page is alredy filled by a random quote
generateRandomQuote(listOfQuotes);
