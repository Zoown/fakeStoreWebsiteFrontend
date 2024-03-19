let urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get('id');

fetch('https://fakestoreapi.com/products/' + productId)
    .then(res => res.json())
    .then(product => {
        // Hitta rätt plats i dokumentet där du vill lägga till produktinformation
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
        input.style.maxWidth = '3rem';
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
    })
    .catch(error => console.error('Error:', error));
