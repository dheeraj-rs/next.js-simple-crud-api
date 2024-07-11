import { Schema, model, models } from 'mongoose';

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PostModel = models.post || model('Item', ItemSchema);

export default PostModel;
