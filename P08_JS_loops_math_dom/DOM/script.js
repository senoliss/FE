function changeLi(){
    const ul = document.getElementsByTagName('ul')[0];
    const coffee_li = ul.getElementsByTagName('li')[0];
    coffee_li.innerHTML = '<u>Latte</u>'
    // coffee_li.textContent = '<u>Latte</u>'
}

function AddMilk(){
    const my_ul = document.getElementsByTagName('ul')[0];
    my_ul.innerHTML += '<li class="drink milk">Milk</li>';
}

function countLi(){
    const my_ul = document.getElementsByTagName('ul')[0];
    const len = my_ul.children.length;
    return `There are ${len} elements in the list`;
}

function countDrinks2(){
    const my_ul = document.getElementsByTagName('ul')[0];
    const count = document.getElementsByTagName(my_ul).length;
    console.log(count);
}

function countDrinks(){
    document.getElementById('element_count').innerHTML = countLi();
}

function changeAllMilkToAlmond(){
    const list_of_milk_li = document.getElementsByClassName('milk');

    for(let milk_li of list_of_milk_li)
    {
        if(milk_li.innerHTML === 'Almond Drink')
        {
            milk_li.innerHTML = 'Milk';
        }
        else{milk_li.innerHTML = 'Almond Drink';}
    }
}

function changeWaterBgColorToBlue(){
    const list_of_water_li = document.getElementsByClassName('water');
    for(let water_li of list_of_water_li)
    {
        water_li.style.backgroundColor = 'blue';
    }
}

function changeWaterClassAndColor(){
    const list_of_water_li = document.getElementsByClassName('water');
    for(let water_li of list_of_water_li)
    {
        water_li.classList.remove('water');
        water_li.classList.add('pretty_water');
    }
}


function changeWaterClassColorRandom() {
    const list_of_water_li = document.getElementsByClassName('milk');
    // let red;
    for(let water_li of list_of_water_li)
    {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        water_li.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}
document.querySelector('li.tea #wrongText').textContent = "Green Chai";