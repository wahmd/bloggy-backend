import mongoose, { Document, Schema } from "mongoose";

export interface IPost {
  name: string;
}

export interface IPostModel extends IPost, Document {}

const PostSchema: Schema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String },
});

export default mongoose.model<IPostModel>("Post", PostSchema);
