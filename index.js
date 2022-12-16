const goods = [
    {
        name:"Cola1",
        price:2,
        count:9,
        id:1,
    },
    {
        name:"Cola2",
        price:3,
        count:8,
        id:2,
    },
    {
        name:"Cola3",
        price:4,
        count:7,
        id:3,
    },
    {
        name:"Cola4",
        price:5,
        count:6,
        id:4,
    },
    {
        name:"Cola5",
        price:6,
        count:5,
        id:5,
    },
    {
        name:"Cola6",
        price:7,
        count:4,
        id:6,
    },
    {
        name:"Cola7",
        price:8,
        count:3,
        id:7,
    },
    {
        name:"Cola8",
        price:9,
        count:2,
        id:8,
    },
    {
        name:"Cola9",
        price:10,
        count:1,
        id:9,
    },
    {
        name:"Cola10",
        price:11,
        count:0,
        id:10,
    },
];
const express = require("express");
const app = express();
app.get('/all', function(request,response){
    response.send(goods);
}); 
app.get('/goods/:id', function(request,response){
    response.send(JSON.stringify(goods.find((item) => item.id == request.params.id)));
})
app.listen(3016,function(){
    console.log("Сервер запущен на порту под номером 3000");
});