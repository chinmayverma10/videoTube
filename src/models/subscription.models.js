import mongoose,{Schema} from "mongoose";

const subscriptionSchema = new Schema({
    channel: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    subscriber: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
},{
    timestamps: true
})

export const Subscriber = mongoose.model("Subscriber",subscriptionSchema)