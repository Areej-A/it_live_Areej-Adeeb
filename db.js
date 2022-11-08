const mongoose=require('mongoose')

module.exports=()=>{
    const conaction={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
    try {
        mongoose.connect(process.env.DB,conaction)
        console.log('conect successfully');
    } catch (error) {
       console.log(error);
       console.log('could not connect');
    }
}