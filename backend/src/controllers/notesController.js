import Note from "../models/Note.js"

const getAllNotes = async (_, res) => { //we can replace req with _ cause we don't use it here
    try {
        const notes = await Note.find().sort({createdAt:-1}); //get them all and sort in desc from newest one
        res.status(200).json(notes);
        
    }catch(e){
        console.error("Error in getAllNotes controller",e)
        res.status(500).json({message:"Internal server error"});
    }
}

const getOneNote = async (req,res) => {
    try {
        const id = req.params.id;
        const note = await Note.findById(id);
        if(!note)
            return res.status(404).json({message:"Note not found"});
        res.status(200).json(note);

    }catch(e){
        console.error("Error in getOneNote controller",e)
        res.status(500).json({message:"Internal server error"});
    }
}

const createNote = async (req, res) => {
    try {
        const {title,content} = req.body;
        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote)
    }catch(e){
        console.error("Error in createNote controller",e)
        res.status(500).json({message:"Internal server error"});
    }
}

const updateNote = async (req, res) => {
    try {
        const {title,content} = req.body;
        const id = req.params.id;
        const updatedNote = await Note.findByIdAndUpdate(id,{title,content},{new:true})
        if(!updatedNote)
            return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"Note updates successfully!",updateNote})

    }catch(e){
        console.error("Error in updateNote controller",e)
        res.status(500).json({message:"Internal server error"});
    }
}

const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(id);
        if(!deletedNote)
            return res.status(404).json({message:"Note not found"},{new:true});
        res.status (200). json({message:"Note deleted successfully!"});
    }catch(e){
        console.error("Error in deleteNote controller",e)
        res.status(500).json({message:"Internal server error"});
    }
}

export {getAllNotes, getOneNote, createNote, updateNote, deleteNote}