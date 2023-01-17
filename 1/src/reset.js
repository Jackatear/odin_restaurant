const resetFunction = () => {
    const appContainer = document.querySelector('.app-container');
    const main = document.querySelector('.main');

    appContainer.removeChild(main);

    console.log('resetting')
}

export { resetFunction }