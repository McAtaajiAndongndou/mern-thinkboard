import mongoose from "mongoose";

// Define the Note schema
// Model based off schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }, 
    {timestamps: true} //created at, updated at
);

export const Note = mongoose.model('Note', noteSchema);

export default Note;