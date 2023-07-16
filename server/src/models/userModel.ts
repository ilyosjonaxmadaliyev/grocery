import mongoose, { Schema } from "mongoose";

interface IUser {
    id: number,
    fist_name: string,
    auth_date: string,
    hash: string
}

const userSchema = new Schema<IUser>( {
    id: Number,
    fist_name: String,
    auth_date: String,
    hash: String
} )

const UserModel = mongoose.model<IUser>( "user", userSchema )
