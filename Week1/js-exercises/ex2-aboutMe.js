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

const insertInnerText = (id, text) => {
  const targetElement = document.getElementById(id);
  targetElement.innerText = text;
};
insertInnerText('nickname', 'Ata');
insertInnerText('fav-food', 'pizza');
insertInnerText('hometown', 'Shymkent');

const listItem = document.querySelectorAll('li');
listItem.forEach(item => {
  item.classList.add('list-item');
});

const myImage = document.createElement('img');
myImage.src =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfl8a3emNH5v8fgYNkyMvnXkcqyGiW_2KLQ&usqp=CAU';
body.appendChild(myImage);
