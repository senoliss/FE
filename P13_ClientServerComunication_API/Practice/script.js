window.onload = function () {
    console.log("fetch button clicked");
    const randomNr = Math.floor(Math.random() * 33) + 1;
    const url = "https://picsum.photos/v2/list?page=" + randomNr;
    fetch(url)  // Grazina Promise objekta
    .then(response => {
        console.log("response status", response.status);
        return response.json()
    })  //  Promise objektas sulaukiamas su then
    .then(result =>{
        console.log("result", result);
        populatePhotos(result);
        // Call methodfs which will show results in broweser windoe
    })
    .catch(error =>{
        console.log("My error ==> ", error);
    })
};

populatePhotos = (obj) => {
    const photodiv = document.querySelector('#photo_container');
    
    obj.forEach(photo =>{
        photodiv.innerHTML += `
            <img src="${photo.download_url}" alt="Italian Trulli" width="200px" height="200px"></img>`
        });
};