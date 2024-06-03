import { MouseEventHandler } from "react";

// Interface
interface IBtnShowMenu {
  onHandleClick?: MouseEventHandler<HTMLDivElement>,
  className?: string,
  icon?: string,
  alt?: string,
  children?: React.ReactNode,
};

// Styles
import "./btn-show-menu.scss";

export const BtnShowMenu = (props: IBtnShowMenu) => {

  const { onHandleClick, className, icon, alt, children } = props;

  return (
    <div
      onClick={onHandleClick}
      className={`btn-show-menu ${className}`}
    >
      {icon && <img src={icon} alt={alt} />}
      {children}
    </div>
  );
};