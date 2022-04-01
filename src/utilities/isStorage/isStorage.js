const IsStorage = () =>{
    const hasItem = localStorage.getItem("carts");
    let storageCarts;
    if (hasItem) {
      storageCarts = JSON.parse(hasItem);
    } else {
      storageCarts = [];
    }
    return storageCarts;
}
export default IsStorage;