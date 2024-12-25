
const prisma = require('../prismaClient');

// CRUD Operations for Post
module.exports = {
    async createPost(req, res) {
        try {
            const data = req.body;
            const post = await prisma.post.create({
                data,
            });
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getAllPosts(req, res) {
        try {
            const posts = await prisma.post.findMany({
                include: { author: true },
                skip: req.query.skip ? parseInt(req.query.skip) : 0,
                take: req.query.limit ? parseInt(req.query.limit) : 10,
            });
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getPostById(req, res) {
        try {
            const id = req.params.id;
            const post = await prisma.post.findUnique({
                where: { id: parseInt(id) },
                include: { author: true },
            });
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updatePost(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const post = await prisma.post.update({
                where: { id: parseInt(id) },
                data,
            });
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deletePost(req, res) {
        try {
            const id = req.params.id;
            await prisma.post.delete({
                where: { id: parseInt(id) },
            });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
