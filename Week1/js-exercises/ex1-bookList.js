/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books. 
  2. For each book, create a `<p>` 
  element with the book title and author and append it to the page. 
  3. Use a `<ul>`  and `<li>` to display the books. 
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

'use strict';

function createBookList(array) {
  const unorderedList = document.createElement('ul');
  unorderedList.classList.add = 'unordered-list';
  for (const item of array) {
    const paragraph = document.createElement('p'); // I thought h2 would fit better here
    paragraph.innerText = `${item.title} by ${item.author}`;
    const listItem = document.createElement('li');
    listItem.style.listStyleType = 'none';
    listItem.style.display = 'inline-block';
    listItem.style.margin = '0 10px';
    const image = document.createElement('img');
    image.src = `${item.url}`;
    image.width = '300';
    image.style.display = 'block';
    listItem.appendChild(paragraph).appendChild(image);
    if (item.alreadyRead === true) {
      listItem.style.backgroundColor = 'green';
    } else {
      listItem.style.backgroundColor = 'red';
    }
    unorderedList.appendChild(listItem);
  }
  return unorderedList;
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    url: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    url: 'https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    url: 'https://www.studystore.nl/images/9780135957059/3/1',
  },
];

const ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);
