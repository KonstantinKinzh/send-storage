// Modules React-router-dom
import { Link } from "react-router-dom";

// Interface
interface IOptionMenu {
    link: string,
    icon?: string,
    alt?: string,
    title: string,
    description?: string,
};

// Styles
import "./option-menu.scss";

export function OptionMenu(props: IOptionMenu) {
    const { link, icon, alt, title, description } = props;
    return (
        <Link className="link-app" to={link}>
            <div className="option">
                <div className="option__wrapper">
                    <img className="option__img" src={icon} alt={alt} />
                    <div className="option__content">
                        <p className="option__title">{title}</p>
                        <p className="option__description">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};