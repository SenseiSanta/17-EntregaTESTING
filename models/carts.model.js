import { Schema, model } from 'mongoose';

const CartSchema = new Schema({
    productos: {type: Array, required: true}
});

const CartsModelMongoDB = model('carritos', CartSchema)

export default CartsModelMongoDB