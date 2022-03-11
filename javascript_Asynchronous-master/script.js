'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flags[0]}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.official}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>🏴󠁩󠁳󠀱󠁿</span>${data.capital[0]}</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.entries(data.languages)[0][1]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.entries(data.currencies)[0][0]
//             }</p>
//           </div>
//         </article>
//         `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('korea');
// getCountryData('japan');

const renderCountry = function (data, className = '') {
  const html = `        
  <article class="country ${className}">
  <img class="country__img" src="${data.flags[0]}" />
  <div class="country__data">
  <h3 class="country__name">${data.name.official}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>🏴󠁩󠁳󠀱󠁿</span>${data.capital[0]}</p>
  <p class="country__row"><span>🗣️</span>${
    Object.entries(data.languages)[0][1]
  }</p>
  <p class="country__row"><span>💰</span>${
    Object.entries(data.currencies)[0][0]
  }</p>
  </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforebegin', msg);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  // AJAX call country1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // Render country 1
    renderCountry(data);

    // Get neighbor country (2)
    const [neighbor] = data.borders;
    if (!neighbor) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);

      // Render neighbor country
      renderCountry(data2, 'neighbor');
    });
  });
};

// getCountryAndNeighbor('korea');

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3/name/${country}`);
//   request.send();

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);

    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbor = data[0].borders[0];
//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3/alpha/${neighbor}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbor'))
//     .catch(err => {
//       console.error(`${err.message}`);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.com/v3/name/${country}`,
//     `${country} not found`
//   )
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbor = data[0].borders[0];
//       if (!neighbor) throw new Error('No neighbor found!');

//       // Country 2
//       return getJSON(`https://restcountries.com/v3/alpha/${neighbor}`);
//     })
//     .then(data => renderCountry(data, 'neighbor'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('korea');
// });

// getCountryData('australia');

//////////////////////////////////////
// Coding challenge #1

// const whereAmI = function (lat, lng) {
//   const url = `https://geocode.xyz/${lat},${lng}?json=1`;
//   fetch(url)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(
//         `Your in ${data.city[0] + data.city.slice(1).toLowerCase()}, ${
//           data.country
//         }`
//       );
//       return fetch(`https://restcountries.com/v3/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };

// whereAmI(51.50352, -0.12768);

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved pormise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 100; i++) console.log(res);
// });

// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is happening`);
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       // Fullfilled promise
//       resolve('You WIN');
//     } else {
//       reject(new Error('You lost your money'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Pormisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// Simplified
// const wait = second =>
//   new Promise(resolve => setTimeout(resolve, second * 1000));

// wait(1)
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('I waited for 4 seconds');
//     return wait(4);
//   })
//   .then(() => {
//     console.log('I waited for 5 seconds');
//     return wait(5);
//   });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject('Problem').catch(x => console.log(x));

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(
//         `Your in ${data.city[0] + data.city.slice(1).toLowerCase()}, ${
//           data.country
//         }`
//       );
//       return fetch(`https://restcountries.com/v3/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };

// btn.addEventListener('click', whereAmI);

// const imageContainer = document.querySelector('.images');

// // Pormisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const image = document.createElement('img');
//     image.src = imgPath;

//     image.addEventListener('load', function () {
//       imageContainer.append(image);
//       resolve(image);
//     });

//     image.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.log(err));

/* 
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.com/v3/name/${country}`).then(res =>
//   console.log(res)
// );
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    renderError(` ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2:${city}`))
//   .catch(err => console.log(`2:${err.message}`))
//   .finally(() => console.log('3:Finished getting location'));
// console.log('3: Finished getting location');

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (error) {
    console.log(`2:${error.message}`);
  }
  console.log('3:Finished getting location');
})();
 */

// const get3Country = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3/name/${c3}`);
//     // console.log(data1.capital, data2.capital, data3.capital);
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3/name/${c1}`),
//       getJSON(`https://restcountries.com/v3/name/${c2}`),
//       getJSON(`https://restcountries.com/v3/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (error) {
//     console.error(error);
//   }
// };

// get3Country('korea', 'japan', 'china');

/* // Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3/name/korea`),
    ,
    getJSON(`https://restcountries.com/v3/name/japan`),
    ,
    getJSON(`https://restcountries.com/v3/name/china`),
  ]);
  console.log(res);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v3/name/china`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(error => console.error(error));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
]).then(res => console.log(res));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
]).then(res => console.log(res));
 */

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const image = document.createElement('img');
//     image.src = imgPath;

//     image.addEventListener('load', function () {
//       imageContainer.append(image);
//       resolve(image);
//     });

//     image.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

const imageContainer = document.querySelector('.images');

// loadNPause('img/img-1.jpg').then(res => console.log(res));

const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', function () {
      imageContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.log(err));

// const loadNPause = async function () {
//   try {
//     // Load image 1
//     let img = await createImage(imgArr[0]);
//     await wait(2);
//     img.style.display = 'none';
//     // Load image 2
//     let img = await createImage(imgArr[1]);
//     await wait(2);
//     img.style.display = 'none';
//     // Load image 3
//     let img = await createImage(imgArr[2]);
//     await wait(2);
//     img.style.display = 'none';
//   } catch (error) {
//     console.error(error);
//   }
// };

// Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);

    imgsEl.forEach(el => el.classList.add('parallel'));
  } catch (error) {}
};

loadAll(imgArr);
