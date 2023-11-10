// React
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
// CSS
import "./Login.css";

// Components
import ImagenPerfil from "../../Components/ImagenPerfil/ImagenPerfil";
import BtnFacebook from "../../Components/BtnFacebook/BtnFacebook";
import BtnGoogle from "../../Components/BtnGoogle/BtnGoogle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // Inicie showPassword como um booleano

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

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
    <div className="container">
<form onSubmit={handleSubmit}>
<ImagenPerfil />
<input placeholder="E-mail ou Telefone" 
type="text"
name="email"
value={formData.email}
          onChange={handleInputChange}
          />
<div className="container-password">
  <input
  name="senha"
    placeholder="Senha"
    type={showPassword ? "text" : "password"}
    className="password"
    value={formData.senha}
          onChange={handleInputChange}
  />
  <button className="eye" onClick={togglePasswordVisibility}>
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>
<span className="spanContainer">
  <a href="#">Esqueceu a senha?</a>
</span>
<button>Entrar</button>
</form>
{error && <p className="error-message">{error}</p>}
<span className="divider">Ou</span>
<div className="socialMediaLogin">
  <BtnFacebook />
  <BtnGoogle />
</div>
<Link to="/Register" className="register">
  Não tem um conta? <span>Inscreva-se</span>
</Link>
</div>
  );
};

export default Login;
