/**
 
 ** Exercise 2: About me **

 1. See HTML done
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif". done
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information. done
 4. Iterate through each li and change the class to "list-item". done
 5. See HTML done
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page. done
 */

'use strict';

const body = document.body;
body.style.fontFamily = 'Arial, sans-serif';

// a function that has two parameters
const insertInnerText = (id, text) => {
  // targeting an element using passed first parameter
  const targetElement = document.getElementById(id);
  // inserting a text inside that element
  targetElement.innerText = text;
};
// Invoking the function and passing two arguments
insertInnerText('nickname', 'Ata');
insertInnerText('fav-food', 'pizza');
insertInnerText('hometown', 'Almaty');

// targeting all list items
const listItem = document.querySelectorAll('li');
// for each list item adding a class attribute
listItem.forEach(item => {
  item.classList.add('list-item');
});

// creating an image element
const myImage = document.createElement('img');
// assigning a link to the image's source
myImage.src =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfl8a3emNH5v8fgYNkyMvnXkcqyGiW_2KLQ&usqp=CAU';
// appending the image to the body of the html
body.appendChild(myImage);
