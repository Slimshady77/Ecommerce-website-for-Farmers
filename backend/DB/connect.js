const mongoose= require('mongoose');

const Db=process.env.DATABASE ||"mongodb+srv://robincyril24:Robin1993@cluster0.rebkxr7.mongodb.net/test?retryWrites=true&w=majority;"
mongoose.connect(Db,{
   useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=> console.log('connection successful!'))
.catch((err)=> console.log(err));

module.exports=Db; 