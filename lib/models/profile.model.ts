import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId() },
  userId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  email: { type: String, required: true },
  servers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Server" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;
