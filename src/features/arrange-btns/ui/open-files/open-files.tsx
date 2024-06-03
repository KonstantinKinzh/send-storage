// Custom hooks
import { useToggleMenu } from "@/features/arrange-btns/lib/useToggleMenu";

// Components
import { BtnShowMenu } from "@/shared/ui/btn-show-menu/btn-show-menu";
import { MenuOpenFiles } from "./menu-open-files";
import { TranspBack } from "@/shared/ui/transp-back";

// Icons
import HalfSquarIcon from "@/shared/icons/arrange-panel-icons/half-squar.png";

// Styles
import "./open-files.scss";

export function OpenFiles() {
    const { isActive, onClickExternalArea, onShowMenu } = useToggleMenu();
    return (
        <div onClick={onClickExternalArea} className="open-files">
            <div className="open-files__wrapper">
                <BtnShowMenu
                    onHandleClick={onShowMenu}
                    className="w-[23px] h-[23px] px-[5px] py-[5px] hover:bg-[#E5E4E2]"
                    icon={HalfSquarIcon}
                    alt="Иконка кнопки открывающая настройки просмотра файлов"
                />

                {isActive && <MenuOpenFiles />}
            </div>
            {isActive && <TranspBack />}
        </div>
    );
};