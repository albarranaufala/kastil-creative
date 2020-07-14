const burgerBtn = document.querySelector('.burger');
const clearBtn = document.querySelector('.clear');
const navbar = document.querySelector('nav');
const body = document.querySelector('body');
const valuesContainer = document.querySelector('.values-container');
let decrementMarquee = 1;

AOS.init({
    duration: 1200,
});

burgerBtn.addEventListener('click', function(e) {
    navbar.classList.add('responsive');
    body.classList.add('overflow-hidden');
})
clearBtn.addEventListener('click', function(e) {
    navbar.classList.remove('responsive');
    body.classList.remove('overflow-hidden');
})

// document.addEventListener('DOMContentLoaded', _ => {
//     /*
//       Quick whip-up of an idea posed by a client: a bar filled with logo's that move to the left slowly and infinitely.
//       I checked if the <marquee> tag was still working (and it is), but it's considered invalid html now so I needed something else.
//     */
//     const containerElem = document.querySelector('.values-container');
//     const leftSideOfContainer = containerElem.getBoundingClientRect().left;
//     const listElem = document.querySelector('.values');
//     let currentLeftValue = 0;

//     // Kick off for the animation function.
//     window.setInterval(animationLoop, 10);

//     /* 
//       Looks at first item in the list and checks if it goes out of the visible area 
//       by comparing the right position of the first list item to the left position 
//       of the containing element. 
//     */
//     function animationLoop() {
//         const firstListItem = listElem.querySelector('.card-value:first-child');

//         let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

//         /* 
//           If first list item is out of viewable area, move it to the end of the list. 
//           Also, set the current left value to -1 so we won't stutter.
//         */
//         if (rightSideOfFirstItem == leftSideOfContainer) {
//             currentLeftValue = -1;
//             listElem.appendChild(firstListItem);
//         }

//         // The part that keeps it all going: animating the margin left value of the list.
//         listElem.style.marginLeft = `${currentLeftValue}px`;
//         currentLeftValue = currentLeftValue - decrementMarquee;
//     }
// });

$('.values-container').marquee({
    duration: 28000,
    direction: 'left',
    pauseOnHover: true,
    duplicated: true,
    startVisible: true
});