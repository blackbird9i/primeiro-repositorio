// CSS
import "./ImagenPerfil.css";

const ImagenPerfil = () => {
  const imageUrl = "./user.png";

  return (
    <div>
      <img src={imageUrl} alt="Foto perfil usúario" className="imgPerfil" />
    </div>
  );
};

export default ImagenPerfil;
