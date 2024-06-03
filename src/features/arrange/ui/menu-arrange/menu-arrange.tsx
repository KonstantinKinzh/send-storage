// Components
import { OptionArrange } from "../option-arrange";

// Icons
import InformationForlderIcon from "@/shared/icons/icons-title/information-folder.png"
import EventInFolderIcon from "@/shared/icons/icons-title/event-in-folder.png"
import FixIcon from "@/shared/icons/icons-title/fix.png"
import ShowIcon from "@/shared/icons/icons-title/show.png"
import RequestIcon from "@/shared/icons/icons-title/request.png"
import RewindIcon from "@/shared/icons/icons-title/rewind.png"

// Styles
import "./menu-arrange.scss";

export function MenuArrange() {
    return (
        <>
            <div className="menu-arrange">
                <div className="menu-arrange__wrapper">

                    <div className="menu-arrange__set-border">
                        <OptionArrange
                            icon={InformationForlderIcon}
                            link="/"
                            title="Сведения о папке"
                        />
                        <OptionArrange
                            icon={EventInFolderIcon}
                            link="/"
                            title="События в папке"
                        />
                    </div>

                    <OptionArrange
                        icon={FixIcon}
                        link="/"
                        title="Показать закреплённые элементы"
                    />
                    <OptionArrange
                        icon={ShowIcon}
                        link="/"
                        title="Показать удаленные"
                    />
                    <OptionArrange
                        icon={RequestIcon}
                        link="/"
                        title="Запросить файлы"
                    />

                    <OptionArrange
                        icon={RewindIcon}
                        link="/"
                        title="Перемотать эту папку"
                    />

                </div>
            </div>
        </>
    );
};