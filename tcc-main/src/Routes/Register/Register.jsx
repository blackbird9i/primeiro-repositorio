  
// React
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRef, useState } from "react";

// CSS
import "./Register.css";

// Components
import ImagenPerfil from "../../Components/ImagenPerfil/ImagenPerfil";
import { ref } from "yup";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const checkboxRef = useRef();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
  }
  )
  

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(checkboxRef.current.checked) {
      // Aqui você pode fazer a solicitação para a API
    // Certifique-se de substituir 'sua_api_endpoint' pela URL da sua API
    fetch(' http://localhost:8080/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Manipule a resposta da API aqui
        if (response.ok) {
          window.location.href = '/Login';
          // O envio foi bem-sucedido
          // Você pode redirecionar o usuário ou fazer outra ação aqui
        } else {
          // Trate os erros da API
          console.error('Erro ao enviar o formulário');
        }
       
      })
      .catch((error) => {
        console.error('Erro ao enviar o formulário:', error);
      });
    } else {
      console.error("Algo de errado")
    }

   
  };

  return (

      <form className="container"  onSubmit={handleSubmit}>
      <ImagenPerfil />
      
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleInputChange}
        />
        <div className="container-password">
          <input
            type={showPassword ? "text" : "password"}
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleInputChange}
            className="password"
          />
          <button className="eye" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="container-termos">
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="aceitarTermos"
              ref={checkboxRef}
              onChange={handleInputChange}
            />
            <span className="checkmark"></span>
            <p>
              Eu aceito os <span>Termos de uso</span> e{" "}
              <span>Políticas de privacidade</span>
            </p>
          </label>
        </div>
        <button type="submit"onSubmit={handleSubmit}>Inscreva-se</button>
    </form>

  );
};

export default Register;
