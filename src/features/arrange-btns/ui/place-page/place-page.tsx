// Custom hooks
import { useToggleMenu } from "@/features/arrange-btns/lib/useToggleMenu";

// Components
import { BtnShowMenu } from "@/shared/ui/btn-show-menu/btn-show-menu";
import { MenuPlacePage } from "./menu-place-page";
import { TranspBack } from "@/shared/ui/transp-back";

// Icons
import IntroductionIcon from "@/shared/icons/arrange-panel-icons/introduction.png";

// Styles
import "./place-page.scss";

export function PlacePage() {
    const { isActive, onClickExternalArea, onShowMenu } = useToggleMenu();
    return (
        <div onClick={onClickExternalArea} className="place-page">
            <div className="place-page__wrapper">
                <BtnShowMenu
                    onHandleClick={onShowMenu}
                    className="w-[23px] h-[23px] px-[5px] py-[5px] hover:bg-[#E5E4E2]"
                    icon={IntroductionIcon}
                    alt="Иконка кнопки расположить на страницe"
                />

                {isActive && <MenuPlacePage />}
            </div>
            {isActive && <TranspBack />}
        </div>
    );
};