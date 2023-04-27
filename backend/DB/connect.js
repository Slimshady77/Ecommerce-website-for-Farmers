const mongoose= require('mongoose');

const Db=process.env.DATABASE;
mongoose.connect(Db,{
   useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=> console.log('connection successful!'))
.catch((err)=> console.log(err));

module.exports=Db;