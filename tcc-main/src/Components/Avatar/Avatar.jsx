/* eslint-disable react/prop-types */
// CSS
import "./Avatar.css";

// React

const Avatar = ({ image, name, width, height }) => {
  const defaultAvatar = "user.png";

  return (
    <div className="container-avatar">
      <img
        src={image ? image : defaultAvatar}
        width={width}
        height={height}
        alt="Foto do usuario"
      />
      <h2>{name ? name : "Usuario"}</h2>
    </div>
  );
};

export default Avatar;
