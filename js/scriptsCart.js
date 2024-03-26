window.onload = function() {
    // Hämta den valda produkten från localStorage
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    // Nu kan du använda 'selectedProduct' på din form-sida
    console.log(selectedProduct);

    // Skapa nya element för att visa produktinformation
    let linkA = document.createElement('a');
    let title = document.createElement('p');
    let price = document.createElement('span');

    // title.setAttribute("class", "product-title");
    price.setAttribute("class", "price");
    linkA.setAttribute("href", "#");
    //price.setAttribute("")

    // Ange textinnehållet för de nya elementen
    linkA.textContent = "Product 1123123123123";
    price.textContent = '$' + selectedProduct.price;

    // Lägg till de nya elementen i dokumentet
    let row = document.querySelector('#start-list');
    row.appendChild(title);
    title.appendChild(linkA);
    title.appendChild(price);
};
