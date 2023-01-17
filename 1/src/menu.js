const menuFunction = () => {
    const appContainer = document.querySelector('.app-container');
    const main = document.createElement('div')
    appContainer.appendChild(main);
    main.classList.add('main')

    for (let i = 0; i < 2; i++){
        const menuCard = document.createElement('div');
        menuCard.classList.add('card')
        menuCard.id = `card-${i+1}`
        main.appendChild(menuCard);
    }

    const coffees = document.querySelector('#card-1')
    const header = document.createElement('h1')
    header.classList.add('coffee-header')
    coffees.appendChild(header)
    header.textContent = '☕'
    const coffeeList = ['~~~~~~~~~~~~~~~~~','Americano', '£2.10', '~', 'Latte', '£2.50', '~', 'Cappuchino', '£2.50', '~', 'Mocha', '£3.00', '~', 'Espresso', '£2', '~', 'Tea', '£1.50', '~', 'Green-Tea', '£1', '~~~~~~~~~~~~~~~~~']
    for (let i = 0; i < coffeeList.length; i++){
        const coffee = document.createElement('p')
        coffee.id = `coffee-${i+1}`
        coffee.textContent = coffeeList[i];
        if ((coffeeList[i][0]!='£') && (coffeeList[i][0]!='~')){
            coffee.classList.add('buy');
        }
        coffees.appendChild(coffee)
    }


    const food = document.querySelector('#card-2')
    const foodHeader = document.createElement('h1')
    foodHeader.classList.add('food-header')
    food.appendChild(foodHeader)
    foodHeader.textContent = '🍪'
    const foodList = ['~~~~~~~~~~~~~~~~~','Croissant', '£2.00', '~', 'Bagel', '£2.50', '~', 'Crisps', '£1.50', '~', 'Chocolate', '£1.00', '~', 'Sandwich', '£4', '~', 'Muffin', '£1.50', '~', 'Cereal', '£1', '~~~~~~~~~~~~~~~~~']
    for (let i = 0; i < foodList.length; i++){
        const snack = document.createElement('p')
        snack.id = `coffee-${i+1}`
        snack.textContent = foodList[i];
        if ((foodList[i][0]!='£') && (foodList[i][0]!='~')){
            snack.classList.add('buy');
        }
        food.appendChild(snack)
    }



}

export { menuFunction }