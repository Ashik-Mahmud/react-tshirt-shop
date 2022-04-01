import IsStorage from "../isStorage/isStorage";

const deleteItemFromStorage = (id) =>{
    console.log(id);
    const storageItems = IsStorage();
    const withoutDeletedItems = storageItems.filter(items => items.id !== id);
    localStorage.setItem("carts", JSON.stringify(withoutDeletedItems))
}




export { deleteItemFromStorage };

