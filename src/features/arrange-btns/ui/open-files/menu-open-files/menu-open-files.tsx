// Components
import { OptionOpenFiles } from "../option-open-files";

// Icons
import HalfSquarIcon from "@/shared/icons/arrange-panel-icons/half-squar.png";
import FullScreenIcon from "@/shared/icons/arrange-panel-icons/full-screen.png";

// Styles
import "./menu-open-files.scss";

export function MenuOpenFiles() {
    return (
        <>
            <div className="menu-open-files">
                <div className="menu-open-files__wrapper">

                    <p className="menu-open-files__title">Открыть файлы в</p>

                    <OptionOpenFiles
                        icon={HalfSquarIcon}
                        link="/"
                        title="Сетка"
                        description="Одним щелчком файла его можно открыть на весь экран"
                        alt="Иконка сетки"
                    />

                    <OptionOpenFiles
                        icon={FullScreenIcon}
                        link="/"
                        title="Крупная сетка"
                        description="Одним щелчком файла его можно открыть на боковой панели"
                        alt="Иконка крупной сетки"
                    />
                </div>
            </div>
        </>
    );
};