const mongoose=require('mongoose');
const bcrypt= require('bcryptjs');
const jwt=require('jsonwebtoken');



const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mob:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    },
    cpass:{
        type: String,
        required: true
    },
   messages:[
    {
        name:{
            type: String,
            required: true
        },
        mob:{
            type:String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        message:{
            type:String,
            required:true
        }  ,
    }
   ],
   tokens:[{
    token:{
        type:String,
        required: true
   
 } 
}]
});


// create hash password
userSchema.pre('save',async function(next){
    if(this.isModified('pass')){
        this.pass= await bcrypt.hash(this.pass, 10);
        this.cpass= await bcrypt.hash(this.cpass, 10);
    }
    next();
})

// create Authentic token
// userSchema.methods.generateAuthToken=async function(){
//     try{
//         let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
//         this.tokens=this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     }catch(err)
//     {
//         console.log(err);
//     }
// }
userSchema.methods.generateAuthToken=async function()
{
    try{
        let token=jwt.sign({_id:this._id},
            process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({ token:token});

        await this.save();
        return token;
    }catch(error)
    {
        console.log(error);
    }
}


//  create ContactUS Page message data

userSchema.methods.addMessage = async function(name, email, mob, message)
{
    try{
        this.messages=this.messages.concat({name,email,mob,message});
        await this.save();
        return this.message;
    }catch(error){
        console.log(error);
    }
    
}

const userModel=mongoose.model('usersignup', userSchema)
module.exports=userModel