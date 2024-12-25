
const prisma = require('../prismaClient');

// CRUD Operations for User
module.exports = {
    async createUser(req, res) {
        try {
            const data = req.body;
            const user = await prisma.user.create({
                data,
            });
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getAllUsers(req, res) {
        try {
            const users = await prisma.user.findMany({
                include: {},
                skip: req.query.skip ? parseInt(req.query.skip) : 0,
                take: req.query.limit ? parseInt(req.query.limit) : 10,
            });
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await prisma.user.findUnique({
                where: { id: parseInt(id) },
                include: {},
            });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const user = await prisma.user.update({
                where: { id: parseInt(id) },
                data,
            });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            await prisma.user.delete({
                where: { id: parseInt(id) },
            });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
