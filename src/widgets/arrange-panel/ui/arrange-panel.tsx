// Components
import { ShowLatest } from "@/features/show-latest";
import { ShowTagged } from "@/features/show-tagged";
import { SelectFile } from "@/features/select-file/ui/select-file";
import { PlacePage } from "@/features/arrange-btns/ui/place-page";
import { OpenFilesIn } from "@/features/arrange-btns/ui/open-files-in";

// Styles
import "./arrange-panel.scss";

export function ArrangePanel() {
    return (
        <div className="arrange-panel">

            {/* Не забыть зайти в features и поместить все папки с кнопками нжие в одну ui директорию */}
            <div className="arrange-panel__left-btns">
                <ShowLatest />
                <ShowTagged />
            </div>

            <div className="arrange-panel__right-btns">
                <SelectFile/>
                <PlacePage/>
                <OpenFilesIn/>
            </div>


        </div>
    );
};