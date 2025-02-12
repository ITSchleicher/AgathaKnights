import mongoose from 'mongoose';

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/AgathaKnights'); // add your own uri here mongodb://127.0.0.1:27017/(Database name)
        console.log('Database connected.');
        return mongoose.connection;
    } catch(error) {
        console.error('Database connection error:', error);
        throw new Error('Database connection failed.');
    }
}

export default db;
