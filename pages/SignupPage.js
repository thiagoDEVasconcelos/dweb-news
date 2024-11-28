import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !birthdate || !email || !password) {
      setError('Por favor, preencha todos os campos');
    } else {
      console.log('Nome:', name);
      console.log('Data de Nascimento:', birthdate);
      console.log('Email:', email);
      console.log('Senha:', password);
      
      navigate('/login')
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="mb-4 text-center">Cadastro</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome completo"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="birthdate" className="form-label">Data de Nascimento</label>
            <input
              type="date"
              id="birthdate"
              className="form-control"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
        </form>
        <div className="mt-3 text-center">
          <p>Já tem uma conta? <a href="/login">Faça login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

signup.js