import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        scientific_title: {
            type: String,
            required: true,
            trim: true,
        },
        site_slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        categories: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Category',
            },
        ],
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type',
            required: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
        text: {
            type: String,
            required: true,
        },
        author:{
            type:String,
            default:'admin'
        }
    },
    {
        timestamps: true,
    }
);

const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

export default Item;