const reviewFunction = () => {
    const appContainer = document.querySelector('.app-container');
    const main = document.createElement('div')
    appContainer.appendChild(main);
    main.classList.add('main')
    main.classList.add('review-main')

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container')
    main.appendChild(formContainer);

    // Thank you message
    const message = document.createElement('h4');
    message.classList.add('message');
    message.textContent = 'Thank you for visiting! Please let us know how we did';

    formContainer.appendChild(message)





    // Form
    const form = document.createElement('form');
    form.classList.add('form');
    formContainer.appendChild(form)
    const reviewInput = document.createElement('input')
    reviewInput.type = "text";
    reviewInput.classList.add('review-box')
    reviewInput.placeholder = "Leave a review";
    form.appendChild(reviewInput);



    const map = document.createElement('div')
    map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18464.905112557222!2d-2.7640502000000002!3d54.65483329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1673896368246!5m2!1sen!2suk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    main.appendChild(map);
}

export { reviewFunction }