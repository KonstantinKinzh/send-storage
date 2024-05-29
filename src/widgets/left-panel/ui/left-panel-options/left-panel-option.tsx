// Modules react-router
import { Link } from "react-router-dom";

// Interface
interface ILeftPanelOption {
    link: string,
    iconOption: string,
    alt?: string,
    nameOption?: string
}

// Styles
import "./left-panel-option.scss";

export function LeftPanelOption(props: ILeftPanelOption) {
    const { link, iconOption, alt, nameOption } = props;
    return (
        <div>
            <li>
                <Link className="link-page" to={link}>
                    <img
                        className="link-page__icon"
                        src={iconOption}
                        alt={alt} />
                    <span
                        className="link-page__title">
                        {nameOption}
                    </span>
                </Link>
            </li>
        </div>
    );
};