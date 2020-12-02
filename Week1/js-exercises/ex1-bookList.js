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
  // targeting the ul tag
  const unorderedList = document.createElement('ul');
  // adding a class attribute to the ul tag
  unorderedList.classList.add = 'unordered-list';
  // looping through the array
  for (const item of array) {
    // creating a paragraph element
    const paragraph = document.createElement('p');
    // placing a text inside the paragraph
    paragraph.innerText = `${item.title} by ${item.author}`;
    // creating a list item element
    const listItem = document.createElement('li');
    // giving some styling to the list item
    listItem.style.listStyleType = 'none';
    listItem.style.display = 'inline-block';
    listItem.style.margin = '0 10px';
    // creating an image element
    const image = document.createElement('img');
    // assigning a value to the image's attribute
    image.src = `${item.url}`;
    // giving some styling to the image
    image.width = '300';
    image.style.display = 'block';
    // appending the paragraph and the image as the children of the list item
    listItem.appendChild(paragraph).appendChild(image);
    // assigning a value to the background color property of the list item
    listItem.style.backgroundColor = item.alreadyRead ? 'green' : 'red';
    // appending the list item as a child of the unordered list
    unorderedList.appendChild(listItem);
  }
  // returning the unordered list
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

// storing the returned value of the function 'createBookList' with the passed argument of an object 'books'
const ulElement = createBookList(books);
// targeting the element with the id of 'bookList' and appending a child to it
document.querySelector('#bookList').appendChild(ulElement);
