// const mongoose = require("mongoose");
const dotenv = require('dotenv');
const app = require("./app");

dotenv.config({path:"./config.env"});
const Router = require('./routers/contentRouter');

app.use('/', Router);


dotenv.config({path:"./config.env"});

// mongoose.connect(process.env.DB_LOCAL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then((connection)=>{
//     console.log("Successfully connected to db");
//     app.listen(process.env.PORT),
//     console.log("Successfully connected at port",process.env.PORT);

// })
// .catch((err=>{
//     console.log("Error in conection",err)
    
// }))


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})