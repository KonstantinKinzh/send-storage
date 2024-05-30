// Components
import { BtnShowMenu } from "@/shared/ui/btn-show-menu";

// Icons
import HalfSquarIcon from "@/shared/icons/arrange-panel-icons/half-squar.png";

// Styles
import "./open-files-in.scss";

export function OpenFilesIn() {
    return (
        <div className="open-files-in">
            <BtnShowMenu
                icon={HalfSquarIcon}
                alt="Иконка кнопки - открыть файлы в"
            />
        </div>
    );
};