// // PRACTICE
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// // Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.width);

// // console.log(getComputedStyle(message).);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// console.log(logo.dataset.versionNumber);

// // // Classes
// // logo.classList.add();
// // logo.classList.remove();
// // logo.classList.toggle();
// // logo.classList.contains();
// // logo.className = 'aqeeb';
// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventListener: happens');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// // h1.onmouseenter = function (e) {
// //   alert('Happens');
// // };

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//rgb(255, 255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('LINK');
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('LINK');
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('LINK');
//   this.style.backgroundColor = randomColor();
// });

///////////////////////////////////////
///////////////////////////////////////
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   // const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);

//   // console.log(e.target.getBoundingClientRect());

//   // console.log('Current scroll (X?Y)', window.pageXOffset, pageYOffset);

//   // console.log('height/width viewport', document.documentElement.clientWidth);

//   // Scrolling
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   section1.scrollIntoView({
//     behavior: 'smooth',
//   });
// });

// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.9)';
// });
