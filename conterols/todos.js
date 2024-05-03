let todo=require('../models/productSchema')

exports.postSong=async(req,res)=>{

  try
  {
  let {Artist,songName}=req.body;

  let resp= await todo.create({Artist,songName})

  res.status(200).json({
    success:true,
    data:resp,
    message:"your song is create is sccuessfully"
  })
  



  }

catch(err)
{
res.status(500)
.json({
  success:false,
  data:"not create song some problem",
  message:err.message
})



}

}



// to fatch all data
let todo1=require('../models/productSchema')

exports.getalldata=async(req,res)=>{
try{

let {Artist,songName}=req.body;

let respo= await todo1.find({})

res.status(200).json({
  success:true,
  data:respo,
  message:"you can see your all data "

})








}





catch(err)
{

res.status(500)
.json({
  success:false,
  data:"server internal failt",
  message:err.message
})

}


}



// get 1 on data using in id

let todo3=require('../models/productSchema');

exports.get1data=async(req,res)=>{

try
{
  let {Artist,songName}=req.body;
  let id=req.params.id;
  
  let result= await todo3.findById({_id:id})
    
if(!result){
  res.status(404)
  .json({
    success:false,
    data:"your is not find in database"
  })
}

res.status(200).json({
  success:true,
  data:result,
  message:`see your selected data id is->${id}`
})










}

catch(err)
{

res.status(500)
.json({
  success:false,
  data:"external intenal fault",
  message:err.message
})


}




}
/// to update the data by using id



let todo4=require('../models/productSchema')

exports.updatedata=async(req,res)=>{

try{

let {Artist,songName}=req.body;

let id=req.params.id;

let update= await todo4.findByIdAndUpdate({_id:id},
  
  
  {Artist,songName,updateAt:Date.now()})

res.status(200)
.json({
  success:true,
  data:update,
  message:"your data is updated"
})



}



catch(err)

{
res.status(500)
.json({
  success:false,
  data:"your data is not updted",
  message:err.message
})


}



}


// delete the data


let todo6=require('../models/productSchema')

exports.deletedata=async(req,res)=>{

try
{


  let {Artist,songName}=req.body;

  let id=req.params.id;
  await todo6.findByIdAndDelete({_id:id})

    res.status(200)
    .json({
      data:"your data is successfully deleted",
      message:`the deleted data id is->${id}`
    })

     





}




catch(err)
{

  res.status(500)
  .json({
    data:"your data is not deleted",
    message:err.message


  })
}




}
