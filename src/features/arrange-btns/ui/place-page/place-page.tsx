// Components
import { BtnShowMenu } from "@/shared/ui/btn-show-menu";

// Icons
import IntroductionIcon from "@/shared/icons/arrange-panel-icons/introduction.png";

// Styles
import "./place-page.scss";

export function PlacePage() {
    return (
        <div className="place-page">
            <BtnShowMenu
                icon={IntroductionIcon}
                alt="Иконка кнопки расположить на страницe"
            />
        </div>
    );
};