// Interface
interface IBtnShowMenu {
  children?: React.ReactNode,
  icon?: string,
  alt?: string,
};

// Styles
import "./btn-show-menu.scss";

export const BtnShowMenu = (props: IBtnShowMenu) => {

  const { children, icon, alt, } = props;

  return (
    <div className="btn-show-menu">
      {
        icon &&
        <img
          className="btn-show-menu__icon"
          src={icon}
          alt={alt}
        />
      }

      {children}

    </div>
  );
};