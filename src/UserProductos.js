const fs = require('fs');

const pathToUsers = "./files/users.json"
class UserProductos{
    createUser = async(user) =>{
        //Validations
        if(!user.first_name||!user.last_name||!user.nationality||!user.favoritecolor) return {status:"error",message:"Incomplete fields"}
        try{
            if(fs.existsSync(pathToUsers)){
                let users = await getData();
                if(users.length===0){
                    let newUser = Object.assign({id:1},user);
                    user['courses'] = [];
                    user['documents'] = [];
                    await fs.promises.writeFile(pathToUsers,JSON.stringify([newUser],null,2))
                    return {status:"success",message:"User created"}
                }else{
                    let id = users[users.length-1].id+1;
                    let newUser = Object.assign({id:id},user);
                    user['courses'] = [];
                    user['documents'] = [];
                    users.push(newUser);
                    await fs.promises.writeFile(pathToUsers,JSON.stringify(users,null,2));
                    return {status:"success",message:"User created"}
                }
            }else{
                let newUser = Object.assign({id:1},user);
                    user['courses'] = [];
                    user['documents'] = [];
                    await fs.promises.writeFile(pathToUsers,JSON.stringify([newUser],null,2))
                    return {status:"success",message:"User created"}
            }
        }catch(error){
            return {status:"error",message:error.message}
        }
    }
    getAll = async() =>{
        try{
            if(!fs.existsSync(pathToUsers)) return {status:"success",payload:[]}
            let users = await getData();
            return {status:"success",payload:users}
        }catch(error){
            return {status:"error",message:error.message}
        }
    }
    getById = async(id) =>{
        try{
            if(!fs.existsSync(pathToUsers)) return {status:"error",message:"user not found"}
            let users = await getData();
            let user = users.find(user=>user.id===id)
            if(!user) return {status:"error",message:"user not found"}
            return {status:"success",payload:user}
        }catch(error){
            return {status:"error",message:error.message}
        }
    }
}
module.exports = UserProductos;