let mongoose=require('mongoose')
let Schema=mongoose.Schema;

let todoSchema=new Schema({

Artist:{
  type:String,
  required:true,
  maxLength:50,
},
songName:{
  type:String,
  required:true,
  maxLength:50,

},

createAt:{
  type:Date,
  required:true,
  default:Date.now(),
},
updateAt:{
  type:Date,
  required:true,
  default:Date.now()
}




})

module.exports=mongoose.model('song',todoSchema)