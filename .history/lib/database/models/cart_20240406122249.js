import { Schema, model, models } from "mongoose";


const CartSchema = new Schema({
    Cart_id: { type: String, required: true },
    name: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
});

const Cart = models.Cart || model('Cart', CartSchema);

export default Cart;