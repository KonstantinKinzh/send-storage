// Modules React-router-dom
import { Link } from "react-router-dom";

// Interface
interface IOptionArrange {
    link: string,
    icon?: string,
    alt?: string,
    title: string,
};

// Styles
import "./option-place-page.scss";

export function OptionPlacePage(props: IOptionArrange) {
    const { link, icon, alt, title } = props;
    return (
        <Link className="link-app" to={link}>
            <div className="option-place-page">
                <div className="option-place-page__wrapper">
                    <div className="option-place-page__content">
                        <p className="option-place-page__title">{title}</p>
                        <img className="option-place-page__img" src={icon} alt={alt} />
                    </div>
                </div>
            </div>
        </Link>
    );
};