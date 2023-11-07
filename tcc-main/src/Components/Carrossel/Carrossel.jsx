/* eslint-disable react/prop-types */
// CSS
import { useRef } from "react";
import "./Carrossel.css";

// Components
import { MdOutlineArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Carrossel = ({ data, title }) => {
  const carousel = useRef(null);

  const handleLeftClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="container-carrossel">
      <div className="header-carrossel">
        <h2>{title}</h2>
        <div>
          <MdArrowBackIos className="arrow" onClick={handleLeftClick} />
          <MdOutlineArrowForwardIos
            className="arrow"
            onClick={handleRightClick}
          />
        </div>
      </div>
      <div className="carrossel" ref={carousel}>
        {data.map((item) => {
          const { id, name, link, img } = item;
          return (
            <Link to={link} className="item" key={id}>
              <div className="img">
                <img src={img} alt={name} />
              </div>
              <div className="title">
                <span>{name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Carrossel;
