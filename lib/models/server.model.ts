import mongoose from "mongoose";

const serverSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId() },
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  inviteCode: { type: String, required: true },
  profileId: { type: String, required: true },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }],
  channels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chanel" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Crear un índice en profileId
serverSchema.index({ profileId: 1 });

const Server = mongoose.models.Server || mongoose.model("Server", serverSchema);

export default Server;
