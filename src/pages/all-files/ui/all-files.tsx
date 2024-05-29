// Components
import { OptionsWorkingFiles } from "@/widgets/options-working-files/ui/options-working-files";
import { Title } from "@/shared/ui/title";

// Icons
import GearIcon from "@/shared/icons/icons-title/gear.png";

// Styles
import "./all-files.scss";

export function AllFiles() {
    return (
        <div className="all-files">
            <OptionsWorkingFiles />

            <div className="all-files__title">
                <Title
                    title="Все файлы"
                    icon={GearIcon}
                    alt="Иконка шестерни"
                />
            </div>
        </div>
    );
};