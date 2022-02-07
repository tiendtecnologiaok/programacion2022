const express = requiere('express');
const app = express();

const server = app.listen(8080,()=>{
    console.log("Listening on port 8080");
})
app.get('/productos',(req,res)=>{
    res.send({productos:
        [
            {
              "nombre":"sillon",
              "precio":"15000",
              "color":"bordo",
              "id":1
            },
            {
              "nombre":"silla",
              "precio":"3000",
              "color":"marron",
              "id":2
            },
            {
              "nombre":"mesa",
              "precio":"5000",
              "color":"negro",
              "id":3
            }
        ]       
    });
});

app.get('/productoRandom',async (req,res)=>{
    let data = await fs.promises.writeFile(pathToUsers,JSON.stringify([newPrductos],null,2))
    let productos= JSON.parse(data)

    let mathRandom = Math.floor(Math.random()*(productos.length)+1)
    console.log(mathRandom)
    return {status:"success",message:"Producto"}
});