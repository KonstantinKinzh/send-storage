// Interface
interface IBtnActionFiles {
    icon?: string,
    alt?: string,
    title?: string,
    children?: React.ReactNode
};

// Styles
import "./btn-action-files.scss";

export function BtnActionFiles(props: IBtnActionFiles) {
    const { icon, alt, title, children } = props;
    return (
        <>
            <div className="btn-action-files">
                <div className="btn-action-files__wrapper">
                    <img
                        className="btn-action-files__img"
                        src={icon}
                        alt={alt}
                    />
                    <span className="btn-action-files__title">
                        {title || "Название отсутствует"}
                    </span>
                </div>
            </div>

            {
                // Children это компонент меню
                children &&
                <div>
                    {children}
                </div>
            }
        </>
    );
};