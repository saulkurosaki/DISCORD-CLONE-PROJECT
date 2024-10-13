import mongoose from "mongoose";

const ChannelType = {
  TEXT: "TEXT",
  AUDIO: "AUDIO",
  VIDEO: "VIDEO",
};

const channelSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId() },
  name: { type: String, required: true },
  type: {
    type: String,
    enum: Object.values(ChannelType),
    default: ChannelType.TEXT,
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
channelSchema.index({ profileId: 1 });
channelSchema.index({ serverId: 1 });

const Channel = mongoose.model("Channel", channelSchema);

export default Channel;
