import { useToggleMenu } from "@/features/top-panel-btns/lib/useToggleMenu";

// Components
import { BtnShowMenu } from "@/shared/ui/btn-show-menu/btn-show-menu";
import { MenuViewApp } from "./menu-profile";
import { TranspBack } from "@/shared/ui/transp-back";
import { ProfileComponent } from "@/shared/ui/profile-component/profile-component";

import "./profile.scss";

export function Profile() {
    const { isActive, onClickExternalArea, onShowMenu } = useToggleMenu();

    return (
        <>
            <div onClick={onClickExternalArea} className="profile">
                <div className="profile__wrapper">
                    <BtnShowMenu
                        children={<ProfileComponent className="p-[3px] rounded-[5px]" />}
                        onHandleClick={onShowMenu}
                        className=""
                        alt="Иконка показа приложений"
                    />
                    {isActive && <MenuViewApp />}
                </div>
                {isActive && <TranspBack />}
            </div>
        </>
    );
};