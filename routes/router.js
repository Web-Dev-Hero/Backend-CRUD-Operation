let express=require('express');
let router=express.Router();

let {postSong,getalldata,get1data,updatedata,deletedata}=require('../conterols/todos')


router.post('/post',postSong);
router.get('/getall',getalldata)
router.get('/get1/:id',get1data)
router.put('/update/:id',updatedata)
router.delete('/del/:id',deletedata)


module.exports=router;