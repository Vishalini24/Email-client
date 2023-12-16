import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './src/config/mongoose.js';

import mailRouter from './src/routes/mail.routes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

//view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");


app.use('/emails',mailRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    connectDb();
})