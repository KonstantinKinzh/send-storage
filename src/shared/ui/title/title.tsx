// Components
import { BtnShowMenu } from "../btn-show-menu";

// Interface 
interface ITitle {
    title: string,
    icon?: string,
    alt?:string
};

// Styles
import "./title.scss";

export function Title(props: ITitle) {
    const { title, icon, alt } = props;
    return (
        <div className="title">
            <h1 className="title__name">
                {title}
            </h1>
            {icon && <BtnShowMenu icon={icon} alt={alt} />}
        </div>
    );
};