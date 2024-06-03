// Components
import { OptionPlacePage } from "../option-place-page";

// Icons
import GridIcon from "@/shared/icons/arrange-panel-icons/grid.png";
import LargeGridIcon from "@/shared/icons/arrange-panel-icons/larg-gride.png";
import ListIcon from "@/shared/icons/arrange-panel-icons/list.png";
import LargeListIcon from "@/shared/icons/arrange-panel-icons/large-list.png";

// Styles
import "./menu-place-page.scss";

export function MenuPlacePage() {
    return (
        <>
            <div className="menu-place-page">
                <div className="menu-place-page__wrapper">

                    <p className="menu-place-page__title">Расположение на странице</p>

                    <OptionPlacePage
                        icon={GridIcon}
                        link="/"
                        title="Сетка"
                        alt="Иконка сетки"
                    />
                    <OptionPlacePage
                        icon={LargeGridIcon}
                        link="/"
                        title="Крупная сетка"
                        alt="Иконка крупной сетки"
                    />
                    <OptionPlacePage
                        icon={ListIcon}
                        link="/"
                        title="Список"
                        alt="Иконка списка"
                    />

                    <OptionPlacePage
                        icon={LargeListIcon}
                        link="/"
                        title="Крупный список"
                        alt="Иконка крупного списка"
                    />

                </div>
            </div>
        </>
    );
};