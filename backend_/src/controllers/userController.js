const User = require('../models/User');

 
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuário' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }

        const newUser = new User({ nome, email, senha });
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Erro ao criar usuário:', error.message); // Log da mensagem do erro
        console.error('Detalhes do erro:', error); // Log completo do erro
        if (error.code === 11000) {
            res.status(400).json({ message: 'E-mail já cadastrado.' });
        } else {
            res.status(500).json({ message: 'Erro ao criar usuário.' });
        }
    }
};


exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'Usuário não encontrado' });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar usuário' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'Usuário não encontrado' });
        res.json({ message: 'Usuário excluído com sucesso' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir usuário' });
    }
};