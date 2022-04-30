import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O campo é "nome" obrigatório.']
    },
    email: {
        type: String,
        required: [true, 'O campo é "email" obrigatório.']
    },
    password: {
        type: String,
        required: [true, 'O campo é "senha" obrigatório.']
    },
})

export default mongoose.model.users || mongoose.model('users', schema)