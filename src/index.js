const UserProductos = require("./UserProductos");
const users = new UserProductos();

let user ={
     first_name:"camila",
     last_name:"leon",
     nationality:"argentina",
     favoritecolor:"bordo",
 }.then(result=>console.log(result));

// users.getAll().then(result=>console.log(result))
// users.getById(2).then(result=>console.log(result));