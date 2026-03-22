import reactIcon from "../../public/Icons/react.png";
import vueIcon from "../../public/Icons/vue.png";
import laravelIcon from "../../public/Icons/laravel.png";
import nodeIcon from "../../public/Icons/node.png";

const icons = [reactIcon, vueIcon, laravelIcon, nodeIcon];

const FloatingTech = () => {
  return (
    <div className="floating-tech">
      {icons.map((icon, index) => (
        <img key={index} src={icon} alt="tech" />
      ))}
    </div>
  );
};

export default FloatingTech;