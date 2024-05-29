// Modules React-router
import { Link } from "react-router-dom";

// Components
import { LeftPanelOption } from "../left-panel-options";

// Icons
import LogoIcon from "@/shared/icons/icons-left-panel/logo.png";
import AllFilesIcon from "@/shared/icons/icons-left-panel/all-files.png";
import SignatureIcons from "@/shared/icons/icons-left-panel/signature.png";
import SubmitIcon from "@/shared/icons/icons-left-panel/submit.png";
import PhotoIcon from "@/shared/icons/icons-left-panel/photo.png";

// Styles
import "./left-panel.scss";

export function LeftPanel() {
    return (
        <div className="left-panel">
            <Link className="left-panel__logo-link" to="/">
                <img
                    className="left-panel__logo"
                    src={LogoIcon}
                    alt="Logo site" />
            </Link>

            <ul className="left-panel__list">

                <LeftPanelOption
                    link="/all-files"
                    iconOption={AllFilesIcon}
                    alt="Иконка опции все файлы"
                    nameOption="Все файлы"
                />

                <LeftPanelOption
                    link="/subscriptons"
                    iconOption={SignatureIcons}
                    alt="Иконка опции подписки"
                    nameOption="Подписки"

                />

                <LeftPanelOption
                    link="/sending-tracking"
                    iconOption={SubmitIcon}
                    alt="Иконка опции отправка и отслеживание"
                    nameOption="Отправка и отслеживание"
                />

                <LeftPanelOption
                    link="/photo"
                    iconOption={PhotoIcon}
                    alt="Иконка опции фото"
                    nameOption="Фото"
                />

            </ul>
        </div>
    )
}
