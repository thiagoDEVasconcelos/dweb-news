const User = require('../models/User');
const bcrypt = require('bcrypt');

 
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


        // Gera um hash para a senha (10 é o número de "salt rounds")
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Cria o novo usuário com a senha encriptada
        const newUser = new User({ nome, email, senha: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Usuário criado com sucesso!' });
    } catch (error) {
        console.error('Erro ao criar usuário:', error); // Log da mensagem do erro
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

// Função para o login do usuário
exports.loginUser = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ message: 'E-mail e senha são obrigatórios.' });
        }

        // Busca o usuário no banco de dados
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'E-mail ou senha inválidos.'})
        }

        // Verifica se a senha está correta
        const isPasswordValid = await bcrypt.compare(senha, user.senha);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'E-mail ou senha inválidos. '});
        }

        res.status(200).json({ message: 'Login bem-sucedido!', user});
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        res.status(500).json({ message: 'Erro ao realizar login. '})
    }
};