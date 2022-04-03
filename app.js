const express = require('express')
const mongoose = require('mongoose')

const router = require('./routes/Product-routes')

// MiddleWares
const app = express();

app.use(express.json());
// Routes

app.use('/products', router);

// app.get("/", (req, res) => {
//     res.send("My dataBase");
// })

// Conection and PORT

mongoose.connect(
    "mongodb+srv://admin:3ogYuyWFDYe95I5M@cluster0.uhkxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to the Database")
    }).catch(err => {
        console.log(err);
    })

// app.listen(5000);
const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server Started on Port ${port}`));