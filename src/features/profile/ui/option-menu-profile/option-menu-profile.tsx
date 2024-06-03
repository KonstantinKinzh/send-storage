// Modules React-router-dom
import { Link } from "react-router-dom";

// Interface
interface IOptionMenu {
    link: string,
    title: string,
};

// Styles
import "./option-menu-profile.scss";

export function OptionProfile(props: IOptionMenu) {
    const { link, title } = props;
    return (
        <Link className="link-app" to={link}>
            <div className="option-menu-profile">
                <div className="option-menu-profile__wrapper">
                    <p className="option-menu-profile__title">{title}</p>
                </div>
            </div>
        </Link>
    );
};