import { ContenedorMongoDB } from "../container/ContenedorMongoDB.js"
import UsersModelMongoDB from "../users.model.js"

export class UsersDAOMongoDB extends ContenedorMongoDB {
    constructor() {
        super(UsersModelMongoDB);
    }
}