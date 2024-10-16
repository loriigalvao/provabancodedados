import mongoose from 'mongoose';

function db() {
    mongoose
    .connect('mongodb+srv://lorienygalvao:10102472980@cluster0.7kehm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
}

export default db;