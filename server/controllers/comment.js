import express from 'express';
import mongoose from 'mongoose';

import Comment from '../models/Comment.js';

const router = express.Router();

export const getComments = async (req, res) => { 
    try {
        const comments = await Comment.find();
                
        res.status(200).json(comments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getComment = async (req, res) => { 
    const { id } = req.params;

    try {
        const comment = await Comment.findById(id);
        
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
/* ok*/
export const createComment = async (req, res) => {
    const { review } = req.body;

    const newComment = new Comment({ review })

    try {
        await newComment.save();

        res.status(201).json(newComment );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;
