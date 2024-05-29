// Components
import { BtnShowMenu } from "@/shared/ui/btn-show-menu/btn-show-menu";
import { ProfileComponent } from "@/shared/ui/profile-component/profile-component";

import "./profile.scss";
export function Profile() {
    return (
        <>
            <BtnShowMenu
                children={<ProfileComponent />}
            />
        </>
    );
};