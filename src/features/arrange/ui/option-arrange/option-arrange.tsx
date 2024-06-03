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
import "./option-arrange.scss";

export function OptionArrange(props: IOptionArrange) {
    const { link, icon, alt, title } = props;
    return (
        <Link className="link-app" to={link}>
            <div className="option-arrange">
                <div className="option-arrange__wrapper">
                    <div className="option-arrange__content">
                        <img className="option-arrange__img" src={icon} alt={alt} />
                        <p className="option-arrange__title">{title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};