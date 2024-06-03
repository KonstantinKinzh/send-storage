// Icons
import FolderIcon from "@/shared/icons/icons-create-folders/folderIcon.png";
import CrossIcon from "@/shared/icons/icons-create-folders/cross-icon.png";

// Interface
interface IHeaderWin {
    onShowWin: MouseEventHandler<HTMLDivElement>
}

// Styles
import "./header-win.scss";
import { MouseEventHandler } from "react";

// Tailwind
const paddings = `
    px-[15px] 
    py-[15px]
`;

export function HeaderWin(props: IHeaderWin) {

    const { onShowWin } = props;

    return (
        <div>
            <div className="header-win">
                <div className={`header-win__wrapper ${paddings}`}>

                    <div className="header-win__title">
                        <img
                            className="header-win__icon-folder"
                            src={FolderIcon}
                            alt="Иконка папки"
                        />
                        <p className="header-win__name-title">
                            Создание папки
                        </p>
                    </div>


                    <img
                        onClick={onShowWin}
                        className="header-win__icon-cross"
                        src={CrossIcon}
                        alt="Иконка крестика закрытия"
                    />
                </div>
            </div>
        </div>
    );
};