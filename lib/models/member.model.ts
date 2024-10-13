import mongoose from "mongoose";

const MemberRole = {
  ADMIN: "ADMIN",
  MODERATOR: "MODERATOR",
  GUEST: "GUEST",
};

const memberSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId() },
  role: {
    type: String,
    enum: Object.values(MemberRole),
    default: MemberRole.GUEST,
  },
  profileId: { type: String, required: true },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  serverId: { type: String, required: true },
  server: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Server",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Crear índices en profileId y serverId
memberSchema.index({ profileId: 1 });
memberSchema.index({ serverId: 1 });

const Member = mongoose.models.Member || mongoose.model("Member", memberSchema);

export default Member;
