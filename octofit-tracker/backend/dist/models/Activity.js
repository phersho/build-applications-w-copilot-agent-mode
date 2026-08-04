import mongoose from 'mongoose';
const activitySchema = new mongoose.Schema({
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
export default mongoose.model('Activity', activitySchema);
