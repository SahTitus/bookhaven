import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    quantity: { type: Number, required: true },
    status: String,
    userID: Number,
    orderDate: Date,
    userID: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    bookID: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    orderdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
})

const Order = models.Order || model('Order', OrderSchema);

export default Order;

({
    orderID: Number,
    userID: Number,
    orderDate: Date,
    bookID: Number,
    quantity: Number
});