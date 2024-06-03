// Custom hooks
import { useToggleMenu } from "../../lib/useToggleMenu";

// Components
import { BtnShowMenu } from "@/shared/ui/btn-show-menu";
import { MenuViewApp } from "./menu-view-app";
import { TranspBack } from "@/shared/ui/transp-back";

// Icons
import ViewAppIcon from "@/shared/icons/icon-view-app.png";

// Styles
import "./view-app.scss";

export function ViewApp() {
    const { isActive, onClickExternalArea, onShowMenu } = useToggleMenu();

    return (
        <div onClick={onClickExternalArea} className="view-app">
            <div className="view-app__wrapper">
                <BtnShowMenu
                    onHandleClick={onShowMenu}
                    className="w-[15px] h-[15px] p-[5px]"
                    icon={ViewAppIcon}
                    alt="Иконка показа приложений"
                />
                {isActive && <MenuViewApp />}
            </div>
            {isActive && <TranspBack />}
        </div>
    );
};