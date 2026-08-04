import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'moderate', 'hard'], default: 'moderate' },
    focus: { type: String, default: 'Full body' },
  },
  { timestamps: true },
);

export default mongoose.model('Workout', workoutSchema);
