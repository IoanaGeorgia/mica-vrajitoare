import mongoose from 'mongoose';

const typeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    }
  },
   {
    desc: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Type = mongoose.models.Type || mongoose.model('Type', typeSchema);

export default Type;