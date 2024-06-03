import { useToggleMenu } from "@/features/top-panel-btns/lib/useToggleMenu";

// Components
import { BtnShowMenu } from "@/shared/ui/btn-show-menu/btn-show-menu";
import { MenuArrange } from "./menu-arrange";
import { TranspBack } from "@/shared/ui/transp-back";

// Icons
import GearIcon from "@/shared/icons/icons-title/gear.png";

import "./arrange.scss";

export function Arrange() {
    const { isActive, onClickExternalArea, onShowMenu } = useToggleMenu();

    return (
        <>
            <div onClick={onClickExternalArea} className="arrange">
                <div className="arrange__wrapper">
                    <BtnShowMenu
                        onHandleClick={onShowMenu}
                        className="w-[18px] h-[18px] px-[5px] py-[5px] hover:bg-[#E5E4E2] "
                        icon={GearIcon}
                        alt="Иконка показа приложений"
                    />
                    {isActive && <MenuArrange />}
                </div>
                {isActive && <TranspBack />}
            </div>
        </>
    );
};