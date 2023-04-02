function getCart() {
    if (localStorage.getItem("cartItems"))
        return JSON.parse(localStorage.getItem("cartItems"));

    localStorage.setItem("cartItems", JSON.stringify([]));
    return [];
}


// id: product.id,
// title: product.title,
// price: product.price,
// rating: product.rating,
// quantity: 1,
// img: product.image,
// date: getDeliveryDate()
function addItemToCart({
    id,
    title,
    price,
    rating,
    quantity,
    
    img,
    date,
}) {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    // console.log(cart);
    cart.push({ id, title, price, rating, quantity, img, date });
    // console.log(cart);
    localStorage.setItem("cartItems", JSON.stringify(cart));
}

function removeItemFromCart(id) {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    const tempCart = cart.filter((item) => item.id != id);
    localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

function reduceItemQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    const tempCart = cart.map((item) => {
        if (item.id == id && item.quantity > 1) item.quantity -= 1;

        return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

function addItemQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    const tempCart = cart.map((item) => {
        if (item.id == id) {
            item.quantity += 1;
        }

        return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

function getOrders() {
    if (localStorage.getItem("orderItems"))
        return JSON.parse(localStorage.getItem("orderItems"));
}

function addOrderItem({
    id,
    name,
    price,
    rating,
    discription,
    quantity,
    img,
    date,
}) {
    const orders = JSON.parse(localStorage.getItem("orderItems")) || [];

    let flag = true;

    orders.map((item) => {
        if (item.id == id) flag = false;
    });

    if (flag) {
        orders.push({ id, name, price, rating, discription, quantity, img, date });
        localStorage.setItem("orderItems", JSON.stringify(orders));
    }
}

function addOrderArr(arr) {
    const orders = JSON.parse(localStorage.getItem("orderItems")) || [];
    orders.push(...arr);
    localStorage.setItem("orderItems", JSON.stringify(orders));
}

function getWishlist() {
    if (localStorage.getItem("wishlist"))
        return JSON.parse(localStorage.getItem("wishlist"));

    localStorage.setItem("wishlist", JSON.stringify([]));
    return [];
}

function addItemToWishlist({ id, name, price, img, rating }) {
    const list = getWishlist();

    let flag = true;

    console.log({ id, name, price, img, rating });

    list.map((item) => {
        if (item?.id == id) {
            flag = false;
        }
    });

    if (flag);
    list.push({ id, name, price, img, rating });

    localStorage.setItem("wishlist", JSON.stringify(list));
}

function removeItemFromWishlist(id) {
    const list = getWishlist();
    const tempList = list.filter((item) => item?.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(tempList));
}

function itemPresentInWishlist(id) {
    const list = getWishlist();
    let flag = false;

    list.map((item) => {
        if (item?.id == id) flag = true;
    });

    return flag;
}

export {
    getCart,
    addItemToCart,
    removeItemFromCart,
    addItemQuantity,
    reduceItemQuantity,
    getOrders,
    addOrderItem,
    addOrderArr,
    getWishlist,
    addItemToWishlist,
    removeItemFromWishlist,
    itemPresentInWishlist,
};
