import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,

    },
    age:{
        type:Number,
        require:true

    }
})


const UserModel = mongoose.model("user",UserSchema);

export default UserModel