window.onload = function() {
    // Hämta den valda produkten från localStorage
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    // Nu kan du använda 'selectedProduct' på din form-sida
    console.log(selectedProduct);

    // Skapa nya element för att visa produktinformation
    let title = document.createElement('h2');
    let price = document.createElement('p');

    // Ange textinnehållet för de nya elementen
    title.textContent = selectedProduct.title;
    price.textContent = 'Price: $' + selectedProduct.price;

    // Lägg till de nya elementen i dokumentet
    let row = document.querySelector('.container.px-4.px-lg-5.mt-5');
    row.appendChild(title);
    row.appendChild(price);
};
