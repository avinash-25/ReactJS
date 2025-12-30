import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    roleName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        // enum:["admin","premiumUser","user"]
        enum: {
            values: ["admin", "premiumUser", "user"],
            message: `{VALUE} is not supported`
        },
        default: "user"
    },
    permissions: {
        type: [String],
        default: []
    }
})

export default mongoose.model('Role', roleSchema);