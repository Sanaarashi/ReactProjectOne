window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let imgs = document.querySelectorAll('IMG');
    let images = ['img/img_1.jpg', 'img/img_2.jpg', 'img/img_3.jpg'];

    let firstPormise = new Promise((resolve, reject) => {
        
    });

    firstPormise
        .then(console.log('yeah'))
        .catch(console.log('F'));
});