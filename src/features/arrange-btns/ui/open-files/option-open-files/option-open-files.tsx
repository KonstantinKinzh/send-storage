// Modules React-router-dom
import { Link } from "react-router-dom";

// Interface
interface IOptionArrange {
    link: string,
    icon?: string,
    alt?: string,
    title: string,
    description?: string,
};

// Styles
import "./option-open-files.scss";

export function OptionOpenFiles(props: IOptionArrange) {
    const { link, icon, alt, title, description } = props;
    return (
        <Link className="link-app" to={link}>
            <div className="option-open-files">
                <div className="option-open-files__wrapper">
                    <div className="option-open-files__item">
                        <div className="option-open-files__content">
                            <p className="option-open-files__title">{title}</p>
                            <p className="option-open-files__description">{description}</p>
                        </div>
                        <img className="option-open-files__img" src={icon} alt={alt} />
                    </div>
                </div>
            </div>
        </Link>
    );
};