/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.done
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.done
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!done
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.done
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/

'use strict';

const walkingCat = document.querySelector('img');

// creating a dancing image, placing it in the center of the screen, appending to the body
const dancingCat = document.createElement('img');
dancingCat.src =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';
const dancingCatDStyle = dancingCat.style;
dancingCatDStyle.position = 'absolute';
// initially the dancing cat is not appearing
dancingCatDStyle.display = 'none';
document.body.appendChild(dancingCat);
// walking keeps the value of cat's walking
let walking = 0;
// initially 'cat reaching center' is false
let catReachedCenter = false;
const catWalk = () => {
  walking += 10; // every calling of the function increases the distance of the cat's walking;
  // dynamically calculates the middle of the screen for both images (walking and dancing cats)
  const fullWindowWidth = window.innerWidth;
  const walkingCatSize = walkingCat.getBoundingClientRect();
  const centeringDancingCat = `${(fullWindowWidth - walkingCatSize.width) / 2}px`;
  dancingCatDStyle.marginLeft = centeringDancingCat;
  const rightSideOfCat = fullWindowWidth - walkingCatSize.right;
  // in case of two conditions are fullfilled,
  if (
    !catReachedCenter &&
    walkingCatSize.right > window.innerWidth / 2 + walkingCatSize.width / 2
  ) {
    catReachedCenter = true; // 1) the value of 'cat reaching center' changes to true
    dancingCatDStyle.display = 'block'; // 2) we display the dancing cat
    clearInterval(interval); // 3) we stop calling the catwalk function
    walkingCat.style.display = 'none'; // 4) the walking cat disappears
    // 4) and finally after 5 seconds the dancing cat disappears again, the walking cat appears and the cat walk is invoked again;
    setTimeout(function() {
      walkingCat.style.display = 'block';
      dancingCat.style.display = 'none';
      interval = setInterval(catWalk, 50);
    }, 5000);
  }
  // when the walking cat's right top corner goes over the right side of the window,
  if (rightSideOfCat < 0) {
    // the distance of cat's walking turns into zero
    walking = 0;
    // and the cat's reaching center switches to false again;
    catReachedCenter = false;
  }
  walkingCat.style.marginLeft = `${walking}px`; // placing the position of the cat in a template string;
};

let interval = setInterval(catWalk, 50);
