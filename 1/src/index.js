import { createTemplate } from './template.js';
import { homeMain } from './home.js';
import { resetFunction } from './reset.js';
import { menuFunction } from './menu.js';
import { reviewFunction } from './review.js';

import './style/style.css'

const initialize = () => {
    createTemplate();
    homeMain();

    
    const homeButton = document.querySelector('.home')
    const menuButton = document.querySelector('.menu')
    const reviewButton = document.querySelector('.review')
    const basket = document.querySelector('.basket')
    let x = 0;




    
    homeButton.addEventListener('click', () => {
        resetFunction();
        homeMain();
    })

    menuButton.addEventListener('click', () => {
        resetFunction();
        menuFunction();

        const buy = document.querySelectorAll('.buy')
        buy.forEach(item => {
            item.addEventListener('click', () => {
                x++;
                basket.textContent = x;
            })
        })
    
    })

    reviewButton.addEventListener('click', () => {
        resetFunction();
        reviewFunction();
    })
};

initialize();