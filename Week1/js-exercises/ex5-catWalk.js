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

const fullWindowWidth = window.innerWidth;

const walkingCatSize = walkingCat.getBoundingClientRect();
const centeringDancingCat = `${(fullWindowWidth - walkingCatSize.width) / 2}px`;

let walking = 0;

let catReachedCenter = false;

const dancingCat = document.createElement('img');
dancingCat.src =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';
const dancingCatDStyle = dancingCat.style;
dancingCatDStyle.position = 'absolute';
dancingCatDStyle.marginLeft = centeringDancingCat;
dancingCatDStyle.display = 'none';
document.body.appendChild(dancingCat);

const catWalk = () => {
  walking += 10; // every calling of the function increases the distance of the cat's walking;
  const walkingCatSizeInsideFunction = walkingCat.getBoundingClientRect();
  const rightSideOfCat = fullWindowWidth - walkingCatSizeInsideFunction.right; // the "walkingCat Size" variable can't be used here as a shortcut since the value of getBoundingClientRect constantly changes;
  if (
    !catReachedCenter &&
    walkingCatSizeInsideFunction.right >
      window.innerWidth / 2 + walkingCatSizeInsideFunction.width / 2
  ) {
    catReachedCenter = true;
    dancingCatDStyle.display = 'block';
    clearInterval(interval);
    setTimeout(function() {
      dancingCat.style.display = 'none';
      interval = setInterval(catWalk, 50);
    }, 5000);
  }
  // when the cat's right top corner goes over the right side of the window,
  if (rightSideOfCat < 0) {
    // the distance of cat's walking turns into zero
    walking = 0;
    // and the cat's reaching center switches to false again;
    catReachedCenter = false;
    console.log('Show it when it returns to the beginning');
  }
  walkingCat.style.marginLeft = `${walking}px`; // placing the position of the cat in a template string;
};

let interval = setInterval(catWalk, 50);

// let oneTimeThing = false;
// As soon as the function is invoked oneTimeThing changes into true;
// As soon as the one lap of the cat ends, oneTimeThing becomes false again;

// observer in the middle of the screen, it lets you know that one event is happening
