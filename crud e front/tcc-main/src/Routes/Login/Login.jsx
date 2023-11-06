import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '', // Campo para inserir email ou telefone
    senha: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Validar o formato do email ou telefone (se necessário)
    // ...

    // Limpar erros anteriores
    setError('');

    // Enviar solicitação de autenticação para a API
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Redirecionar o usuário após a autenticação bem-sucedida
          window.location.href = '/';
        } else {
          setError('Credenciais inválidas. Tente novamente.');
        }
      })
      .catch((error) => {
        console.error('Erro ao autenticar:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
