window.addEventListener("load", async function () {
    const prodUrl = 'https://fakestoreapi.com/products';
    // const products = document.getElementById('products');

    const res = await fetch(prodUrl);
    const allProducts = await res.json();
    const section = document.querySelector('.details');
    // const shopCart = document.getElementById('cart');
    const cart = document.getElementById('myCart');
    const shopCartDiv = document.getElementById('cartSlot');
    const logBtn = document.getElementById('logBtn');
    const modal = document.getElementById('id01');
    logBtn.addEventListener('click', (e) => { modal.style.display = 'block' });

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    window.addEventListener('click', function (event) {
        // console.dir(event);
        if (event.target == modal) {
            modal.style.display = "none";
        };
    });
    const subBtn = document.getElementById('submit-btn');

    subBtn.addEventListener('click', () => {
        let myHeaders = new Headers();
        myHeaders.set('Content-Type', 'application/json');
        console.dir(myHeaders);
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res => res.json())
            .then(json => console.log(json))
    });

    allProducts.forEach(item => {
        makeCard(item, section);
    });

    function makeCard(item, where) {
        // card details and styles
        const prodD = document.createElement('div');
        prodD.classList.add('card');

        const categoryP = document.createElement('p');
        categoryP.textContent = item.category;
        categoryP.classList.add('hide');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('prodImg');
        const detailImg = document.createElement('img');
        detailImg.classList.add('prodI');
        detailImg.src = item.image;
        imgDiv.appendChild(detailImg);

        const detailTitle = document.createElement('h3');
        detailTitle.textContent = item.title;

        detailTitle.classList.add('titles');

        const detailUser = document.createElement('p');
        detailUser.textContent = item.description;

        const detailPrice = document.createElement('h4');
        detailPrice.textContent = `$${item.price}`;

        const addTo = document.createElement('button');
        addTo.setAttribute('type', 'button');
        addTo.classList.add('add-btn');
        addTo.textContent = 'Add to cart';

        prodD.append(imgDiv, detailTitle, detailUser, detailPrice, addTo, categoryP);
        where.appendChild(prodD);


    };

    const category = document.getElementById('categories');
    const list = document.getElementById('listing');


    category.addEventListener("click", (ev) => {
        let myTarget = ev.target.textContent
        let children = list.children;
        console.log(ev)
        console.dir(children);
        let chillins = Array.from(children);
        console.dir(chillins)
        chillins.forEach((card) => {
            if (myTarget == 'All' || card.children[5].textContent == myTarget.toLowerCase()) {
                card.style.display = 'grid';
            }
            else if (ev.target.tagName == 'LI') {
                card.style.display = 'none';
            }
        });

    });
    // const slot = document.getElementById('cart-slot');
    let price;
    const slot = [];
    section.addEventListener("click", (ev) => {
        if (ev.target.type == 'button') {
            // slot.appendChild(ev.target.parentElement);
            slot.push(ev.target.parentElement);
            console.log(slot)
            price = 0;
            slot.forEach((item) => {
                let ns = parseFloat(item.children[3].textContent.slice(1));
                price = price + ns;
            });
        };
        console.dir(slot);
        console.dir(price);
    });

    function showCart(ev) {
        console.dir(ev);
        const iter = allProducts.values();
        console.log(iter)
        console.dir(slot);
        for (const value of iter) {
            slot.forEach((item) => {
                console.log(value)
                // console.dir(value.title, item.children[1].textContent);
                if (value.title == item.children[1].textContent) {
                    console.log('Found', value)
                    // console.dir(value.title, item.children[1].textContent);
                    makeCard(value, shopCartDiv);
                };
            });
        };
        shopCartDiv.style.display = 'flex';
        console.dir(shopCartDiv);
    };
    cart.addEventListener('click', showCart);

});//end load window



