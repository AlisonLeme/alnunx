import UsersModel from '../../src/models/users'
import dbConnect from '../../src/utils/dbConnect'
import {
    crypto
} from '../../src/utils/password'

const get = async (req, res) => {
    await dbConnect()
    const users = await UsersModel.find()
    res.status(200).json({
        success: true,
        users
    })
}

const post = async (req, res) => {
    // pegar os dados que vem no req
    // conectar no banco de dados
    // criptografar a senha
    // salvar no banco
    // responder sucesso

    const {
        name,
        email,
        password
    } = req.body

    await dbConnect()

    const passwordCrypto = await crypto(password)

    const user = new UsersModel({
        name,
        email,
        password: passwordCrypto
    })
    user.save()

    res.status(201).json({
        success: true
    })
}

export {
    get,
    post
}