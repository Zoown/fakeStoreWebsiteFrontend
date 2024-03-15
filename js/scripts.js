function fetchProducts(handleProducts) {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            handleProducts(products);
        })
        .catch(error => console.error('Error:', error));
}

fetchProducts(products => {
        let row = document.querySelector('.row.gx-4.gx-lg-5.row-cols-2.row-cols-md-3.row-cols-xl-4.justify-content-center');

        products.forEach(product => {
            // Skapa nya element
            let col = document.createElement('div');
            let link = document.createElement('a');
            let card = document.createElement('div');
            let img = document.createElement('img');
            let body = document.createElement('div');
            let center = document.createElement('div');
            let title = document.createElement('h5');
            let price = document.createElement('p');
            let footer = document.createElement('div');
            let footerCenter = document.createElement('div');
            let button = document.createElement('div');

            // Ange attribut och innehåll
            col.className = 'col-12 col-sm-6 col-lg-4 mb-5';
            link.href = 'products.html?id='+ product.id// Ändra här för att skapa en unik länk för varje produkt
            //link.href = `products.html` + '?' + encodeURIComponent(product.title); // Ändra här för att skapa en unik länk för varje produkt
            card.className = 'card h-100';
            img.className = 'card-img-top';
            img.src = product.image;
            img.alt = product.title;
            img.style.height = '300px';
            img.style.width = '100%';
            img.style.objectFit = 'cover';
            body.className = 'card-body p-4';
            center.className = 'text-center';
            title.className = 'fw-bolder';
            title.textContent = product.title;
            price.textContent = `$${product.price}`;
            footer.className = 'card-footer p-4 pt-0 border-top-0 bg-transparent';
            footerCenter.className = 'text-center';
            button.className = 'btn btn-outline-dark mt-auto';
            button.textContent = 'Add to cart';

            // Bygg upp HTML-strukturen
            center.appendChild(title);
            center.appendChild(price);
            body.appendChild(center);
            footerCenter.appendChild(button);
            footer.appendChild(footerCenter);
            card.appendChild(img);
            card.appendChild(body);
            card.appendChild(footer);
            link.appendChild(card);
            col.appendChild(link);

            // Lägg till det nya elementet i raden
            row.appendChild(col);
        });
    })
    .catch(error => console.error('Error:', error))

// Hämta produkt-ID:t från URL:en

function getUrlVars() {
    let vars = [], hash;
    let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(let i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        //hash[1].trim().replace("%20",a/g);
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}