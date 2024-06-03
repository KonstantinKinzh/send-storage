// Interface
interface IBtnActionFiles {
    onHandleClick?: MouseEventHandler<HTMLDivElement>
    icon?: string,
    alt?: string,
    title?: string,
    children?: React.ReactNode
};

import { MouseEventHandler } from "react";
// Styles
import "./btn-action-files.scss";

export function BtnActionFiles(props: IBtnActionFiles) {
    const {onHandleClick, icon, alt, title, children } = props;
    return (
        <>
            <div onClick={onHandleClick} className="btn-action-files">
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