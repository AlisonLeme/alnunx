import nextConnect from 'next-connect'
import { post } from '../../src/controllers/products'

const route = nextConnect()

route.post(post)

export default route

// desativando o body parser para essa rota (para upload de arquivos)
export const config = {
    api: {
        bodyParser: false
    }
}