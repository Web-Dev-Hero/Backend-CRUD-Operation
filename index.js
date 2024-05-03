let express=require('express');

let app=express();

let dbconnect=require('./config/database');

require('dotenv').config();

let router=require('./routes/router');

app.use(express.json())

let port=process.env.PORT || 6000

app.use('/api/v1',router);


app.listen(port,()=>{
  console.log(`your server is runing portno->${port}`)
})

dbconnect()

app.get('/',(req,res)=>{
  res.send('lets start the right now')
})