let mongoose=require('mongoose');

require('dotenv').config()

let dbconnect=()=>{
  mongoose.connect(process.env.DATABASE_URL)


.then(()=>console.log('you connection is sucessfully to mongodb'))

.catch((error)=>{
  console.log('your coonection is failed in mongodb')
})


}

module.exports=dbconnect;