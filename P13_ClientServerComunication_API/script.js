

btn_fetch_superhero.onclick = function () {
    console.log("fetch button clicked");
    const url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    fetch(url)  // Grazina Promise objekta
    .then(response => {
        console.log("response status", response.status);
        return response.json()
    })  //  Promise objektas sulaukiamas su then
    .then(result =>{
        console.log("result", result);
        // Call methodfs which will show results in broweser windoe
        populateHeader(result);
        populateMembers(result);
    })
    .catch(error =>{
        console.log("My error ==> ", error);
    })
};

populateHeader = (obj) => {
    const header = document.querySelector('#header');
    const h1 = document.createElement('h1');
    h1.textContent = obj.squadName;
    header.appendChild(h1);
    const p =document.createElement('p');
    p.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    
    header.appendChild(p);
};

function populateMembers(obj){
    const membersdiv = document.querySelector('#members');
    const heroes = obj.members;

    heroes.forEach(hero => {
        membersdiv.innerHTML += `
        <div>
        <h2>${hero.name}</h2>
        <p>Secret identity: ${hero.secretIdentity}</p>
        <p id="age">Age: ${hero.age}</p>
        <p>
            <b>Superpowers</b>:
        <ul>
        </ul>
        ${hero.powers.map(power => `<li>${power}</li>`).join("")}
        </p>
        </div>`;
    });

    // heroes.forEach(hero => {
    //     const hero_container = document.createElement('div');
    //     const h2 = document.createElement('h2');
    //     h2.textContent=hero.name;
    //     hero_container.appendChild(h2);

    //     const p_secret_identity = document.createElement("p"); 
    //     p_secret_identity.textContent = `Secret identity: ${hero.secretIdentity}`;
    //     hero_container.appendChild(p_secret_identity);

    //     const p_age = document.createElement("p"); 
    //     p_age.textContent = `Age: ${hero.age}`;
    //     hero_container.appendChild(p_age);

    //     const p_superpowers = document.createElement("p"); 
    //     p_superpowers.textContent = "Superpowers:" 
    //     const ul = document.createElement("ul");

    //     hero.powers.forEach(power => {
    //         const li = document.createElement("li"); 
    //         li.textContent = power; 
    //         ul.appendChild(li);
    //     });

    //     p_superpowers.appendChild(ul);
    //     hero_container.appendChild(p_superpowers);
    //     membersdiv.appendChild(hero_container);
    // });

    // for (let index = 0; index < heroes.length; index++) {
    //     const h3 = document.createElement('h3');
    //     const hero = heroes[index];
    //     h3.textContent = hero.name;
    //     membersdiv.appendChild(h3);
    //     const p = document.createElement('p');
    //     p.innerHTML = `Age: ${hero.age} <br>Secret Identity: ${hero.secretIdentity} <br>POWERS:`;
    //     membersdiv.appendChild(p);

    //     const p2 = document.createElement('p');
    //     hero.powers.forEach((power, i) => {
    //         p2.innerHTML += `${power}`;
    //         if (i < hero.powers.length - 1) {
    //         p2.innerHTML += ' - ';
    //         }
    //     });
    //     membersdiv.appendChild(p2);
    // }
    
};

























// function fetch(){
//     console.log("fetch button clicked");
// }