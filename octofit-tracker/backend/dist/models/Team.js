import mongoose from 'mongoose';
const teamSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    goal: { type: String, default: 'Stay active together' },
}, { timestamps: true });
export default mongoose.model('Team', teamSchema);
