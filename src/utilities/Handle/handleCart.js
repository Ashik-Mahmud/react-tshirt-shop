import IsStorage from "../isStorage/isStorage";

const handleIncreaseCart = (id, setCartQuantity, price) =>{
    setCartQuantity(prev => prev + 1)
    const storageItems = IsStorage();
    const findItems = storageItems.find(items => items.id === id)
    if(findItems){
        findItems.quantity = findItems?.quantity + 1;
        findItems.price = price * findItems?.quantity;
        localStorage.setItem("carts", JSON.stringify(storageItems))
    }
    
}

const handleDecreaseCart = (id, setCartQuantity, price) =>{
    const storageItems = IsStorage();
    const findItems = storageItems.find(items => items.id === id)
    if(findItems && findItems?.quantity > 1){
         setCartQuantity(prev => prev - 1)
        findItems.quantity = findItems?.quantity - 1;
        findItems.price = findItems?.price - price ;
        localStorage.setItem("carts", JSON.stringify(storageItems))
    }
}


const ShowQuantity = (id) =>{
    const storageItems = IsStorage();
    const findItems = storageItems.find(items => items.id === id)
    return findItems?.quantity;
}


const totalCartMoney = () =>{
    const storageItems = IsStorage();
    const totalMoney = storageItems.reduce((acc, item)=> acc + item.price, 0)
    return totalMoney;
}


export { handleIncreaseCart, handleDecreaseCart, ShowQuantity, totalCartMoney };

