import mongoose from 'mongoose';

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase', {
        });
        console.log('Conexión exitosa a la base de datos.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

export default connectDB;
