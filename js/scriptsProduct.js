
 window.onload = function() {
        // Hämta den valda produkten från localStorage
        let product = JSON.parse(localStorage.getItem('sendToProducts'));

        // Selektor i products.html
        let productContainer = document.querySelector('.row.gx-4.gx-lg-5.align-items-center');

        // Skapa nya element
        let colImg = document.createElement('div');
        let img = document.createElement('img');
        let colInfo = document.createElement('div');
        let sku = document.createElement('div');
        let title = document.createElement('h1');
        let price = document.createElement('div');
        let description = document.createElement('p');
        let inputGroup = document.createElement('div');
        let input = document.createElement('input');
        let button = document.createElement('button');

        // Ange attribut och innehåll
        colImg.className = 'col-md-6';
        img.className = 'card-img-top mb-5 mb-md-0';
        img.src = product.image;
        img.alt = product.title;
        colInfo.className = 'col-md-6';
        sku.className = 'small mb-1';
        sku.textContent = `SKU: ${product.id}`; // Använd produktens ID som SKU
        title.id = 'product-id';
        title.className = 'display-5 fw-bolder';
        title.textContent = product.title;
        price.className = 'fs-5 mb-5';
        price.innerHTML = '$' + product.price;
        description.className = 'lead';
        description.textContent = product.description;
        inputGroup.className = 'd-flex';
        input.className = 'form-control text-center me-3';
        input.id = 'inputQuantity';
        input.type = 'num';
        input.value = '1';
        input.style.maxWidth = '3rem'; //inline css
        button.className = 'btn btn-outline-dark flex-shrink-0';
        button.type = 'button';
        button.innerHTML = '<i class="bi-cart-fill me-1"></i>Add to cart';

        button.addEventListener('click', function(event) {
            event.stopPropagation();
            event.preventDefault();
    
            let selectedProduct = {
                id: product.id,
                title: product.title,
                price: product.price,
            };
        
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.open('cart.html', '_self');
        });

        // Bygg upp HTML-strukturen
        colImg.appendChild(img);
        inputGroup.appendChild(input);
        inputGroup.appendChild(button);
        colInfo.appendChild(sku);
        colInfo.appendChild(title);
        colInfo.appendChild(price);
        colInfo.appendChild(description);
        colInfo.appendChild(inputGroup);
        productContainer.appendChild(colImg);
        productContainer.appendChild(colInfo);

         // Hämta den valda produkten från localStorage
         //let product = JSON.parse(localStorage.getItem('sendToProducts'));
         let productsfromCategory = JSON.parse(localStorage.getItem('productsByCategory'));
     
         // Selektor i products.html
     
         // Skapa upp den valda produkten
         createProductElement(product, productContainer);
     
         // Skapa upp varje relaterad produkt
         productsfromCategory.forEach(relatedProduct => {
             createProductElement(relatedProduct, productContainer);
         });
    };

   // window.onload = function() {
       
    //};
    
    function createProductElement(product, container) {
        // Skapa nya element
        let col = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        let body = document.createElement('div');
        let center = document.createElement('div');
        let title = document.createElement('h5');
        let price = document.createElement('p');
        let footer = document.createElement('div');
        let footerCenter = document.createElement('div');
        let button = document.createElement('button');
    
        // Ange attribut och innehåll
        col.className = 'col mb-5';
        card.className = 'card h-100';
        img.className = 'card-img-top';
        img.src = product.img;
        img.alt = product.title;
        body.className = 'card-body p-4';
        center.className = 'text-center';
        title.className = 'fw-bolder';
        title.textContent = product.title;
        price.textContent = `$${product.price}`;
        footer.className = 'card-footer p-4 pt-0 border-top-0 bg-transparent';
        footerCenter.className = 'text-center';
        button.className = 'btn btn-outline-dark mt-auto';
        button.textContent = 'View options';
    
        // Bygg upp HTML-strukturen
        center.appendChild(title);
        center.appendChild(price);
        body.appendChild(center);
        footerCenter.appendChild(button);
        footer.appendChild(footerCenter);
        card.appendChild(img);
        card.appendChild(body);
        card.appendChild(footer);
        col.appendChild(card);
    
        // Lägg till det nya elementet i produktcontainern
        container.appendChild(col);
    }
    
