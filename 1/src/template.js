const createTemplate = () => {
    const body = document.querySelector('body')

    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');

    body.appendChild(appContainer)

    const float = document.createElement('div')
    float.classList.add('float');

    const floatText = document.createElement('p')
    floatText.classList.add('basket')
    floatText.textContent = '0';

    appContainer.appendChild(float);
    float.appendChild(floatText);


    // TOP
    const title = document.createElement('div')
    title.textContent = 'Jack Macs Cafe'
    title.classList.add('title');


    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')

    const navList = document.createElement('ul');
    navList.classList.add('nav-list');

    navBar.appendChild(navList);

    for (let i = 0; i < 3; i++){
        const l = document.createElement('li');
        l.classList.add('nav-link')
        l.id = `nav-${i+1}`;
        if (i == 0){
            l.textContent = 'Home'
            l.classList.add('home')
        }
        if (i == 1){
            l.textContent = 'Menu'
            l.classList.add('menu')
        }
        if (i == 2) {
            l.textContent = 'Contact'
            l.classList.add('review')
        }
        navList.appendChild(l);
    }


    appContainer.appendChild(title);
    appContainer.appendChild(navBar);

}

export { createTemplate }