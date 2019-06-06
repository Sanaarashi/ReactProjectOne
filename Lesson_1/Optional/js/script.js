window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let imgs = document.querySelector('.img');
    let images = ['img/img_1.jpg', 'img/img_2.jpg', 'img/img_3.jpg'];

    let promises = [];

    images.map(elem => {
        promises.push(new Promise( (resolve, reject) => {
            let someImage = new Image();

            someImage.addEventListener('load', () => {
                resolve();
            });

            someImage.addEventListener('error', () => {
                reject(console.error(`the path to unloaded image is ${elem}`));
            });

            someImage.src = elem;
            imgs.appendChild(someImage);
        }));
    });

    Promise.all(promises).then(e => console.log("All pics loaded")).catch(e => console.error('An error has occurred'));
});