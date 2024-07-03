document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    //HEADER
    function renderHeader() {
        const header = document.createElement('header');
        header.textContent = 'InmobiliariaRG';
        app.appendChild(header);
    }

    // NAVEGADOR
    function renderNav() {
        const nav = document.createElement('nav');
     
        
        const navMenu = document.createElement('div');
        navMenu.className = 'nav-menu';
    
        const homeButton = document.createElement('button');
        homeButton.textContent = 'Home';
        homeButton.addEventListener('click', renderHome);
    
        const cartButton = document.createElement('button');
        cartButton.textContent = 'Carrito';
        cartButton.addEventListener('click', renderCart);
    
        const aboutButton = document.createElement('button');
        aboutButton.textContent = 'Sobre Nosotros';
        aboutButton.addEventListener('click', renderAbout);
    
        const contactButton = document.createElement('button');
        contactButton.textContent = 'Contacto';
        contactButton.addEventListener('click', renderContact);
    
        const themeSwitch = document.createElement('label');
        themeSwitch.className = 'switch';

        const sunIcon = '<span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>';
        const moonIcon = '<span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>';

        themeSwitch.innerHTML = `
            ${moonIcon}
            
            <input type="checkbox" class="input">
            <span class="slider"></span>
            
            ${sunIcon}
        `;

        const themeCheckbox = themeSwitch.querySelector('.input');

        themeCheckbox.addEventListener('change', function() {
            document.body.classList.toggle('dark-theme', this.checked);
            // Guardar el estado del tema en localStorage
            localStorage.setItem('theme', this.checked ? 'dark' : 'light');
        });

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeCheckbox.checked = true;
        }


    
        // Botones al menú de navegación
        navMenu.appendChild(homeButton);
        navMenu.appendChild(cartButton);
        navMenu.appendChild(aboutButton);
        navMenu.appendChild(contactButton);
        navMenu.appendChild(themeSwitch); 
    
        
        nav.appendChild(navMenu);
        app.appendChild(nav);
    }


// FOOTER
    function RenderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'pie-pagina';

    const grupo1 = document.createElement('div');
    grupo1.className = 'grupo-1';

    const box1 = document.createElement('div');
    box1.className = 'box';
    const figure = document.createElement('figure');
    const aLogo = document.createElement('a');
    aLogo.href = '../index.html';
    const imgLogo = document.createElement('img');
    imgLogo.src = './img/logo.png';
    imgLogo.alt = 'logo de footer';
    aLogo.appendChild(imgLogo);
    figure.appendChild(aLogo);
    box1.appendChild(figure);
    grupo1.appendChild(box1);

    const box2 = document.createElement('div');
    box2.className = 'box';
    const h2SobreNosotros = document.createElement('h2');
    h2SobreNosotros.textContent = 'SOBRE NOSOTROS';
    const p1 = document.createElement('p');
    p1.textContent = 'Somos una inmobiliaria comprometida en ofrecer las mejores propiedades a nuestros clientes.';
    const p2 = document.createElement('p');
    p2.textContent = 'Nuestra misión es ayudar a las personas a encontrar la casa de sus sueños.';
    box2.appendChild(h2SobreNosotros);
    box2.appendChild(p1);
    box2.appendChild(p2);
    grupo1.appendChild(box2);

    const box3 = document.createElement('div');
    box3.className = 'box';
    const h2Siguenos = document.createElement('h2');
    h2Siguenos.textContent = 'SIGUENOS';
    const redSocial = document.createElement('div');
    redSocial.className = 'red-social';
    
    const socialMedia = [
        {name:'whatsapp', URL:'https://web.whatsapp.com/'},
        {name:'facebook', URL:'https://www.facebook.com/?locale=es_LA'},
        {name:'twitter', URL:'https://x.com/home?lang=es'},
        {name:'instagram', URL:'https://www.instagram.com/'},

    ];
    socialMedia.forEach(media => {
        const a = document.createElement('a');
        a.href = `${media.URL}`;
        a.target="_blank"
        a.className = `fa fa-${media.name} `;
        redSocial.appendChild(a);
    });
    box3.appendChild(h2Siguenos);
    box3.appendChild(redSocial);
    grupo1.appendChild(box3);

    footer.appendChild(grupo1);

    const grupo2 = document.createElement('div');
    grupo2.className = 'grupo-2';
    const small = document.createElement('small');
    const currentYear = new Date().getFullYear();
    small.innerHTML = `&copy; ${currentYear} <b>InmobiliariaRG</b> Todos los derechos reservados`;
    grupo2.appendChild(small);

    footer.appendChild(grupo2);

    document.getElementById('footer').appendChild(footer);
    }






