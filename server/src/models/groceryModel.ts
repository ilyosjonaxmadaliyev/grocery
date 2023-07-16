import mongoose, { Schema, Types } from "mongoose";

interface IGrocery{
    name: string,
    user_id: number
}

const groceryChema = new Schema<IGrocery>( {
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    }
} )

const GroceryModel = mongoose.model<IGrocery>( "grocery", groceryChema )
export default GroceryModel