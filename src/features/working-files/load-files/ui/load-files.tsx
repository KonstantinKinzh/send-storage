// Components
import { BtnActionFiles } from "@/shared/ui/btn-action-files";

import { useToggleMenu } from "@/features/top-panel-btns/lib/useToggleMenu";

// Components
import { MenuLoadFiles } from "./menu-load-files";
import { TranspBack } from "@/shared/ui/transp-back";

// Icons 
import ArrowDownIcon from "@/shared/icons/icons-btn-action-files/arrow-down.png";

// Styles
import "./load-files.scss";

export function LoadFiles() {
    const { isActive, onClickExternalArea, onShowMenu } = useToggleMenu();
    return (
        <>
            <div onClick={onClickExternalArea} className="load-files">
                <div className="load-files__wrapper">
                    <BtnActionFiles
                        onHandleClick={onShowMenu}
                        icon={ArrowDownIcon}
                        alt="Иконка кнопки загруить файлы (имеет вид струлки вверх)"
                        title="Загрузить"
                    />
                    {isActive && <MenuLoadFiles />}
                </div>
                {isActive && <TranspBack />}
            </div>
        </>
    );
};