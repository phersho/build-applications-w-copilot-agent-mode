import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import LeaderboardEntry from '../models/LeaderboardEntry.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Seed the octofit_db database with test data');
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      { name: 'Ava', email: 'ava@example.com', role: 'captain', fitnessGoal: 'Build strength' },
      { name: 'Leo', email: 'leo@example.com', role: 'member', fitnessGoal: 'Improve cardio' },
      { name: 'Mina', email: 'mina@example.com', role: 'coach', fitnessGoal: 'Stay consistent' },
    ]);

    await Team.create({
      name: 'Velocity',
      members: [users[0]._id, users[1]._id],
      goal: 'Train together twice a week',
    });

    await Activity.insertMany([
      { type: 'run', duration: 30, date: '2026-08-04', user: users[0]._id },
      { type: 'strength', duration: 45, date: '2026-08-03', user: users[1]._id },
      { type: 'yoga', duration: 20, date: '2026-08-02', user: users[2]._id },
    ]);

    await LeaderboardEntry.insertMany([
      { user: users[0]._id, score: 1200, rank: 1 },
      { user: users[1]._id, score: 1100, rank: 2 },
      { user: users[2]._id, score: 1000, rank: 3 },
    ]);

    await Workout.insertMany([
      { title: 'Morning Mobility', difficulty: 'easy', focus: 'Recovery' },
      { title: 'HIIT Circuit', difficulty: 'moderate', focus: 'Cardio' },
      { title: 'Power Lift', difficulty: 'hard', focus: 'Strength' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