// ---------------------------------------------Separacion - views - cuerpo HTML -------------------------------------------------------------------------------------------------------










    // seccion view home
    function renderHome() {
        clearContainer();
        const container = document.createElement('div');
        container.className = 'container';

        const houses = [
            { id: 1, name: 'Casa en la playa', price: 300000, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGJlYWNoJTIwaG91c2V8ZW58MHx8fHwxNjEyODU2NjUx&ixlib=rb-1.2.1&q=80&w=400' },
            { id: 2, name: 'Casa en la ciudad', price: 500000, image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-18095439/original/4eea5c77-d404-47aa-9f70-0c315659e9b4.jpeg?im_w=1200' },
            { id: 3, name: 'Casa en el campo', price: 200000, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGZpZWxkfGVufDB8fHx8MTYxMjg1Njg0NA&ixlib=rb-1.2.1&q=80&w=400' },
            { id: 4, name: 'Casa moderna', price: 450000, image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1126848122961632696/original/839bcea3-2a06-4309-b604-b00da160420e.jpeg?im_w=1200' },
            { id: 5, name: 'Casa de lujo', price: 750000, image: 'https://a0.muscache.com/im/pictures/a04eda8a-1915-48be-8d7c-041c9158afa8.jpg?im_w=1200' },
            { id: 6, name: 'Casa rústica', price: 350000, image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1055292733238240562/original/4f1d8e18-72c8-4b0f-9821-1da87742c724.jpeg?im_w=1200' },
            { id: 7, name: 'Casa en la montaña', price: 400000, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fG1vdW50YWluJTIwaG91c2V8ZW58MHx8fHwxNjEyODU2ODMw&ixlib=rb-1.2.1&q=80&w=400' },
            { id: 8, name: 'Casa en el lago', price: 600000, image: 'https://a0.muscache.com/im/pictures/e7e9e1c5-c125-48d4-9814-10bc1f373150.jpg?im_w=720' },
            { id: 9, name: 'Casa en el desierto', price: 500000, image: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-792714990290805676/original/cfa0ed06-25c5-4f41-995f-df5d0596f48b.jpeg?im_w=1200' },
            { id: 10, name: 'Casa colonial', price: 550000, image: 'https://a0.muscache.com/im/pictures/miso/Hosting-43403945/original/02fd85af-475d-44d8-a585-c1cc9b02df7a.jpeg?im_w=1200' },
            { id: 11, name: 'Casa pequeña', price: 19500, image: 'https://a0.muscache.com/im/pictures/18ad9dfa-cc1a-4a0f-81d6-572e68368c91.jpg?im_w=1200' },
            { id: 12, name: 'Casa con jardín', price: 40300, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHxob3VzZSUyMGdhcmRlbmV8ZW58MHx8fHwxNjEyODU3ODY4&ixlib=rb-1.2.1&q=80&w=400' },
            { id: 13, name: 'Casa en la playa', price: 300000, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGJlYWNoJTIwaG91c2V8ZW58MHx8fHwxNjEyODU2NjUx&ixlib=rb-1.2.1&q=80&w=400' },
            { id: 14, name: 'Casa en la ciudad', price: 500000, image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-18095439/original/4eea5c77-d404-47aa-9f70-0c315659e9b4.jpeg?im_w=1200' },
            { id: 15, name: 'Casa en el campo', price: 200000, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGZpZWxkfGVufDB8fHx8MTYxMjg1Njg0NA&ixlib=rb-1.2.1&q=80&w=400' },
            { id: 16, name: 'Casa moderna', price: 450000, image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1126848122961632696/original/839bcea3-2a06-4309-b604-b00da160420e.jpeg?im_w=1200' },
            { id: 17, name: 'Casa de lujo', price: 750000, image: 'https://a0.muscache.com/im/pictures/a04eda8a-1915-48be-8d7c-041c9158afa8.jpg?im_w=1200' },
            { id: 18, name: 'Casa rústica', price: 350000, image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1055292733238240562/original/4f1d8e18-72c8-4b0f-9821-1da87742c724.jpeg?im_w=1200' },
            { id: 19, name: 'Casa en la montaña', price: 400000, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fG1vdW50YWluJTIwaG91c2V8ZW58MHx8fHwxNjEyODU2ODMw&ixlib=rb-1.2.1&q=80&w=400' },
            { id: 20, name: 'Casa en el lago', price: 600000, image: 'https://a0.muscache.com/im/pictures/e7e9e1c5-c125-48d4-9814-10bc1f373150.jpg?im_w=720' },
            { id: 21, name: 'Casa en el desierto', price: 500000, image: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-792714990290805676/original/cfa0ed06-25c5-4f41-995f-df5d0596f48b.jpeg?im_w=1200' },
            { id: 22, name: 'Casa colonial', price: 550000, image: 'https://a0.muscache.com/im/pictures/miso/Hosting-43403945/original/02fd85af-475d-44d8-a585-c1cc9b02df7a.jpeg?im_w=1200' },
            { id: 23, name: 'Casa pequeña', price: 19500, image: 'https://a0.muscache.com/im/pictures/18ad9dfa-cc1a-4a0f-81d6-572e68368c91.jpg?im_w=1200' },
            { id: 24, name: 'Casa con jardín', price: 40300, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHxob3VzZSUyMGdhcmRlbmV8ZW58MHx8fHwxNjEyODU3ODY4&ixlib=rb-1.2.1&q=80&w=400' }
        
        ];

        houses.forEach(house => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${house.image}" alt="${house.name}">
                <h3 class="h3-card" >${house.name}</h3>
                <p class="p-card" >Precio: $${house.price}</p>

                <div class="boton-div">
                    <button data-id="${house.id}" class="btn btn-primary botonn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/> </svg> Agregar al carrito</button>
                </div>
                
            `;
            card.querySelector('button').addEventListener('click', () => addToCart(house));
            container.appendChild(card);
        });

        app.appendChild(container);
    }



    // seccion view carrito
    function renderCart() {
        clearContainer();
        const container = document.createElement('div');
        container.className = 'container cart-container';
    
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            const emptyCartMsg = document.createElement('p');
            emptyCartMsg.textContent = 'No hay casas en el carrito.';
            emptyCartMsg.className = 'empty-cart-msg';
            container.appendChild(emptyCartMsg);
        } else {
            let total = 0;
    
            const cartItemsContainer = document.createElement('div');
            cartItemsContainer.className = 'cart-items';
    
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
    
                const card = document.createElement('div');
                card.className = 'card cart-card';
    
                const imageContainer = document.createElement('div');
                imageContainer.className = 'image-container';
    
                const image = document.createElement('img');
                image.src = item.image;
                image.alt = item.name;
                imageContainer.appendChild(image);
    
                const quantityBadge = document.createElement('div');
                quantityBadge.className = 'quantity-badge';
                quantityBadge.textContent = item.quantity;
                imageContainer.appendChild(quantityBadge);
    
                card.appendChild(imageContainer);
    
                const details = document.createElement('div');
                details.className = 'card-details';
    
                const itemName = document.createElement('h3');
                itemName.textContent = item.name;
    
                const itemPrice = document.createElement('p');
                itemPrice.textContent = `Precio: $${itemTotal}`;
    
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Eliminar del carrito';
                removeButton.className = 'btn-carrito btn-danger';
                removeButton.addEventListener('click', () => removeFromCart(item));
    
                // Creación del icono de eliminar (SVG)
                const trashIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                trashIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                trashIcon.setAttribute('width', '16');
                trashIcon.setAttribute('height', '16');
                trashIcon.setAttribute('fill', 'currentColor');
                trashIcon.setAttribute('class', 'bi bi-trash3');
                trashIcon.setAttribute('viewBox', '0 0 16 16');
                trashIcon.innerHTML = `<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>`;
    
                removeButton.appendChild(trashIcon);
    
                details.appendChild(itemName);
                details.appendChild(itemPrice);
                details.appendChild(removeButton);
    
                card.appendChild(details);
                cartItemsContainer.appendChild(card);
            });
    
            const totalContainer = document.createElement('div');
            totalContainer.className = 'cart-summary';
    
            const totalText = document.createElement('p');
            totalText.className = 'cart-p';
            totalText.textContent = `Total a pagar: $${total}`;

            const divContenedorBtns = document.createElement('div');
            divContenedorBtns.className = 'div-btns-contenedor';

            const pagarButton = document.createElement('button');
            pagarButton.textContent = 'Pagar';
            pagarButton.className = 'btn-pagar btn-success';
            pagarButton.addEventListener('click', () => handlePagar(cart));
    
            const emptyCartButton = document.createElement('button');
            emptyCartButton.textContent = 'Eliminar todo';
            emptyCartButton.className = 'btn-empty-cart btn-danger';
            emptyCartButton.addEventListener('click', emptyCart);
    
            totalContainer.appendChild(totalText);
            totalContainer.appendChild(divContenedorBtns);
            divContenedorBtns.appendChild(pagarButton)
        
            divContenedorBtns.appendChild(emptyCartButton);
    
            container.appendChild(cartItemsContainer);
            container.appendChild(totalContainer);
        }
    
        app.appendChild(container);
    }
    
    function handlePagar(houses) {
        const totalHouses = houses.reduce((sum, house) => sum + house.quantity, 0);
        let title = `¡Estas seguro de comprar ${totalHouses} casa${totalHouses > 1 ? 's' : ''}!`;
    
        Swal.fire({
            title: title,
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Comprar!",
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('cart');
    
                const houseNames = houses.map(house => `${house.name} (x${house.quantity})`).join(", ");
    
                Swal.fire({
                    title: "¡Comprado!",
                    text: `Compraste ${houseNames}`,
                    icon: "success"
                });
    
                renderCart();
            } else {
                Swal.fire({
                    title: "¡Pago cancelado!",
                    text: "Tu compra fue cancelada.",
                    icon: "error"
                });
            }
        });
    }
    
    function emptyCart() {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar todo!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('cart');
                Swal.fire({
                    title: "¡Eliminado!",
                    text: "Tu carrito está vacío.",
                    icon: "success"
                });
                renderCart();
            }
        });
    }
    
    
    
    function addToCart(house) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => item.id === house.id);
    
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            house.quantity = 1;
            cart.push(house);
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
        Swal.fire({
            title: `${house.name} se agregó al carrito!`,
            icon: 'success',
            confirmButtonText: 'Volver',
            footer: '<span class="rojo">Esta información es importante!</span>',
            timer: 10000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
        });
    }
    




 // seccion about 
     function renderAbout() {
        clearContainer();
        const container = document.createElement('div');
        container.className = 'container';
    
        container.innerHTML = `
            <section id="about-intro">
                <h3>Sobre Nosotros</h3>
                <p>Somos una inmobiliaria comprometida en ofrecer las mejores propiedades a nuestros clientes.</p>
                <p>Nuestra misión es ayudar a las personas a encontrar la casa de sus sueños.</p>
                <p>Con años de experiencia en el mercado, garantizamos un servicio de calidad y transparencia.</p>
            </section>
            
            <section id="our-team">
                <h3>Nuestro Equipo</h3>
                <p>Contamos con un equipo profesional y dedicado que trabaja para satisfacer las necesidades de nuestros clientes.</p>
                <div class="team-members">
                    <div class="team-member">
                        <img src="./img/persona2.png" alt="Miembro del equipo">
                        <h4>John Doe</h4>
                        <p>Agente inmobiliario con más de 10 años de experiencia en el mercado.</p>
                    </div>
                    <div class="team-member">
                        <img src="./img/persona.png" alt="Miembro del equipo">
                        <h4>Jane Smith</h4>
                        <p>Especialista en ventas y atención al cliente, comprometida con la satisfacción total.</p>
                    </div>
                </div>
            </section>
    
            <section id="why-choose-us">
                <h3>¿Por qué Elegirnos?</h3>
                <ul>
                    <li>Amplia experiencia en el mercado inmobiliario.</li>
                    <li>Compromiso con la satisfacción del cliente.</li>
                    <li>Variedad de propiedades para todos los gustos y presupuestos.</li>
                    <li>Transparencia y profesionalismo en cada transacción.</li>
                </ul>
            </section>
    
            
        `;
    
        app.appendChild(container);
    }





    // seccion view contacto
    function renderContact() {
        clearContainer();
        
        const container2 = document.createElement('div');
        container2.className = 'container';
    
        const h1 = document.createElement('h1');
        h1.className = 'h1-contact';
        h1.innerHTML = 'Contactanos';
    
        const divPadre = document.createElement('div');
        divPadre.className = 'div-padre';
    
        const form = document.createElement('form');
        form.className = 'form-form';
        form.innerHTML = `
            <input type="text" id="name" placeholder="Nombre" required class="form-control">
            <input type="email" id="email" placeholder="Correo Electrónico" required class="form-control">
            <textarea id="message" placeholder="Mensaje" required class="form-control textarea"></textarea>
            <div class="div-btn-form">
                <button type="submit" class="btn-form btn-primary">Enviar</button>
            </div>
        `;
        form.addEventListener('submit', handleContactSubmit);
    
        divPadre.appendChild(h1);
        divPadre.appendChild(form);
        container2.appendChild(divPadre);
        app.appendChild(container2);
    }
    
    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
    function handleContactSubmit(event) {
        
        const name = document.getElementById('name').value;
       

        event.preventDefault();
        Swal.fire({
            title: `${name} tu mensaje fue enviado!`,
            icon: 'success',
            confirmButtonText: 'Volver',
            footer: '<span class="rojo"> Esta  informacion es importante!</span>',
            timer: 10000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            
        });


        // Limpia el formulario después de enviarlo
        clearForm();
    }
    function removeFromCart(house) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => item.id === house.id);
    
        if (existingItemIndex !== -1) {
            if (cart[existingItemIndex].quantity > 1) {
                cart[existingItemIndex].quantity -= 1;
            } else {
                cart.splice(existingItemIndex, 1);
            }
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    
        Swal.fire({
            title: `${house.name} se eliminó del carrito!`,
            icon: 'error',
            confirmButtonText: 'Volver',
            footer: '<span class="rojo">Esta información es importante!</span>',
            timer: 10000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
        });
    }



    function clearContainer() {
        const container = document.querySelector('.container');
        if (container) {
            container.remove();
        }
    }



    


   // Aqui corro la app
    renderHeader();
    renderNav();
    renderHome(); 
    RenderFooter()
});
