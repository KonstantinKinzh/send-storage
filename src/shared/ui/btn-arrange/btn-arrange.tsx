// Interface 
interface IBtnArrange {
    icon?: string,
    title: string,
    alt?: string
};

// Styles
import "./btn-arrange.scss";

export function BtnArrange(props: IBtnArrange) {
    const { icon, title, alt } = props;
    return (
        <div className="btn-arrange">
            {icon &&
                <img
                    className="btn-arrange__img"
                    src={icon}
                    alt={alt}
                />
            }
            <span className="btn-arrange__title">
                {title}
            </span>
        </div>
    );
};