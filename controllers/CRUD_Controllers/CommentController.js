
const prisma = require('../prismaClient');

// CRUD Operations for Comment
module.exports = {
    async createComment(req, res) {
        try {
            const data = req.body;
            const comment = await prisma.comment.create({
                data,
            });
            res.status(201).json(comment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getAllComments(req, res) {
        try {
            const comments = await prisma.comment.findMany({
                include: { post: true, author: true },
                skip: req.query.skip ? parseInt(req.query.skip) : 0,
                take: req.query.limit ? parseInt(req.query.limit) : 10,
            });
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getCommentById(req, res) {
        try {
            const id = req.params.id;
            const comment = await prisma.comment.findUnique({
                where: { id: parseInt(id) },
                include: { post: true, author: true },
            });
            if (!comment) {
                return res.status(404).json({ error: 'Comment not found' });
            }
            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateComment(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const comment = await prisma.comment.update({
                where: { id: parseInt(id) },
                data,
            });
            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteComment(req, res) {
        try {
            const id = req.params.id;
            await prisma.comment.delete({
                where: { id: parseInt(id) },
            });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
