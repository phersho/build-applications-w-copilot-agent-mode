import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['member', 'captain', 'coach'], default: 'member' },
    fitnessGoal: { type: String, default: 'Build consistency' },
}, { timestamps: true });
export default mongoose.model('User', userSchema);
