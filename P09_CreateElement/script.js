

const my_div = document.getElementById('article-content');

const paragaraph = document.createElement('p');
paragaraph.innerHTML = "Sveikuciai meno mieli <b>meduolei</b>.";
my_div.append(paragaraph);

const header = document.createElement('h4');
header.textContent = "Steraipsnio sntraste.";
my_div.prepend(header);

const mygtukas = document.querySelector('#addContent');
mygtukas.addEventListener("click", () => {
    const paragaraph2 = document.createElement('p');
    paragaraph2.innerHTML = "Kazkoks tai <b>Tekstas</b>.";

    document.getElementById('article-content').append(paragaraph2);
})

document.getElementById('refreshContent').addEventListener("click", () => {
    const refreshedHeader = document.createElement('h4');
    refreshedHeader.innerHTML = "<u>Atnaujinta antraste</u>!";
    const refreshedParagraph = document.createElement('p');
    refreshedParagraph.innerHTML = "<b>Atnaujinta:</b> naujausia informacija";
    const refreshedFooter = document.createElement('p');
    refreshedFooter.innerHTML = new Date();

    const article = document.querySelector('#article-content');
    article.innerHTML = '';
    article.append(refreshedHeader);
    article.append(refreshedParagraph);
    article.append(refreshedFooter);
})

