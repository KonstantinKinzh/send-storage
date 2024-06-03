// Components
import { OptionMenu } from "../option-menu";

// Icons
import LogoIcon from "@/shared/icons/icons-view-app/logo.png";
import DashIcon from "@/shared/icons/icons-view-app/dash.png";
import ReplayIcon from "@/shared/icons/icons-view-app/replay.png";
import DocSendIcon from "@/shared/icons/icons-view-app/doc-send.png";

// Styles
import "./menu-view-app.scss";

export function MenuViewApp() {
    return (
        <>
            <div className="menu-view-app">
                <div className="menu-view-app__wrapper">
                    <OptionMenu
                        link="/"
                        icon={LogoIcon}
                        alt="Иконка пункта хранения файлов"
                        title="Notdropbox"
                        description="Храните файлы, делитесь ими и работайте с ними с разных устройств"
                    />
                    <OptionMenu
                        link="/dash"
                        icon={DashIcon}
                        alt="Иконка пункта быстрый поиск"
                        title="Dash"
                        description="Храните файлы, делитесь ими и работайте с ними с разных устройств"
                    />
                    <OptionMenu
                        link="/replay"
                        icon={ReplayIcon}
                        alt="Иконка пункта работы с видео"
                        title="Replay"
                        description="Более быстрое рассмотрение и утверждение видео"
                    />
                    <OptionMenu
                        link="/doc-send"
                        icon={DocSendIcon}
                        alt="Иконка пункта отправки документов"
                        title="DocSend"
                        description="Безопасно отправляйте документы и отслеживайте события"
                    />
                </div>
            </div>
        </>
    );
};